interface ButtonTestProps {
    color: string;
    fontSize: string | number;
    name: string;
}


export default function ButtonTest(props: ButtonTestProps) {
    return (
        <div>
            <h1 className="text-center" style={{ color: props.color, fontSize: props.fontSize }}>
                {props.name}</h1>
        </div>
    );
}
