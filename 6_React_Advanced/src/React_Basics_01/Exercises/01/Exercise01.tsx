/**
 * Exercise 01: 
 */

const data = [
    {
        id: 1,
        name: "John",
        age: 30,
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
    },
    {
        id: 3,
        name: "Bob",
        age: 35,
    },
];

export default function App() {

    const list = data.map((item) => {
        const itemText = `${item.name} is ${item.age} years old`;
        return (
            <li>{itemText}</li>
        );
    })

    return (
        <div className="p-5">
            <ul>
                {list}
            </ul>
        </div>
    );
}
