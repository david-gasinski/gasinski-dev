import { Card, CardHeader, Heading, CardBody, CardFooter, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaRocket, FaGithubSquare } from "react-icons/fa";
import { ProjectObject } from "../content/projects";

export function Project({project} : {project: ProjectObject}) {
    return (
      <Card
        mt={5}
        mb={5}
        ml={10}
        mr={10}
        bg="highlight.dracula"
        color="text.dracula"
      >
        <CardHeader textAlign="left">
          <Heading size="lg" alignContent="left">
            {" "}
            {project.title}
          </Heading>
        </CardHeader>
        <CardBody>{project.desciption}</CardBody>
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
    );
  }
  