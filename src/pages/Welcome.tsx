import "../styles/Welcome.css";
import { PasswordInput } from "../components/PasswordInput";
import { PasswordOptions } from "../components/PasswordOptions";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";

export const Welcome = () => {
  const [headers, setHeaders] = useState({
    numbers: "true",
    uppercase: "true",
    symbols: "true",
    length: "12",
  });
  return (
    <div className="App">
      <PasswordInput headers={headers} />
      <PasswordOptions headers={headers} setHeaders={setHeaders} />
    </div>
  );
};
