import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

export const Navigation: React.FC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem>
          <Heading fontSize={"12px"}>netnat</Heading>
        </GridItem>
        <GridItem>
          <Box>H</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
