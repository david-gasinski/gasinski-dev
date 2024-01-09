import { Box, Button, Kbd, Icon } from "@chakra-ui/react";
import {  motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

export function NavButton({onToggle} : {onToggle: () => void}) {
    return (
        <motion.div 
       initial={{ x: 100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ type: "spring", stiffness: 100 }}
      >
      <Box
        maxW='container.xl'
        textAlign='center'
      >

        <Button
          m={5}
          pt={5}
          pb={5}
          fontSize="1.5rem"
          bg="backgroud.dracula"
          color="comment.dracula"
          _hover={{ bg: "highlight.dracula" }}
          onClick={onToggle}
          >
          Press
          <Kbd ml={2} mr={1}>
            {" "}
            ctrl{" "}
          </Kbd>
          +
          <Kbd ml={1} mr={2}>
            {" "}
            K
          </Kbd>
          to start
        <Icon pl={2} as={FaLongArrowAltRight} />
        </Button>
          </Box>
          </motion.div>
    )
}