import React from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
  label: string;
}

export const Button: React.FC<Props> = ({ onClick, label }) => {
  return (
    <Box>
      <Btn onClick={onClick}>{label}</Btn>
    </Box>
  );
};

const Btn = styled.button`
  background: #403134;
  padding: 5px 27px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
  color: white;
`;
