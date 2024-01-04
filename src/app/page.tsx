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
  HStack
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Socials } from "./components/Socials";
import { Link } from "@chakra-ui/next-js";
import { FaGithubSquare, FaRegFilePdf, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiNextdotjs, SiChakraui, SiPython, SiSocketdotio } from "react-icons/si";

export default function Home() {
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
          <Button leftIcon={<FaRegFilePdf />} bg="cyan.dracula">
            View my Resume
          </Button>
        </Container>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Grid templateColumns="repeat(2, 1fr)" maxW={"container.xl"}>
          <GridItem>
            <Header underlined={false} size="2rem">
              Skills
            </Header>
          </GridItem>
          <GridItem>
            <Header underlined={false} size="2rem">
              Projects
            </Header>
            <Project
              title="MiniPlayArena"
              demo="https://miniplayarena.gasinski.dev"
              github="https://github.com/MiniPlayArena/"
            >
              A simple platform to allow users to play popular board games online with their friends. Players can create parties to allow their friends to join and play many classic card/board games! 
                <HStack pt={5} maxW='50%'>
                  <Button isActive={false} leftIcon={<SiNextdotjs />}>
                    NextJS  
                  </Button>
                  <Button isActive={false} leftIcon={<SiChakraui />}>
                    Chakra UI
                  </Button>
                  <Button isActive={false} leftIcon={<SiPython />}>
                    Python Flask
                  </Button>
                  <Button isActive={false} leftIcon={<SiSocketdotio />}>
                    Flask-Socket.io
                  </Button>
                </HStack>
            </Project>
          </GridItem>
        </Grid>
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
      <CardHeader>
        <Heading size="lg"> {title}</Heading>
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
