import { Container, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const PasswordTypeRadio = (props: { type: string; setType: any }) => {
  return (
    <>
      <Container marginBottom={50}>
        <RadioGroup
          defaultValue="password"
          onChange={props.setType}
          value={props.type}
          size="lg"
        >
          <Stack spacing={5} direction="row">
            <Radio colorScheme="green" value="password">
              Password
            </Radio>
            <Radio colorScheme="green" value="passphrase">
              Passphrase
            </Radio>
          </Stack>
        </RadioGroup>
      </Container>
    </>
  );
};
