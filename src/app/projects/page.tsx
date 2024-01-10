"use client";

// chakra components
import {
  Text,
  Button,
  Container,
  Box,
  useDisclosure,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

// custom components
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { EventHandler, useEffect, useRef, useState } from "react";
import { NavButton } from "../components/NavButton";

import { Project } from "../components/Project";
import { projects } from "../content/projects";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Projects() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
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
    };
  });

  const updateIndex = (right: boolean) => {
    if (right) {
      if (tabIndex > (projects.length - 2)) {
        setTabIndex(0)
      } else {
        setTabIndex(tabIndex + 1)
      }
    } else {
      if (tabIndex < 1) {
        setTabIndex(projects.length - 1);
      } else {
        setTabIndex(tabIndex - 1)
      }
    }
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Container maxW="container.xl">
      <Header underlined={true} size="3rem">
        David Gasinski
      </Header>
      <Header underlined={false} size="2rem">
        Projects
      </Header>
      <Nav isOpen={isOpen} onClose={onClose} inputRef={input} />
      <Container
        display={"flex"}
        flexDir={"row"}
        justifyContent={"center"}
        maxW="container.xl"
      >
        <Box display='flex' justifyContent='center' flexDir='column'>
            <Button onClick={() => updateIndex(false)} > <FaChevronLeft />  </Button>
        </Box>
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabPanels>
            {projects.map((project, index) => (
              <TabPanel key={index}>
                <Project project={project} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Box display='flex' justifyContent='center' flexDir='column'>
            <Button onClick={() => updateIndex(true)} > <FaChevronRight />    </Button>
        </Box>
      </Container>
      = <NavButton onToggle={onToggle} />
    </Container>
  );
}
