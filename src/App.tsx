import { useEffect, useState } from "react";
import { Welcome } from "./pages/Welcome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./components/Nav";
import { theme } from "./components/Theme";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Nav />
          <Welcome />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
