import {
  Box,
  Container,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {

  const navigate = useNavigate()

  useEffect(()=>{
   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

   if(!userInfo){
      navigate('/chats')
   }
  },[navigate])
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="green"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize={"4xl"}
          color={"white"}
          fontFamily={"Work sans"}
          className="text-center"
        >
          Bingo Mingo Chat
        </Text>
      </Box>
      <Box
        bg={"whitesmoke"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
