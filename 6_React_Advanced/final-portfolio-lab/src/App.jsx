import { Box, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";

function App() {
  return (
    <Box bg="#121212" color="white" minH="100vh">
      <Header />
      <VStack spacing={0} align="stretch">
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </VStack>
    </Box>
  );
}

export default App;
