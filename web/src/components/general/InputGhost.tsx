import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  placeholder: string;
}

export const InputGhost: React.FC<Props> = ({ placeholder }) => {
  return (
    <Box>
      <Input placeholder={placeholder} />
    </Box>
  );
};

const Input = styled.input`
  font-weight: bold;
  padding: 8px;
  background: #f1f1f100;
  width: 100%;
  font-size: 25px;
  padding-left: 0;
  &:focus {
    outline: none;
  }
`;
