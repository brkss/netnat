import React from "react";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Block, CreateCanvas, BlockContent } from "../components";

const colors = [
  "#fec5bb",
  "#fcd5ce",
  "#fae1dd",
  "#f8edeb",
  "#e8e8e4",
  "#d8e2dc",
  "#ece4db",
  "#ffe5d9",
  "#ffd7ba",
  "#fec89a",
];

export const Canvas: React.FC = () => {
  const _createCanvasDisclosure = useDisclosure();
  const _blockContentDisclosure = useDisclosure();

  // init blocks
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
            {key == 2 ? (
              <Block
                empty={false}
                clicked={() => _blockContentDisclosure.onOpen()}
              />
            ) : (
              <Block
                empty={true}
                clicked={() => _createCanvasDisclosure.onOpen()}
              />
            )}
          </GridItem>
        ))}
      </Grid>
      <CreateCanvas
        isOpen={_createCanvasDisclosure.isOpen}
        onClose={_createCanvasDisclosure.onClose}
      />
      <BlockContent
        isOpen={_blockContentDisclosure.isOpen}
        onClose={_blockContentDisclosure.onClose}
      />
    </Box>
  );
};
