import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
 
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { DesktopSubNav } from "./DesktopSubNav";
import { NavItems } from "../Utils/NavItems";

export const DesktopNav = () => {
  const linkColor =  "gray.200"
  const linkHoverColor = "white"
  const popoverContentBgColor =  "gray.800"

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
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
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



