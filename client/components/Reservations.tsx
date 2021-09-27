import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Button,
  Input,
  DarkMode,
  InputLeftAddon,
  InputGroup,
  useMediaQuery,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { TiLocationArrow, TiLocationArrowOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

const Reservations: React.FC = () => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isLargerThan] = useMediaQuery("(min-width: 950px)");
  const [address, setAddress] = useState("");
  const [address1, setAddress1] = useState("");
  useEffect(() => {
    if (isLargerThan !== isMinWidthMedium) {
      setIsMinWidthMedium(isLargerThan);
    }
  }, [isLargerThan]);
  
  const handleSelect = async (value: any) => {
     setAddress(value);
  };
  const handleSelect1 = async (value: any) => {
    setAddress1(value);
  };
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
        Reservation Form
      </Heading>
      <Flex
        w="100%"
        minH="80vh"
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
            <form>
              <FormControl id="email" padding="20px">
                <FormLabel>Select Service Type</FormLabel>
                <DarkMode>
                  <Select>
                    <option>From Airport</option>
                    <option>Point-to-Point</option>
                    <option>Hourly</option>
                  </Select>
                </DarkMode>
              </FormControl>
              <Flex flexDirection={isMinWidthMedium ? "row" : "column"}>
                <FormControl
                  id="date"
                  padding="20px"
                  w={isMinWidthMedium ? "60%" : "100%"}
                >
                  <FormLabel>Pick-Up Date</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl
                  id="email"
                  padding="20px"
                  w={isMinWidthMedium ? "40%" : "100%"}
                >
                  <FormLabel>Pick-Up Time</FormLabel>
                  <Input type="time" />
                </FormControl>
              </Flex>
              <FormControl padding="20px">
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <>
                      <FormLabel>Pick Up Location</FormLabel>
                      <Input
                        {...getInputProps({
                          placeholder: "Your pick-up location",
                        })}
                      />
                      <Flex flexDirection="column">
                        {loading ? <Flex>loading</Flex> : null}
                        {suggestions.map((suggestion, idx) => {
                          return (
                            <DarkMode key={idx}>
                              <Select
                                variant="filled"
                                padding="2px"
                                icon={<TiLocationArrow />}
                                {...getSuggestionItemProps(suggestion)}
                              >
                                <option>{suggestion.description}</option>
                              </Select>
                            </DarkMode>
                          );
                        })}
                      </Flex>
                    </>
                  )}
                </PlacesAutocomplete>
              </FormControl>
              <FormControl padding="20px">
                <PlacesAutocomplete
                  value={address1}
                  onChange={setAddress1}
                  onSelect={handleSelect1}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <>
                      <FormLabel>Drop Off Location</FormLabel>
                      <Input
                        {...getInputProps({
                          placeholder: "Your drop-off location",
                        })}
                      />
                      <Flex flexDirection="column">
                        {loading ? <Flex>loading</Flex> : null}
                        {suggestions.map((suggestion, idx) => {
                          return (
                            <DarkMode key={idx}>
                              <Select
                                variant="filled"
                                padding="2px"
                                icon={<TiLocationArrowOutline />}
                                {...getSuggestionItemProps(suggestion)}
                              >
                                <option>{suggestion.description}</option>
                              </Select>
                            </DarkMode>
                          );
                        })}
                      </Flex>
                    </>
                  )}
                </PlacesAutocomplete>
              </FormControl>
            </form>
          </Flex>
          <Flex w={isMinWidthMedium ? "50%" : "100%"} flexDirection="column">
            <form>
              <Flex flexDirection={isMinWidthMedium ? "row" : "column"}>
                <FormControl padding="20px">
                  <FormLabel>First Name</FormLabel>
                  <Input type="name" />
                </FormControl>
                <FormControl id="email" padding="20px">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="name" />
                </FormControl>
              </Flex>
              <FormControl id="email" padding="20px">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl padding="20px">
                <FormLabel>Phone Number</FormLabel>
                <DarkMode>
                  <InputGroup>
                    <InputLeftAddon children="+234" />
                    <Input type="tel" placeholder="Phone Number" />
                  </InputGroup>
                </DarkMode>
              </FormControl>
              <FormControl id="email" padding="20px">
                <FormLabel>Number of Passengers</FormLabel>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button
                w="30%"
                mb={10}
                mt={10}
                ml={5}
                colorScheme="facebook"
              >Reserve</Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Reservations;
