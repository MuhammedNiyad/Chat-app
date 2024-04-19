import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/miscellaneous/SideDrawer"

export default function Chat() {

   const {user} = ChatState()

  return (
    <div className="w-full ">
        {user && <SideDrawer/>}
        <Box>
            {/* {user && <MyChats/>} */}
            {/* {user && <ChatBox/>} */}
        </Box>
    </div>
  )
}
