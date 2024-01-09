'use client'

// chakra components
import { Box, Button, Container, Icon, Kbd, useDisclosure } from "@chakra-ui/react"

// custom components
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { useEffect, useRef } from "react";
import { NavButton } from "../components/NavButton";

import { Project } from "../components/Project";
import { projects } from "../content/projects";



export default function Projects(){
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

    return(
        <Container maxW='container.xl'>
            <Header underlined={true} size="3rem">
                David Gasinski
            </Header>

            <Header underlined={false} size='2rem'>
                Projects
            </Header>

            <Nav isOpen={isOpen} onClose={onClose} inputRef={input}/>

            {projects.map((project, index) =>(
                <Project project={project} key={index} />
                ))}
        <NavButton onToggle={onToggle} />
        </Container>
    )
}