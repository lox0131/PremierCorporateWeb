import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { DesktopSubNav } from "./DesktopSubNav";
import { NavItems } from "../Utils/NavItems";

export const DesktopNav = () => {
  

  return (
    <Stack direction={"row"} spacing={4}>
      {NavItems.map((navItem) => (
        <Box key={uuidv4()}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            id={navItem.label}
          >
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color="gray.200"
                _hover={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            <Icon as={navItem.icon} />
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg="gray.800"
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child: any) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};



