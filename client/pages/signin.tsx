import {
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

//Configure Firebase UI
const uiConfig = {
  //Redirect to / after sign in is sucessful.
  signInFlow: "popup",
  signInSuccessUrl: "/",
  // Display auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export default function signin() {
  return (
    <Flex
      px={8}
      py={24}
      mx="auto"
      h="100vh"
      w="100vw"
      backgroundColor="gray.900"
      alignItems="center"
      justifyContent="center"
    >
      <Box as="form" mb={6} rounded="lg" shadow="xl" padding="40px">
        <Heading color="white" textAlign="center" mb={9}>
          Sign In
        </Heading>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Box>
    </Flex>
  );
}

{
  /* 
<StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        /> */
}
