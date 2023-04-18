import { Container, Heading } from "@chakra-ui/react";

export const HeadingContainer = () => {
  return (
    <>
      <Container
        height={50}
        maxW="700px"
        display="flex"
        justifyContent="flex-start"
        marginBottom={25}
      >
        <Heading>Customize your password</Heading>
      </Container>
    </>
  );
};
