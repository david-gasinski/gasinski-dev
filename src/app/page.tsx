"use client";

import { Button, Box, Stack, Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Socials } from "./components/Socials";
import { Link } from "@chakra-ui/next-js";
import { FaRegFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <motion.div>
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
          studying <b> Software Engineering</b>. I'm avid problem solver with a
          passion for programming and mathematics, also an athlete who enjoys swimming recreationally and
          occasioanlly competing in amateur powerlifting. 
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
    </>
  );
}
