/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GoogleAPIKEY}&libraries=places`}
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp
