# Javascript Modules

## What are Javascript Modules?

Javascript Modules are a way to organize and share code between different files.

## Why do we need Javascript Modules?

Javascript Modules are needed to organize and share code between different files.

## How do Javascript Modules work?

Javascript Modules work by exporting code from one file and importing it into another file.

## Example of Javascript Modules

```js
// Exporting code from one file
export const name : string = "John";
export const age : number = 30;

// Importing code from another file
import { name, age } from "./file.js";
```

## Named export
When we want to export more than one thing from a file, we use named export.
The name of the imported variable must match the name of the exported variable.

```js
export function addTwo(a : number, b : number) : void {
    console.log(a + b);
}

export function addThree(a : number, b : number, c : number) : void {
    console.log(a + b + c);
}
```

## Import

```js
import { addTwo } from "./addTwo.ts"; // the name must match the exported name
import { addThree } from "./addThree"; // and we have to use the { }
// the extension is optional (.ts, .tsx, .js, .jsx, etc)

addTwo(1, 2);
addThree(1, 2, 3);
```

# Export default
It is used when we want to export only one thing from a file.
The name of the imported variable can be anything but we have to indicate "from" keyword.

```js
export default function addTwo(a : number, b : number) : void {
    console.log(a + b);
}
```

# Import default

```js
import addTwo from "./addTwo.ts"; // the name can be anything (addTwo, sum, etc)

addTwo(1, 2);
```