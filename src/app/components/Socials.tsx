import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import { IconContext } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from 'react-icons/si'
import { socials } from "../content/links";


export function Socials(){
    <motion.div
    initial={{ x: 500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 100 }}
>
    <Container
        display={'flex'}
        flexDir={'row'}
        justifyContent={'center'}
        maxW={'container.md'}
    >
        <IconContext.Provider value={{ size: '2.5em' }}>
            <Link pr={10} pl={10} href={socials.github}>
                <FaGithubSquare color='#F8F8F2'/>{' '}
            </Link>
            <Link pr={10} pl={10} href={socials.linkedin}>
                <FaLinkedin color='#F8F8F2'/>{' '}
            </Link>
            <Link pr={10} pl={10} href={socials.youtube}>
                <SiLeetcode color='#F8F8F2'/>{' '}
            </Link>
        </IconContext.Provider>
    </Container>
</motion.div>
}