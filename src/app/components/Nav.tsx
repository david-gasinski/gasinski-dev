"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  InputGroup,
  ModalBody,
  Input,
  VStack,
  Link,
  InputLeftAddon,
  Icon,
  Box
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import { useState, useEffect } from "react";

interface command {
  name: string;
  route: string;
}

const commands: command[] = [
  {
    name: "projects",
    route: "/projects",
  },
  {
    name: "skills",
    route: "/skills",
  },
];

export function Nav({
  isOpen,
  onClose,
  inputRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
}) {
  const [val, setVal] = useState("");
  const [render, setRender] = useState(commands); // on inital render all commands

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  // maybe write custom function to split text based on \n char and return array
  const help_message = ["Hello! Welcome to my portfolio", "To get started, type any command.", "Available Commands:", "-  view projects | skills"] // each element marks a new line

  // auto fill
  useEffect(() => {
    const render_queue: command[] = [];
    // if substring of length val === val then add
    commands.forEach((command) => {
      if (command.name.toLowerCase().substring(0, val.length) === val) {
        render_queue.push(command);
      }
    });
    setRender(render_queue);
  }, [val]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="background.dracula"
        color="comment.dracula"
        fontSize="2rem"
        w='container.md'
        h='25vh'
      >
        <ModalBody pb={5} >
          <Box display='flex' justifyContent='center' flexDir='row' alignItems='center' _hover={{borderColor:'comment.dracula'}}>
            <Icon as={IoIosArrowForward} fontSize='1.2rem'/>
            <Input
              name="command_line"
              type="input"
              value={val}
              ref={inputRef}
              borderColor='background.dracula'
              focusBorderColor='background.dracula'
              _hover={{borderColor:'background.dracula'}}
              w='90%'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInput(e);
              }}
              placeholder={"Enter command..."}
              />

              </Box>
          <VStack pt={2}>
            {render.map((command, index) => (
              <Command route={command.route} key={index}>
                {command.name}
              </Command>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function Command({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <Link href={route} fontSize="1.5rem">
      {children}
    </Link>
  );
}
