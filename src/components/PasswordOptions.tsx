import { Button, Container } from "@chakra-ui/react";
import { useGetPassword } from "./useGetPassword";
import { useState } from "react";
import { HeadingContainer } from "./HeadingContainer";
import { Seperator } from "./Seperator";
import { PasswordTypeRadio } from "./PasswordTypeRadio";
import { GeneratePassword } from "./GeneratePassword";
import { CustomPassword } from "./CustomPassword";
import { Headers } from "../types";

export const PasswordOptions = (props: {
  headers: Headers;
  setHeaders: any;
}) => {
  const [passwordType, setPasswordType] = useState<string>("password");

  return (
    <>
      <Container maxW="700px" minH={400} display="flex" flexDirection="column">
        <HeadingContainer />
        <Seperator />
        <CustomPassword
          type={passwordType}
          setType={setPasswordType}
          setHeaders={props.setHeaders}
          headers={props.headers}
        />
        <GeneratePassword type={passwordType} headers={props.headers} />
      </Container>
    </>
  );
};
