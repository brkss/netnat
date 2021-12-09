import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Block } from "../components";

const colors = [
  "#F3F1F5",
  "#F0D9FF",
  "#BFA2DB",
  "#7F7C82",
  "#009DAE",
  "#71DFE7",
  "#C2FFF9",
  "#FFE652",
];

export const Canvas: React.FC = () => {
  const o = [];
  for (let i = 0; i < 100; i++) {
    o.push(i);
  }
  return (
    <Box bg={"#ffe7eb"} h={"100vh"}>
      <Grid templateColumns="repeat(6, 1fr)">
        {o.map((i, key) => (
          <GridItem
            colSpan={{ md: 1, base: 3 }}
            h={"100px"}
            bg={colors[Math.floor(Math.random() * colors.length)]}
          >
            {key == 2 ? <Block /> : null}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
