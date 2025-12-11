11/28/2025 - Mattia Lemma

The main topics we covered are:
[ Function return values. Recursion. Variable scope.
Variable immutability. Functional programming (FP) and OOP. var, let, const,
Inheritance. Constructors. super for constructors and methods. Prototype. Destructuring.
Converting objects to arrays. Template literals. Data structures. Arrow functions. 
Spread operator. Rest operator. Modules. DOM manipulation. Event handling. 
JSON and data exchange. ]


I listed some additional explanations:

- Destructuring
Destructuring arrays and objects is a technique in JavaScript that allows you to extract values from an array or object and assign them to variables in a simple and concise way. Imagine having a basket of fruit (the array) and wanting to take only some apples and bananas. Instead of searching through the entire basket, you can simply say: "I want these two specific fruits". (Examples in Javascript-013)


- Inheritance and Prototype
Inheritance in JavaScript is based on the object's prototype.
All Objects constructed from the prototype share the same functionality.
When it's necessary to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and reason-about syntax.



- FP VS OOP
We can say that the functional programming paradigm works by keeping data and functionality separate. Its counterpart, OOP, works by keeping data and functionality grouped in meaningful Objects.



- Variable interpolation
var style = `color: ${color};`
style += `background: ${background};';

The following code creates a style variable and adds the string color: and the color variable and the ;
If the color variable = red I therefore have:
style = 'color: red;'

+ I could also use " " instead of ' ' but it would be less readable:
style += "color: " + color + ";";

+ Possible use:
console.log(message, style);

+ Where:
message = %cHello
style = "color: red; background: blue; font-size: 20px;"

+ That is: 
console.log("%cHello", "color: red; background: blue; font-size: 20px;");



- The four fundamental principles of OOP are:
inheritance, encapsulation, abstraction, and polymorphism.

_______________________________________________________________
I completed guided and autonomous exercises to verify acquired skills.
