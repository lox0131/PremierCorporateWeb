import {
  Flex,
  Image,
  Heading,
  Text,
  useMediaQuery,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Props {}

const SideBySide = (props: Props) => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isLargerThan] = useMediaQuery("(min-width: 800px)");
  useEffect(() => {
    if (isLargerThan !== isMinWidthMedium) {
      setIsMinWidthMedium(isLargerThan);
    }
  }, [isLargerThan]);
  return (
    <>
      <Heading padding="40px" textAlign="center" bg="gray.800" color="white">
        Our Top Services
      </Heading>
      <Divider></Divider>
      <Flex
        flexDirection="column"
        bg="gray.800"
        color="white"
        padding="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          flexDirection={isMinWidthMedium ? "row" : "column"}
          paddingTop="20px"
          minW="55vw"
        >
          <Flex
            flexDirection="column"
            paddingRight={isMinWidthMedium ? "60px" : "0px"}
            justifyContent="center"
            maxW="840px"
            alignItems="center"
            mb={isMinWidthMedium ? "20px" : "0px"}
            paddingBottom="20px"
          >
            <Heading mb={2} textAlign="center">
              Airport Transporation
            </Heading>
            <Text color="gray.300" textAlign="center">
              Empire Limousine services all Signature Flight Support Centers,
              Atlantic Aviation FBO Centers and other FBO flight center
              locations throughout the US and worldwide. We provide private
              executive FBO airport ground transportation and luxury car
              services to any location with just a simple phone call or an
              online reservation. Call us today to discuss your FBO airport
              transportation service needs. Empire Limousine will answer any
              questions you may have.
            </Text>
            <Button mt={10} colorScheme="blue" justifyContent="center">
              Learn More
            </Button>
          </Flex>
          <Image
            borderRadius="10px"
            height="300px"
            w="250%"
            src="safwan-mahmud-6xQFm9TFwmk-unsplash.jpg"
            bgPos="center"
            bgSize="cover"
            alt="Image"
          />
        </Flex>
        <Flex
          flexDirection={isMinWidthMedium ? "row" : "column"}
          paddingTop="20px"
          minW="55vw"
        >
          <Image
            borderRadius="10px"
            height="300px"
            w="250%"
            src="safwan-mahmud-6xQFm9TFwmk-unsplash.jpg"
            bgPos="center"
            bgSize="cover"
            alt="Image"
          />
          <Flex
            flexDirection="column"
            maxW="840px"
            paddingLeft={isMinWidthMedium ? "60px" : "0px"}
            justifyContent="center"
            alignItems="center"
            mt={10}
          >
            <Heading mb={2} textAlign="center">
              Airport Transporation
            </Heading>
            <Text color="gray.300" textAlign="center">
              Empire Limousine services all Signature Flight Support Centers,
              Atlantic Aviation FBO Centers and other FBO flight center
              locations throughout the US and worldwide. We provide private
              executive FBO airport ground transportation and luxury car
              services to any location with just a simple phone call or an
              online reservation. Call us today to discuss your FBO airport
              transportation service needs. Empire Limousine will answer any
              questions you may have.
            </Text>
            <Button
              mt={10}
              mb={isMinWidthMedium ? "20" : "0"}
              colorScheme="blue"
              justifyContent="center"
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
        <Divider></Divider>
      </Flex>
    </>
  );
};

export default SideBySide;
