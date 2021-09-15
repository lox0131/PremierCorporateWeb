import { Flex, Image, Heading, Text, useMediaQuery, Divider } from "@chakra-ui/react";

interface Props {}

const SideBySide = (props: Props) => {
  const [isLargerThan] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Heading padding="40px" textAlign="center" bg="gray.800" color="white">
        Our Top Services
      </Heading>
      <Divider></Divider>
      <Flex flexDirection="column" bg="gray.800" color="white" padding="20px">
        <Flex
          justifyContent="space-evenly"
          flexDirection={isLargerThan ? "row" : "column"}
        >
          <Flex flexDirection="column">
            <Heading>Airport Transporation</Heading>
            <Text color="gray.300">dsfsdfsdfsf</Text>
          </Flex>
          <Image
            borderRadius="10px"
            src="safwan-mahmud-6xQFm9TFwmk-unsplash.jpg"
            bgPos="center"
            bgSize="cover"
            alt="Image"
          />
        </Flex>
        <Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SideBySide;
