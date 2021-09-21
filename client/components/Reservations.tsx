import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  DarkMode,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Reservations: React.FC = () => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isLargerThan] = useMediaQuery("(min-width: 800px)");
  useEffect(() => {
    if (isLargerThan !== isMinWidthMedium) {
      setIsMinWidthMedium(isLargerThan);
    }
  }, [isLargerThan]);

  return (
    <>
      <Heading
        as="h2"
        size="2xl"
        textAlign="center"
        bg="gray.800"
        color="white"
        padding="40px"
        paddingBottom={20}
      >
        Reservation Form
      </Heading>
      <Flex
        w="100%"
        minH="75vh"
        bg="gray.800"
        color="white"
        justifyContent="center"
      >
        <Flex
          w="90%"
          minW="325px"
          maxW="1400px"
          padding="20px"
          h="70%"
          borderWidth="1px"
          boxShadow="dark-lg"
          borderRadius="20px"
          flexDirection={isMinWidthMedium ? "row" : "column"}
        >
          <Flex w={isMinWidthMedium ? "50%" : "100%"} flexDirection="column">
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="date" color="white" />
            </FormControl>
            <FormControl id="date" padding="20px">
              <FormLabel>date address</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
          </Flex>
          <Flex w={isMinWidthMedium ? "50%" : "100%"} flexDirection="column">
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Reservations;
