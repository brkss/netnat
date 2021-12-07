import React from "react";
import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Button } from "../general";
import { Reaction } from "./Reaction";

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
      <Text
        lineHeight={"16px"}
        fontSize={"14px"}
        fontWeight={"bold"}
        color={"#ffffff94"}
        mt={"8px"}
      >
        This is a random content please do not read ! stop reading this is not a
        warning wait you still reading please stop, hope you didnt just waste
        your time !
      </Text>
      <Box mt={"10px"}>
        <Wrap>
          <WrapItem>
            <Reaction icon={"❤️"} />
          </WrapItem>
          <WrapItem>
            <Reaction icon={"🤨"} />
          </WrapItem>
          <WrapItem>
            <Reaction icon={"😮"} />
          </WrapItem>
          <WrapItem>
            <Reaction icon={"🤥"} />
          </WrapItem>
          <WrapItem>
            <Reaction icon={"👍"} />
          </WrapItem>
          <WrapItem>
            <Reaction icon={"👎"} />
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};
