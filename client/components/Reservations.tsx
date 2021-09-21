import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
      >
        Reversation Form
      </Heading>
      <Flex
        w="100%"
        h="90vh"
        bg="gray.800"
        color="white"
        justifyContent="center"
      >
        <Flex
          w="60%"
          minW="325px"
          h="70%"
          borderWidth="1px"
          boxShadow="2xl"
          borderRadius="20px"
          flexDirection={isMinWidthMedium ? "row" : "column"}
        >
          <Flex w={isMinWidthMedium ? "50%" : "100%"}>
            <FormControl id="email" padding="20px">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
          </Flex>
          <Flex w={isMinWidthMedium ? "50%" : "100%"}>
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
