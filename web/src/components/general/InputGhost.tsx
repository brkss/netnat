import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

export const InputGhost: React.FC = () => {
  return (
    <Box>
      <Text>label holder</Text>
      <Input />
    </Box>
  );
};

const Input = styled.input``;
