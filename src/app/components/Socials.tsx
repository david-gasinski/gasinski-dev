'use client'

import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import { IconContext } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socials } from "../content/links";

export function Socials() {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Container
        display={"flex"}
        flexDir={"row"}
        justifyContent={"center"}
        maxW={"container.md"}
        color="text.dracula"
        pt={5}
      >
        <IconContext.Provider value={{ size: "2.5em" }}>
          <Link pr={5} pl={5} href={socials.github}>
            <FaGithubSquare />
          </Link>
          <Link pr={5} pl={5} href={socials.linkedin}>
            <FaLinkedin  />
          </Link>
          <Link pr={5} pl={5} href={socials.leetcode}>
            <SiLeetcode />
          </Link>
        </IconContext.Provider>
      </Container>
    </motion.div>
  );
}
