import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";

const greeting = "Hello, I am Mattia!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

function LandingSection() {
    return (
        <VStack
            minH="100vh"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#2A4365"
            color="white"
            spacing={6}
            pt={16}
            pb={16}
        >
            <Avatar
                size="2xl"
                name="Mattia"
                src="https://i.pravatar.cc/150?img=7"
            />

            <VStack spacing={2}>
                <Heading as="h1" size="2xl">
                    {greeting}
                </Heading>
                <Text fontSize="xl">{bio1}</Text>
                <Text fontSize="xl">{bio2}</Text>
            </VStack>
        </VStack>
    );
}

export default LandingSection;
