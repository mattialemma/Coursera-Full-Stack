import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "Calculator",
        description: "A simple calculator built with React.",
        imageSrc: "https://picsum.photos/400/300?random=1",
    },
    {
        title: "Todo App",
        description: "A task manager app to organise daily activities.",
        imageSrc: "https://picsum.photos/400/300?random=2",
    },
    {
        title: "Weather App",
        description: "An app that displays the current weather of any city.",
        imageSrc: "https://picsum.photos/400/300?random=3",
    },
    {
        title: "Portfolio Website",
        description: "A personal website to showcase my projects and skills.",
        imageSrc: "https://picsum.photos/400/300?random=4",
    },
];

function ProjectsSection() {
    return (
        <VStack
            id="projects-section"
            backgroundColor="#14532D"
            color="white"
            alignItems="stretch"
            spacing={8}
            px={8}
            py={16}
            minH="100vh"
        >
            <Heading as="h2" size="2xl">
                Featured Projects
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </SimpleGrid>
        </VStack>
    );
}

export default ProjectsSection;
