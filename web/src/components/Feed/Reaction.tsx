import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  icon: string;
}

export const Reaction: React.FC<Props> = ({ icon }) => {
  return (
    <Box
      cursor={"pointer"}
      bg={"#88575787"}
      p={"0 12px"}
      rounded={"5px"}
      fontSize={"14px"}
      fontWeight={"bold"}
      color={"white"}
    >
      {icon} 3
    </Box>
  );
};
