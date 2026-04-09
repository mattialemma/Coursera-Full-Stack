import { useState } from "react";

const useSubmit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = (data) => {
        setIsLoading(true);
        setResponse(null);

        setTimeout(() => {
            const isSuccess = Math.random() < 0.5;

            if (isSuccess) {
                setResponse({
                    type: "success",
                    message: `Thanks ${data.firstName}, your message has been submitted successfully.`,
                });
            } else {
                setResponse({
                    type: "error",
                    message: "Something went wrong, please try again later.",
                });
            }

            setIsLoading(false);
        }, 1500);
    };

    return { isLoading, response, submit };
};

export default useSubmit;
