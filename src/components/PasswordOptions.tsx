import { Button, Container } from "@chakra-ui/react";
import { useGetPassword } from "./useGetPassword";
import { useState } from "react";
import { HeadingContainer } from "./HeadingContainer";
import { Underline } from "./Divider";
import { PasswordTypeRadio } from "./PasswordTypeRadio";
import { GeneratePassword } from "./GeneratePassword";
import { CustomPassword } from "./CustomPassword";

export const PasswordOptions = (props: { headers: any; setHeaders: any }) => {
  const [passwordType, setPasswordType] = useState("password");

  return (
    <>
      <Container maxW="700px" minH={400} display="flex" flexDirection="column">
        <HeadingContainer />
        <Underline />
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
