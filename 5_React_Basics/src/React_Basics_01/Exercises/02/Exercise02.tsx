import Heading from "./components";

export default function Component1() {
    return (
        <div className="flex flex-col justify-center mt-10 p-10 border-3 bg-red-500">
            <Heading name="Mattia" surname="Lemma" />
            <Heading name="Pippo" surname="Lemma" />
            <Logo src=".\src\React_Basics_01\Exercises\02\logo-ph.webp" alt="Mattia Lemma Profile" />
        </div>
    )
}

function Logo(props: { src: string, alt: string }) {
    const userPic = <img className="w-15 h-15" src={props.src} alt={props.alt} />
    return userPic;
}