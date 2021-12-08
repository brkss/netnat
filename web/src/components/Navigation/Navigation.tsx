import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Badge,
  Avatar,
  Text,
} from "@chakra-ui/react";

export const Navigation: React.FC = () => {
  return (
    <Box bg={"#1e191a"} p={"7px"} w={"100%"}>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={6}>
          <Heading fontSize={"17px"}>netnat</Heading>
        </GridItem>
        <GridItem colSpan={6} alignItems={"end"} textAlign={"right"}>
          <Badge
            bg={"#403134"}
            color={"white"}
            rounded={"50px"}
            p={"4px"}
            pr={"8px"}
          >
            <Avatar src="https://bit.ly/broken-link" size={"xs"} />
            <Text
              display={"inline-block"}
              mt={"5px"}
              ml={"3px"}
              fontSize={"10px"}
            >
              avocado-youate
            </Text>
          </Badge>
        </GridItem>
      </Grid>
    </Box>
  );
};
