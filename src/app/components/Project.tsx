import { Text, Card, CardHeader, Heading, CardBody, CardFooter, Stack, Button, Grid, GridItem, Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaRocket, FaGithubSquare } from "react-icons/fa";
import { ProjectObject } from "../content/projects";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Project({project} : {project: ProjectObject}) {
    return (
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
      <Card
        mt={5}
        mb={5}
        ml={10}
        mr={10}
        bg="highlight.dracula"
        color="text.dracula"
        maxW='container.xl'
        minH='66vh'
        >
        <CardHeader textAlign="left">
          <Heading size="lg" alignContent="left">
            {" "}
            {project.title}
          </Heading>
        </CardHeader>
        <CardBody>  
            <Box display='flex' flexDir='row'> 
                <Box w='100%' height='100%'>
                        {project.desciption.map((val, index) => (
                            <Box key={index} pb={3}>
                                    {val}
                            </Box>
                        ))}
                </Box>   
                <Box  w='100%' height='100%'>
                    <Image src={project.demoImage} alt='Project Preview' borderRadius={10} />
                </Box> 
            </Box> 
            </CardBody>
        <CardFooter display="flex" justifyContent="center">
          <Stack direction="row" align="center" spacing={4}>
            <Link href={project.demo}>
              <Button rightIcon={<FaRocket />}>Try it </Button>
            </Link>
            <Link href={project.github}>
              <Button rightIcon={<FaGithubSquare />}>View on github</Button>
            </Link>
          </Stack>
        </CardFooter>
      </Card>
      </motion.div>
    );
  }
  