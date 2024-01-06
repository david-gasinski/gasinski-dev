import {
    Modal,
    ModalOverlay, 
    ModalContent,
    ModalHeader,
    ModalBody,
    Box,
    Input,
} from '@chakra-ui/react'

import { ReactEventHandler, useState, useRef } from 'react'

export function Nav({children, isOpen, onClose} : {children: React.ReactNode, isOpen: boolean, onClose: () => void}){

    const [val, setVal] = useState('')
    const initialFocus = useRef(null)

    const handleInput = (input: string) => {
        setVal(input);
        console.log(val);
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="background.dracula" color="comment.dracula" fontSize="2rem">
          <ModalBody pb={5} w="100%">
            <Box>
                <Input
                    autoFocus={false}
                    value={val}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
                    ref={initialFocus}
                    placeholder={"Enter command..."}
                    />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    ) 
}