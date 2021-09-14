import { Flex, Text, Heading, Button, useMediaQuery } from "@chakra-ui/react";
import "animate.css";
interface Props {}

const DashBoard: React.FC<Props> = () => {
  return (
    <Flex bg="gray.800" flexDirection="column" position="relative">
      <Flex
        w="100vw"
        h="45vh"
        justifyContent="center"
        alignItems="center"
        bgImage="Webp.net-resizeimage.jpg"
        bgPos="center"
        bgSize="cover"
        alt="Image"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          className="animate__animated animate__fadeInUp"
        >
          <Heading color="white" textAlign="center" mb={3}>
            Priemier Corporate
          </Heading>
          <Heading textAlign="center" mb={3} color="blue.400">
            Five Star Service
          </Heading>
          <Text mb={3} fontSize="xl" color="white" textAlign="center">
            Experienced Chauffeurs
          </Text>
          <Button
            bg={"blue.400"}
            _hover={{
              bg: "blue.300",
              boxShadow: "md",
              transform: "scale(1.10)",
            }}
          >
            Reserve Now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard
