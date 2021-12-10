import React from "react";
import { Box, Heading, Center, useDisclosure } from "@chakra-ui/react";
import { CreateCanvas } from "./CreateCanvas";

interface Props {
  empty: boolean;
  clicked: () => void;
}

export const Block: React.FC<Props> = ({ clicked, empty }) => {
  return (
    <Box onClick={() => clicked()} cursor={"pointer"} h={"100%"}>
      <Center h={"100%"}>
        {empty ? (
          <Heading opacity={0.5} fontSize={"14px"}>
            Empty ⭐️
          </Heading>
        ) : (
          <>
            <Heading fontSize={"14px"}>this is just a title</Heading>
          </>
        )}
      </Center>
    </Box>
  );
};
