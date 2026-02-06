import Heading from "./components";

export default function Component1() {
    return (
        <div className="flex flex-col justify-center mt-10 p-10 border-3 bg-red-500">
            <Heading name="Mattia" surname="Lemma" />
            <Heading name="Pippo" surname="Pluto" />
        </div>
    )
}