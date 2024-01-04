import { Code, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Heading
export function Header({children, underlined, size} : {children: React.ReactNode, underlined: Boolean, size: string}){
    return (
      <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
              >
                  <Box
                      maxW='container.xl'
                      display='flex'
                      justifyContent='center'
                      flexDir='row'
                      pt={10}
                  >
                      <Code mb={5} fontSize={size} bg='highlight.dracula' color='text.dracula'>
                         {children}
                      </Code>
                  </Box>
                  {underlined ? (
                      <Box
                          background={
                              'linear-gradient(to right, rgb(255, 85, 85), rgb(80, 250, 123), rgb(139, 233, 253))'
                          }
                          maxW={'container.xl'}
                          h={2}
                          borderRadius={10}
                      />
                  ) : (
                    <>
                    </>
                  )}
              </motion.div>
    )
  }