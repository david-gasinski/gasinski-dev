"use client";

//frameworks
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// chakra components
import {
  Box,
  Container,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { FaGithubSquare, FaLongArrowAltRight, FaRocket } from "react-icons/fa";

// custom components
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Socials } from "./components/Socials";
import { Project } from "./components/Project";

// data types / interfaces
import { ProjectObject } from "./content/projects";

// content
import { projects } from "./content/projects";
import { NavButton } from "./components/NavButton";

export default function Home() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const input = useRef(null);

  // key handling
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      onToggle(); // toggle modal on press
    }
  };

  useEffect(() => {
      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      }
  });


  return (
    <Container maxW='container.xl' >
      <Header underlined={true} size="3rem">
        David Gasinski
      </Header>
      <Socials />
      
      <Nav isOpen={isOpen} onClose={onClose} inputRef={input}/>
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

      <NavButton onToggle={onToggle} />

    </Container>
  );
}
