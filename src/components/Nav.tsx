import { Box, Divider, Flex, Heading } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <>
      <Flex
        as="nav"
        bg="purple.300"
        color="white"
        justifyContent="flex-start"
        alignItems="center"
        height="60px"
        minW={500}
      >
        <Heading as="h1" marginLeft="20px">
          Cryptly
        </Heading>
      </Flex>
    </>
  );
};
