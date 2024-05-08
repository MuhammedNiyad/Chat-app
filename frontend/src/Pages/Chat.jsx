import { Box } from "@chakra-ui/react"
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/miscellaneous/SideDrawer"
import MyChats from "../components/MyChats"
import ChatBox from "../components/ChatBox"

export default function Chat() {

   const {user} = ChatState()

  return (
    <div className="w-full">
        {user && <SideDrawer/>}
        <Box className="w-full flex justify-between h-[91.rvh] p-3">
            {user && <MyChats/>}
            {user && <ChatBox/>}
        </Box>
    </div>
  )
}
