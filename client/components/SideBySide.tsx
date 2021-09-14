import { Flex, Image, Heading, Divider } from "@chakra-ui/react";

interface Props {}

const SideBySide = (props: Props) => {
  return (
    <>
      <Heading padding="20px" textAlign="center" bg="gray.800" color="white">
        Our Services
      </Heading>
      <Flex flexDirection="column" bg="gray.800" color="white" padding="20px">
        <Flex justifyContent="space-evenly">
          <Flex w="25%">
            <Heading>Airport Transporation</Heading>
          </Flex>
          <Image
            borderRadius="10px"
            src="artur-tumasjan-KZSNMN4VxR8-unsplash.jpg"
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
