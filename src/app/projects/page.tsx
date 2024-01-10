'use client'

// chakra components
import { Text, Button, Container, Icon, Kbd, useDisclosure, Tabs, TabPanels, TabPanel } from "@chakra-ui/react"

// custom components
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { EventHandler, useEffect, useRef, useState } from "react";
import { NavButton } from "../components/NavButton";

import { Project } from "../components/Project";
import { projects } from "../content/projects";



export default function Projects(){
    const { isOpen, onToggle, onClose } = useDisclosure();
    const [ tabIndex, setTabIndex] = useState(0);
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

    const updateIndex = (right: boolean) => {
        console.log("fired")
       if (right) {
        if (tabIndex != projects.length - 1){
            console.log("fired twice")
            setTabIndex(tabIndex + 1)
        }
       } else {
        if (tabIndex != 0 ) {
            setTabIndex(tabIndex - 1)
        }
       }
    }

    const handleTabsChange = (index: number) => {
        setTabIndex(index)
    }
      

    return(
        <Container maxW='container.xl'>
            <Header underlined={true} size="3rem">
                David Gasinski
            </Header>

            <Header underlined={false} size='2rem'>
                Projects
            </Header>

            <Nav isOpen={isOpen} onClose={onClose} inputRef={input}/>


            <Text> {tabIndex} </Text>
            <Button onClick={() => updateIndex(false)}>  
                Left
            </Button>
            <Button onClick={() => updateIndex(true)}>
                Right
            </Button>

            

            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabPanels>
                {projects.map((project, index) =>(
                    <TabPanel>
                        <Project project={project} />
                    </TabPanel>
                ))}                    
               </TabPanels>
            </Tabs>
=            <NavButton onToggle={onToggle} />
        </Container>
    )
}