import { Container, Input, Tooltip } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useGetPassword } from "./useGetPassword";
import "../styles/PasswordInput.css";
import { useState } from "react";
import { Headers } from "../types";

export const PasswordInput = (props: Headers) => {
  const [passwordType, setPasswordType] = useState<string>("password");

  const { data } = useGetPassword(passwordType, props);
  return (
    <>
      <Container maxW="700px" display="flex" alignItems="center">
        <Input
          variant="filled"
          backgroundColor="gray.100"
          focusBorderColor="purple.200"
          readOnly={true}
          size="lg"
          width={700}
          height={75}
          fontSize={28}
          fontWeight="bold"
          defaultValue={data}
          marginRight={4}
        />
        <Tooltip label="Copy" placement="top">
          <IconButton
            variant="ghost"
            colorScheme="white"
            aria-label="Copy"
            height={50}
            width={50}
            onClick={() => navigator.clipboard.writeText(data)}
            icon={<CopyIcon color="black" height={50} width={30} />}
          />
        </Tooltip>
      </Container>
    </>
  );
};
