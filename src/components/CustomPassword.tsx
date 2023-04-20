import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { PasswordTypeRadio } from "./PasswordTypeRadio";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Headers } from "../types";

export const CustomPassword = (props: {
  type: string;
  setType: any;
  setHeaders: any;
  headers: Headers;
}) => {
  const [sliderValue, setSliderValue] = useState(12);
  const [showTooltip, setShowTooltip] = useState(false);

  const setState = (length: number) => {
    setSliderValue(length);
    props.setHeaders({ ...props.headers, length: length });
  };

  const handleNumbersCheckbox = (e: any) => {
    props.setHeaders({
      ...props.headers,
      numbers: JSON.stringify(e.target.checked),
    });
  };

  const handleUppercaseCheckbox = (e: any) => {
    props.setHeaders({
      ...props.headers,
      uppercase: JSON.stringify(e.target.checked),
    });
  };

  const handleSymbolsCheckbox = (e: any) => {
    props.setHeaders({
      ...props.headers,
      symbols: JSON.stringify(e.target.checked),
    });
  };

  useEffect(() => {
    console.log(props.headers);
  }, [props.headers]);

  return (
    <>
      <Container height={250} maxW="700px" display="flex" marginTop={25}>
        <Container maxW="450" display="flex" flexDirection="column">
          <Box fontWeight="bold">Password Type</Box>
          <PasswordTypeRadio type={props.type} setType={props.setType} />
          {props.type === "password" ? (
            <>
              <Box fontWeight="bold">Password Length</Box>
              <Slider
                id="slider"
                defaultValue={12}
                min={12}
                max={25}
                colorScheme="green"
                onChange={(v) => setState(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="green.400"
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={sliderValue}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
              <Input
                variant="filled"
                backgroundColor="gray.100"
                focusBorderColor="green.200"
                readOnly={true}
                size="lg"
                width={100}
                height={50}
                fontWeight="bold"
                value={sliderValue}
              />
            </>
          ) : (
            <></>
          )}
        </Container>
        <Container maxW="250px" display="flex">
          <Stack spacing={5} direction="column">
            <Checkbox
              colorScheme="green"
              size="lg"
              defaultChecked
              onChange={(e) => handleNumbersCheckbox(e)}
            >
              Numbers
            </Checkbox>
            <Checkbox
              colorScheme="green"
              size="lg"
              defaultChecked
              onChange={(e) => handleUppercaseCheckbox(e)}
            >
              Uppercase
            </Checkbox>
            <Checkbox
              colorScheme="green"
              size="lg"
              defaultChecked
              onChange={(e) => handleSymbolsCheckbox(e)}
            >
              Symbols
            </Checkbox>
          </Stack>
        </Container>
      </Container>
    </>
  );
};
