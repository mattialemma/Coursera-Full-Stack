# TypeScript: What It Is and How It Works

## What is TypeScript?

TypeScript is a **superset of JavaScript** developed by Microsoft. This means that **any valid JavaScript code is also valid TypeScript**, but TypeScript adds extra features on top of JavaScript.

The main feature of TypeScript is **static typing**, which helps developers catch errors **before running the code**.

TypeScript is widely used in modern web development, especially in large projects and team environments.

---

## Why TypeScript Exists

JavaScript is a dynamically typed language. This flexibility is powerful, but it can also lead to bugs that are only discovered at runtime.

**Example in JavaScript:**

```js
function add(a, b) {
  return a + b;
}

add(2, "3"); // "23" — probably not what we want!
```

The code runs, but the result is probably not what we want. TypeScript prevents this kind of mistake by enforcing types.

**The Same Example in TypeScript:**

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(2, "3"); // ❌ Type error at compile time
```

TypeScript detects the error at compile time, before the code is executed.

---

## How TypeScript Works

1. You write code in TypeScript (`.ts` or `.tsx` files)
2. TypeScript checks the code for type errors
3. The code is compiled into JavaScript
4. The browser or runtime executes the JavaScript

> ⚠️ **Important:** Browsers do not run TypeScript directly. TypeScript is always converted to JavaScript.

---

## Basic Types

TypeScript provides several basic types:

| Type      | Description                          |
|-----------|--------------------------------------|
| `string`  | Text values                          |
| `number`  | Numeric values (int and float)       |
| `boolean` | `true` or `false`                    |
| `void`    | No return value (for functions)      |
| `any`     | Any type (disables type checking)    |
| `unknown` | Unknown type (safer than `any`)      |

**Example:**

```ts
let username: string = "Bro";
let age: number = 22;
let isOnline: boolean = true;
```

---

## Type Inference

TypeScript can automatically infer types without explicit annotations.

```ts
let count = 10; // inferred as number
count = 20;     // ✅ OK
count = "ten";  // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

## Functions in TypeScript

You can specify types for parameters and return values.

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

If a function does not return a value, its return type is `void`.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

---

## Interfaces

Interfaces are used to define the structure of objects.

```ts
interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

const user: User = {
  id: 1,
  username: "brodev",
  isAdmin: false
};
```

Interfaces improve readability, maintainability, and IDE support.

---

## Union Types

Union types allow a variable to have more than one type.

```ts
let id: number | string;

id = 1;        // ✅ OK
id = "abc123"; // ✅ OK
id = true;     // ❌ Error
```

---

## Classes in TypeScript

TypeScript enhances JavaScript classes with access modifiers.

```ts
class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}
```

| Modifier    | Description                              |
|-------------|------------------------------------------|
| `public`    | Accessible from anywhere (default)       |
| `private`   | Accessible only within the class         |
| `protected` | Accessible within class and subclasses   |

---

## TypeScript vs JavaScript

| Feature                | JavaScript | TypeScript |
|------------------------|------------|------------|
| Static typing          | ❌         | ✅         |
| Compile-time errors    | ❌         | ✅         |
| Better IDE support     | ⚠️ Limited | ✅ Full    |
| Runtime behavior       | Same       | Same       |

> 💡 TypeScript does not change how JavaScript runs at runtime. All types are removed during compilation.

---

## When to Use TypeScript

TypeScript is especially useful for:

- ✅ Medium to large projects
- ✅ Team-based development
- ✅ Long-term maintainability
- ✅ Frameworks like React, Angular, and Node.js