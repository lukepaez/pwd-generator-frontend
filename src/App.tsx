import { useEffect, useState } from "react";
import { Welcome } from "./pages/Welcome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Nav } from "./components/Nav";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Nav />
          <Welcome />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
