import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
    return (
        <p className="text-red-500 text-xs italic mt-1">Password should have at least 8 characters</p>
    );
};

function App() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<{ value: string; isTouched: boolean }>({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState<string>("role");

    const getIsFormValid = (): boolean => {
        return (
            firstName !== "" &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission - no refresh the page
        alert("Account created!");
        clearForm();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <fieldset className="border-0 p-0 m-0 w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            First name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            value={firstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFirstName(e.target.value);
                            }}
                            placeholder="First name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                        <input
                            value={lastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setLastName(e.target.value);
                            }}
                            placeholder="Last name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email address <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password <sup className="text-red-500">*</sup>
                        </label>
                        <input
                            value={password.value}
                            type="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            onBlur={() => {
                                setPassword({ ...password, isTouched: true });
                            }}
                            placeholder="Password"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${password.isTouched && password.value.length < 8 ? 'border-red-500' : ''}`}
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Role <sup className="text-red-500">*</sup>
                        </label>
                        <select
                            value={role}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        >
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled={!getIsFormValid()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                    >
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;