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
import PlacesAutocomplete from "react-places-autocomplete";
import { TiLocationArrow, TiLocationArrowOutline } from "react-icons/ti";
import React, { useEffect, useState } from "react";

const Reservations: React.FC = () => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isLargerThan] = useMediaQuery("(min-width: 950px)");
  const [address, setAddress] = useState("");
  const [address1, setAddress1] = useState("");
  const [formData, setFormData] = useState<any>({
    service: "",
    pick_up_date: "",
    pick_up_time: "",
    address_pick: "",
    address_drop: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    passengers: 0,
  });
  useEffect(() => {
    if (isLargerThan !== isMinWidthMedium) {
      setIsMinWidthMedium(isLargerThan);
    }
  }, [isLargerThan]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  
   const handleChange = (
     e:
       | React.ChangeEvent<HTMLInputElement>
       | React.ChangeEvent<HTMLSelectElement>
   ) => {
     e.preventDefault();
     setFormData({
       ...formData,
       [e.currentTarget.name]: e.currentTarget.value,
     });
   };

  const handleSelect = async (value: any) => {
    setFormData({ ...formData, address_pick: value });
  };
  const handleSelect1 = async (value: any) => {
     setFormData({ ...formData, address_drop: value });
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
                  <Select name="service" value={formData.service || ""}>
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
                  <Input
                    name="pick_up_date"
                    value={formData.pick_up_date || ""}
                    type="date"
                  />
                </FormControl>
                <FormControl
                  id="email"
                  padding="20px"
                  w={isMinWidthMedium ? "40%" : "100%"}
                >
                  <FormLabel>Pick-Up Time</FormLabel>
                  <Input
                    name="pick_up_time"
                    value={formData.pick_up_time || ""}
                    type="time"
                  />
                </FormControl>
              </Flex>
              <FormControl padding="20px">
                <PlacesAutocomplete
                  value={formData.address_pick || ""}
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
                        name="pick_up_location"
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
                  value={formData.address_drop || ""}
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
                  <Input
                    name="name"
                    value={formData.firstname || ""}
                    type="name"
                  />
                </FormControl>
                <FormControl padding="20px">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastname"
                    value={formData.lastname || ""}
                    type="name"
                  />
                </FormControl>
              </Flex>
              <FormControl id="email" padding="20px">
                <FormLabel>Email address</FormLabel>
                <Input value={formData.email || ""} name="email" type="email" />
              </FormControl>
              <FormControl padding="20px">
                <FormLabel>Phone Number</FormLabel>
                <DarkMode>
                  <InputGroup>
                    <InputLeftAddon children="+1" />
                    <Input
                      value={formData.phone_number || ""}
                      name="phone_number"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </InputGroup>
                </DarkMode>
              </FormControl>
              <FormControl padding="20px">
                <FormLabel>Number of Passengers</FormLabel>
                <NumberInput>
                  <NumberInputField value={formData.passengers || 0} name="passengers" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button w="30%" mb={7} mt={7} ml={5} colorScheme="facebook">
                Reserve
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Reservations;
