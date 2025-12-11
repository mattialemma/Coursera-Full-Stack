// Template literals
// Template literals are an alternative way of working with strings


// Before JavaScript ES6 the only way to build strings was to delimit them with quotes '' or ""
'Hello, World!';
"Hello, World!";

// ES6 introduced the use of backtick characters as delimiters:  
`Hello, World!`

// With template literals, an expression can be embedded in a placeholder designated by ${ }
let greet = "Hello";
let place = "World";
console.log(`Heyy ${greet} ${place}!`);

// Instead of writing:
let greet2 = "Hello";
let place2 = "World";
console.log("Heyy", greet2, place + "!");

/*
    The use of template literals allows programmers to embed variables between backticks
    without the need to use the + operator and quotes "" or '' to delimit string literals
    from variables. 
*/

// With template literals I can go to a new line:
let variable =
    `Hello
dear
JeJeJe!`;

console.log(variable);

// Which I cannot do with "" and ''

// The backtick syntax allows evaluating expressions:
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); // Output: 5 stars!

