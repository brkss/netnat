import React from "react";
import { Box, Heading, Center, useDisclosure } from "@chakra-ui/react";
import { CreateCanvas } from "./CreateCanvas";

interface Props {
  clicked: () => void;
}

export const Block: React.FC<Props> = ({ clicked }) => {
  return (
    <Box onClick={() => clicked()} cursor={"pointer"} h={"100%"}>
      <Center h={"100%"}>
        <Heading fontSize={"14px"}>this is just a title</Heading>
      </Center>
    </Box>
  );
};
