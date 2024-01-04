"use client";

import {
  Button,
  Box,
  Stack,
  Container,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Code,
  Icon,
  Kbd
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Socials } from "./components/Socials";
import { Link } from "@chakra-ui/next-js";
import { FaGithubSquare, FaLongArrowAltRight, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";

export default function Home() {

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key == "k") {
      // do something
      console.log(`You just pressed control and k`);
    }
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler)
    }
  })
  return (
    <>
      <Header underlined={true} size="3rem">
        David Gasinski
      </Header>
      <Socials />

      {
        // About Me
      }
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Container
          pt={5}
          maxW="container.xl"
          color="comment.dracula"
          fontSize="1.1rem"
        >
          <Box pt={2}>
            Welcome! My name is David and i'm an undergraduate student
            <Link color={"cyan.dracula"} href={"https://www.sheffield.ac.uk/"}>
              {" "}
              @ The University of Sheffield{" "}
            </Link>
            studying <b> Software Engineering</b>. I'm avid problem solver with
            a passion for programming and mathematics, also an athlete who
            enjoys swimming recreationally and occasioanlly competing in amateur
            powerlifting.
          </Box>
          <Box pt={5}>
            <b>Missions Engineer </b>for
            <Link
              color={"cyan.dracula"}
              href={"https://www.linkedin.com/company/project-falcon-uk/"}
            >
              {" "}
              Project Falcon.
            </Link>
          </Box>
          <Box pb={5}>
            Winner of 2022
            <Link color={"cyan.dracula"} href={"https://shefcompsoc.uk/"}>
              {" "}
              ShefJam 9.
            </Link>
          </Box>
        </Container>
      </motion.div>
      
      <motion.div
        initial={{}}
        animate={{}}
        transition={{}}
      >
      <Button m={5} pt={5} pb={5} fontSize='1.5rem' bg='backgroud.dracula' color='comment.dracula' _hover={{ bg: 'highlight.dracula'}}>
              Press 
                <Kbd  ml={2} mr={1}>
                  ctrl
                </Kbd>
                +
                <Kbd ml={1} mr={2}>
                  K
                </Kbd>
              to start
              <Icon pl={2} as={FaLongArrowAltRight} />
           </Button>
      </motion.div>
    </>
  );
}

function Project({
  children,
  title,
  github,
  demo,
}: {
  children: React.ReactNode;
  title: string;
  github: string;
  demo: string;
}) {
  return (
    <Card
      mt={5}
      mb={5}
      ml={10}
      mr={10}
      bg="highlight.dracula"
      color="text.dracula"
    >
      <CardHeader textAlign='left'>
        <Heading size="lg" alignContent='left'> {title}</Heading>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter display="flex" justifyContent="center">
        <Stack direction="row" align="center" spacing={4}>
          <Link href={demo}>
            <Button rightIcon={<FaRocket />}>Try it </Button>
          </Link>
          <Link href={github}>
            <Button rightIcon={<FaGithubSquare />}>View on github</Button>
          </Link>
        </Stack>
      </CardFooter>
    </Card>
  );
}
