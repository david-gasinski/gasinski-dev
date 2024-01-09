"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  VStack,
  Link,
  Text,
  Icon,
  Box,
  SlideFade
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import { useState, useEffect } from "react";

interface command {
  name: string;
  route: string;
  component?: React.ReactNode;
}

const commands: command[] = [
  {
    name: "home",
    route: "/"
  },
  {
    name: "projects",
    route: "/projects",
  },
  {
    name: "skills",
    route: "/skills",
  }, 
  {
    name: "blog",
    route: "/blogs"
  }
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
    <SlideFade in={isOpen} offsetY='20px'>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="background.dracula"
        color="comment.dracula"
        fontSize="2rem"
        w='container.md'
        pb={1}
      >
        <ModalBody>
          <Text fontSize='0.8rem' pb={2}>
            search for a page below, click the link to access it 
          </Text>
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
              placeholder={"Search..."}
              />

              </Box>
          <VStack pt={2}>
            {render.map((command, index) => (
                command.component ? (
                  command.component
                  ) : (
                  <Link href={command.route} key={index} fontSize="1.5rem" borderColor='comment.dracula' w='100%' textAlign={'center'}>
                    {command.name}
                  </Link>
                )
                ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
</SlideFade>
  );
}


