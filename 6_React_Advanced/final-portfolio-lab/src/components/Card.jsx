import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({ title, description, imageSrc }) {
    return (
        <VStack
            backgroundColor="white"
            color="black"
            borderRadius="xl"
            overflow="hidden"
            alignItems="stretch"
            spacing={0}
            boxShadow="lg"
        >
            <Image src={imageSrc} alt={title} objectFit="cover" h="220px" w="100%" />

            <VStack alignItems="flex-start" spacing={4} p={6}>
                <Heading as="h3" size="md">
                    {title}
                </Heading>

                <Text color="gray.600">{description}</Text>

                <HStack spacing={2}>
                    <Text fontWeight="bold">See more</Text>
                    <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </VStack>
        </VStack>
    );
}

export default Card;
