import Card from "./component"

function App() {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Task: Add three Card elements</h1>
            <div className="flex gap-4">
                <Card title="Card 1" description="Description 1" />
                <Card title="Card 2" description="Description 2" />
                <Card title="Card 3" description="Description 3" />
            </div>
        </div>
    );
}

export default App;

