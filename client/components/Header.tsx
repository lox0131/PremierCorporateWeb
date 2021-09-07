import {
  Box,
  Flex,
  useMediaQuery,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  useDisclosure,
  DarkMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

const Header: React.FC = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 500px)");
  const [user] = useAuthState(firebase.auth());

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg="gray.900"
        color="white"
        minH={isLargerThan ? "9vh" : "11vh"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.900"
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 2 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Image
              h="39px"
              src="http://www.premiercorporatelimo.com/img/logo.png"
              // paddingLeft={isLargerThan ? "20px" : "0px"}
              // paddingRight={isLargerThan ? "0px" : "20px"}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
            justifyContent="center"
            paddingLeft="30px"
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <DarkMode>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {user && user.photoURL ? (
                  <Avatar size={"md"} src={`${user?.photoURL}`} />
                ) : (
                  <Avatar size={"md"} src={""} />
                )}
              </MenuButton>
              <MenuList>
                {user ? (
                  <>
                    <Link href="/drinks">
                      <MenuItem>View Reservations</MenuItem>
                    </Link>
                    <MenuDivider />
                  </>
                ) : (
                  <> </>
                )}
                {!user ? (
                  <Link href="/signin">
                    <MenuItem>Log In</MenuItem>
                  </Link>
                ) : (
                  <MenuItem onClick={() => firebase.auth().signOut()}>
                    Log Out
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </DarkMode>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
