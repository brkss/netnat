import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { Post } from "../components";

export const Feed: React.FC = () => {
  return (
    <Box pt={"20px"} bg={"#1e191a"} minH={"100vh"}>
      <Container>
        <Heading color={"#f56371"} fontSize={"17px"}>
          Today's
        </Heading>
        <Box>
          <Post />
        </Box>
      </Container>
    </Box>
  );
};
