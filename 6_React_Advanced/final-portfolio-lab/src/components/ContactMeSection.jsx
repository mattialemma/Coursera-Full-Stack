import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

function ContactMeSection() {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            type: Yup.string(),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),
    });

    useEffect(() => {
        if (!response) return;

        if (response.type === "success") {
            onOpen(
                "success",
                `Thanks ${formik.values.firstName}, your message has been submitted successfully.`
            );
            formik.resetForm();
        }

        if (response.type === "error") {
            onOpen("error", response.message);
        }
    }, [response]);

    return (
        <Box
            id="contactme-section"
            backgroundColor="#512DA8"
            color="white"
            py={16}
            px={8}
            minH="100vh"
        >
            <VStack spacing={8} alignItems="stretch" maxW="600px" mx="auto">
                <Heading as="h2" size="2xl">
                    Contact Me
                </Heading>

                <Box as="form" onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} alignItems="stretch">
                        <FormControl
                            isInvalid={
                                formik.touched.firstName && Boolean(formik.errors.firstName)
                            }
                        >
                            <FormLabel htmlFor="firstName">Name</FormLabel>
                            <Input
                                id="firstName"
                                name="firstName"
                                {...formik.getFieldProps("firstName")}
                            />
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>

                        <FormControl
                            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                        >
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                {...formik.getFieldProps("email")}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                            <Select
                                id="type"
                                name="type"
                                {...formik.getFieldProps("type")}
                                color="black"
                                bg="white"
                            >
                                <option value="hireMe">Freelance project proposal</option>
                                <option value="openSource">Open source consultancy session</option>
                                <option value="other">Other</option>
                            </Select>
                        </FormControl>

                        <FormControl
                            isInvalid={
                                formik.touched.comment && Boolean(formik.errors.comment)
                            }
                        >
                            <FormLabel htmlFor="comment">Your message</FormLabel>
                            <Textarea
                                id="comment"
                                name="comment"
                                rows={6}
                                {...formik.getFieldProps("comment")}
                            />
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>

                        <Button
                            type="submit"
                            colorScheme="teal"
                            isLoading={isLoading}
                            loadingText="Submitting"
                        >
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    );
}

export default ContactMeSection;
