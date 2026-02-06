/**
 * Exercise 01: 
 */

import ButtonTest from "./components";

// 1. the form of the object
interface Fruit {
    name: string;
    color: string;
    fontSize: number;
}

// 2. Object using the interface
const fruit: Fruit = {
    name: "Apple",
    color: "red",
    fontSize: 40
};

export default function Component1() {
    return (
        <div>
            <ButtonTest name={fruit.name} color={fruit.color} fontSize={fruit.fontSize} />
        </div>
    );
}
