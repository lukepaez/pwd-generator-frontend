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
import { useState } from "react";
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
                colorScheme="purple"
                onChange={(v) => setState(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="purple.200"
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
                focusBorderColor="purple.200"
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
            <Checkbox colorScheme="purple" size="lg" defaultChecked>
              Numbers
            </Checkbox>
            <Checkbox colorScheme="purple" size="lg" defaultChecked>
              Uppercase
            </Checkbox>
            <Checkbox colorScheme="purple" size="lg" defaultChecked>
              Symbols
            </Checkbox>
          </Stack>
        </Container>
      </Container>
    </>
  );
};
