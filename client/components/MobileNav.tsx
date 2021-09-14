import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { NavItems } from "../Utils/NavItems"
import { INavItem } from "../interfaces/NavItems"

export const MobileNav: React.FC = () => {
  return (
    <Stack
      bg="gray.900"
      p={4}
      display={{ md: "none" }}
    >
      {NavItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export const MobileNavItem: React.FC<INavItem> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.200">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="gray.200"
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          color="gray.200"
          borderStyle={"solid"}
          borderColor="gray.700"
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};