import { Button, Container, Divider } from "@chakra-ui/react";
import { useGetPassword } from "./useGetPassword";

export const GeneratePassword = (props: { type: string; headers: any }) => {
  const { refetch } = useGetPassword(props.type, props.headers);

  const getPassword = () => {
    refetch();
  };
  return (
    <>
      <Container
        height={50}
        maxW="700px"
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          colorScheme="gray"
          variant="solid"
          height={50}
          width={150}
          fontSize="2xl"
          onClick={() => getPassword()}
        >
          Generate
        </Button>
      </Container>
    </>
  );
};
