import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const Reservations: React.FC = () => {
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
        <Flex w="70%" minW="325px" h="70%" backgroundColor="red">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>jnjn</FormHelperText>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>jnjn</FormHelperText>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default Reservations;
