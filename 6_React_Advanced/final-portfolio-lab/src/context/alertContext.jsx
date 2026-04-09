import { createContext, useContext, useState } from "react";
import { Box } from "@chakra-ui/react";

const AlertContext = createContext();

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({
        isOpen: false,
        type: "success",
        message: "",
    });

    const onOpen = (type, message) => {
        setAlert({
            isOpen: true,
            type,
            message,
        });
    };

    const onClose = () => {
        setAlert((prev) => ({
            ...prev,
            isOpen: false,
        }));
    };

    return (
        <AlertContext.Provider value={{ onOpen, onClose }}>
            {children}

            {alert.isOpen && (
                <Box
                    position="fixed"
                    top="20px"
                    right="20px"
                    zIndex="9999"
                    bg={alert.type === "success" ? "green.500" : "red.500"}
                    color="white"
                    px={4}
                    py={3}
                    borderRadius="md"
                    boxShadow="lg"
                    maxW="360px"
                >
                    {alert.message}
                </Box>
            )}
        </AlertContext.Provider>
    );
}

export function useAlertContext() {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlertContext must be used within an AlertProvider");
    }
    return context;
}
