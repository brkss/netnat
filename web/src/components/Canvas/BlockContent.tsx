import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Badge,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BlockContent: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Badge colorScheme="green" rounded={"50px"} p={"1px 7px"}>
              Text Mode
            </Badge>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
