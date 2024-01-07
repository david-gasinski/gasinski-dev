"use client";
import {
    Modal,
    ModalOverlay, 
    ModalContent,
    FormControl,
    ModalBody,
    Container,
    Input,
    VStack,
} from '@chakra-ui/react'

import { ReactEventHandler, useState, useRef } from 'react'

export function Nav({ isOpen, onClose, inputRef} : { isOpen: boolean, onClose: () => void, inputRef: React.LegacyRef<HTMLInputElement>}){

    const [val, setVal] = useState('')
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
        console.log(val);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="background.dracula" color="comment.dracula" fontSize="2rem">
          <ModalBody pb={5} w="100%">
            <FormControl>
                <Input
                  name="command_line"
                  type="input"
                  value={val}
                  ref={inputRef}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleInput(e)}}
                  placeholder={"Enter command..."}
                  />
            </FormControl>

            <VStack>

            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    ) 
}


function Command({name, route} : {name: string, route: string}){
  return (

  )
}