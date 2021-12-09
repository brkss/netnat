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
import { InputGhost, TextAreaGhost } from "..";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCanvas: React.FC<Props> = ({ onClose, isOpen }) => {
  return (
    <>
      <Drawer size={"lg"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your block</DrawerHeader>

          <DrawerBody>
            <InputGhost placeholder={"Block Title"} />
            <Badge colorScheme="green" rounded={"50px"} p={"1px 7px"}>
              Text Mode
            </Badge>
            <TextAreaGhost ph={"Write somethig here ! "} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
