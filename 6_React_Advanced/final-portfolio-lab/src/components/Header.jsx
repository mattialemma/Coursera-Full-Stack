import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto:yourname@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/yourusername",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/yourusername",
    },
    {
        icon: faMedium,
        url: "https://medium.com/@yourusername",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/yourid/yourname",
    },
];

function Header() {
    const handleClick = (e, anchor) => {
        e.preventDefault();

        const id = anchor === "projects" ? "projects-section" : "contactme-section";
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.location.hash = anchor;
        }
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            backgroundColor="#18181b"
            zIndex={10}
            transform="translateY(0)"
            transition="transform 0.3s ease-in-out"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={4}>
                            {socials.map((social) => (
                                <a
                                    key={social.url}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </a>
                            ))}
                        </HStack>
                    </nav>

                    <nav>
                        <HStack spacing={8}>
                            <a href="/#projects" onClick={(e) => handleClick(e, "projects")}>
                                Projects
                            </a>
                            <a href="/#contact-me" onClick={(e) => handleClick(e, "contact")}>
                                Contact Me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;
