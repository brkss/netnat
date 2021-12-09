import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  ph: string;
}

export const TextAreaGhost: React.FC<Props> = ({ ph }) => {
  return (
    <Box>
      <TextArea rows={7} placeholder={ph} />
    </Box>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  background: #f3f2f2;
  resize: none;
  padding: 8px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: bold;
  color: #505050;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
