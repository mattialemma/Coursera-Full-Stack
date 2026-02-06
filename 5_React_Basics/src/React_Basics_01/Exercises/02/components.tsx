
export default function Heading(props: { name: string, surname: string }) {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl"> Hello, {props.name} {props.surname}</h1>
        </div>
    )
}

