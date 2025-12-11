# 2️⃣ Programming with JavaScript

**Completion Date**: 11/30/2025  
**Status**: ✅ Completed

---

## 📖 Module Description

This module covers the fundamentals of programming with JavaScript, from basic syntax to advanced concepts of functional programming, OOP, DOM manipulation, and testing.

### Topics Covered:
- Basic syntax and conditional logic
- Functions, arrays, and objects
- Functional Programming (FP) vs OOP
- Inheritance and prototypes
- Destructuring and template literals
- DOM manipulation
- Node.js, npm, and testing with Jest
- TDD (Test-Driven Development)

---

## 📁 Module Content

### Module_1 - Introduction to JavaScript
**Date**: 11/17/2025

JavaScript fundamentals with tests on Visual Studio Code and Chrome DevTools.

**Topics**:
- `console.log` and DevTools
- Conditional logic (if/else)
- Switch structures
- Variables
- Loops
- Fundamental syntax rules

**Exercises**: 6 folders (Javascript-001 → Javascript-005, Console-Test)

---

### Module_2 - Functions, Arrays, and Objects
**Date**: 11/19/2025

Fundamental concepts on functions, arrays, objects, and error handling.

**Topics**:
- Functions (reusable code blocks)
- Arrays (objects with specific methods)
- Objects in JavaScript
- Strings (immutability and differences with arrays)
- Math object (rounding, random numbers)
- Exception and error handling
- `let`, `var`, `const`
- `NaN` (Not a Number)
- Defensive programming

**Exercises**: 13 folders (Javascript-000 → Javascript-012)

---

### Module_3 - Advanced Programming
**Date**: 11/28/2025

Advanced concepts of functional programming, OOP, and DOM manipulation.

**Topics**:
- Function return values
- Recursion
- Variable scope
- Immutability
- **Functional Programming (FP) vs OOP**
  - FP: data and functionality separated
  - OOP: data and functionality grouped in objects
- **Inheritance and Prototype**
  - All objects share the prototype
  - `class` keyword for complex OOP
  - The 4 OOP principles: inheritance, encapsulation, abstraction, polymorphism
- Constructors and `super`
- **Destructuring** (arrays and objects)
- Converting objects to arrays
- **Template literals** (variable interpolation)
- Arrow functions
- Spread operator (`...`)
- Rest operator
- ES6 modules
- **DOM Manipulation**
- Event handling (event handlers)
- **JSON** and data exchange

**Exercises**: 27 folders (Javascript-001 → Javascript-028)

**Additional notes**:
- Variable interpolation: `` `color: ${color};` ``
- Console styling: `console.log("%cHello", "color: red; background: blue;")`

---

### Module_4 - Testing and Node.js
**Date**: 11/30/2025

Testing, Node.js, npm, and best practices.

**Topics**:
- **Node.js**: JavaScript runtime environment (V8 engine)
- **npm** (Node Package Manager): package management
- npm modules (React, Webpack, Bootstrap, Angular)
- `package.json`: project information and dependencies
- **Jest**: testing framework
- **TDD** (Test-Driven Development)
- Refactoring
- **Types of testing**:
  - Unit testing
  - Integration testing
  - E2E testing (end-to-end)
- Integrated practical exercises

**Exercises**: 6 folders (Javascript-001 → Javascript-006)

---

## 🛠️ Key Concepts Learned

### Variables
```javascript
let variable = "reassignable";    // Preferable
const constant = "immutable";      // Use when possible
var oldStyle = "avoid";            // Don't use
```

### Functions
```javascript
// Classic function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greet = (name) => `Hello, ${name}!`;
```

### Destructuring
```javascript
// Array
const [first, second] = [1, 2, 3];

// Objects
const { name, age } = { name: "Mattia", age: 25 };
```

### Template Literals
```javascript
const color = "red";
const style = `color: ${color}; background: blue;`;
// Result: "color: red; background: blue;"
```

### Spread Operator
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
```

### DOM Manipulation
```javascript
const element = document.getElementById("myId");
element.textContent = "New text";
element.addEventListener("click", (e) => {
  console.log("Clicked!");
});
```

---

## 🎯 FP vs OOP

### Functional Programming (FP)
- **Data and functionality separated**
- Pure functions without side effects
- Data immutability

### Object-Oriented Programming (OOP)
- **Data and functionality grouped** in objects
- 4 fundamental principles:
  1. **Inheritance** - Code reuse
  2. **Encapsulation** - Hide internal details
  3. **Abstraction** - Simplify complexity
  4. **Polymorphism** - Different behaviors with same interface

---

## 🧪 Testing with Jest

### Types of Testing
1. **Unit Testing**: Tests individual functions/components
2. **Integration Testing**: Tests interaction between modules
3. **E2E Testing**: Tests the entire application from start to finish

### TDD (Test-Driven Development)
1. Write the test (it fails)
2. Write minimal code to pass the test
3. Refactor the code

---

## 🔧 Node.js and npm

### Node.js
JavaScript runtime environment based on Chrome's V8 engine. Allows running JavaScript outside the browser.

### npm (Node Package Manager)
Package manager for installing libraries and frameworks.

```bash
npm install <package>    # Install package
npm init                 # Create package.json
```

### package.json
Contains:
- Project information
- Dependencies list
- Automation scripts

**Examples of npm libraries**: React, Webpack, Bootstrap, Angular Core

---

## 📚 Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Jest Documentation](https://jestjs.io/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

## ✅ Skills Acquired

### Module 1
- ✅ Basic JavaScript syntax
- ✅ Console and DevTools
- ✅ Conditional logic and switch
- ✅ Variables and loops

### Module 2
- ✅ Reusable functions
- ✅ Arrays and methods
- ✅ Objects in JavaScript
- ✅ Error and exception handling
- ✅ Math object
- ✅ `let`, `var`, `const`

### Module 3
- ✅ Recursion and scope
- ✅ FP vs OOP
- ✅ Inheritance and prototypes
- ✅ Destructuring
- ✅ Template literals
- ✅ Arrow functions
- ✅ Spread and rest operators
- ✅ DOM manipulation
- ✅ JSON

### Module 4
- ✅ Node.js and npm
- ✅ Testing with Jest
- ✅ TDD
- ✅ Unit, integration, E2E testing
- ✅ Refactoring

---

## 📝 Personal Notes

I completed **guided and autonomous exercises** to verify acquired skills, integrating some content with **external resources** to deepen aspects not covered in the course.

Total exercises completed: **52 folders** of practical exercises.
