import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

export const Block: React.FC = () => {
  return (
    <Box cursor={"pointer"} h={"100%"}>
      <Center h={"100%"}>
        <Heading fontSize={"14px"}>this is just a title</Heading>
      </Center>
    </Box>
  );
};
