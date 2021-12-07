import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Post: React.FC = () => {
  return (
    <Box
      bg={"#403134"}
      mt={"15px"}
      rounded={"5px"}
      border={"1px solid #826269"}
      p={"15px"}
    >
      <Heading fontSize={"14px"} color={"white"}>
        red-owl
      </Heading>
      <Text>
        This is a random content please do not read ! stop reading this is not a
        warning wait you still reading please stop, hope you didnt just waste
        your time !
      </Text>
    </Box>
  );
};
