import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setloadingChat] = useState();
  const { user } = ChatState();
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/")
  };

  return (
    <Box className="flex justify-between items-center bg-white w-full px-5 py-3">
      <Tooltip label="Search User to chat" hasArrow placeContent="bottum-end">
        <Button variant="ghost">
          <i class="fa-solid fa-magnifying-glass"></i>
          <Text className="hidden md:flex px-4">Search User</Text>
        </Button>
      </Tooltip>
      <Text className='text-2xl font-["Work,sans]'>Bingo Mingo Chat</Text>
      <div>
        <Menu>
          <MenuButton className="p-1">
            <BellIcon className="text-2xl m-1" />
          </MenuButton>
          {/* <MenuList>

          </MenuList> */}
        </Menu>
        <Menu>
          <MenuButton
            className="p-1"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Avatar
              size="sm"
              className="cursor-pointer"
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuDivider />
            <MenuItem onClick={logoutHandler}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
