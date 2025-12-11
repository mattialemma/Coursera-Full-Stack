// Polymorphism

/*
    Different behaviors of the same function on different objects.
*/

function engineOn(car) {
    console.log(car.start());
}

const ferrari = {
    start: function () {
        return "Bruuuuuuum Bruuuuuuum!";
    }
}

const panda = {
    start: function () {
        return "brhm...";
    }
}

engineOn(panda);
engineOn(ferrari);

// Another example

/*
    If I use the concat() method on two strings,
    the behavior is exactly the same as if I used the + operator.
*/

"abc".concat("def"); // Output: 'abcdef'


// I can also use the concat() method on two arrays:
["abc"].concat(["def"]); // Output: ['abc', 'def']


// Instead "+" forces arrays to become strings
["abc"] + ["def"]; // Output: "abc,def"


/*
    This means that the concat() method shows polymorphic behavior,
    since it behaves differently based on the context, in this case based
    on the data types I provide it. However, note that using
    the + operator with arrays does not perform true concatenation.
    Instead, it forces the arrays into strings before joining them and the elements are separated by commas.
    This behavior is different from the concat() method, which preserves the array structure.
*/


//______________________________________________________________
// Example of polymorphism using classes in JavaScript:

class Bird {
    useWings() {
        console.log("Flying!");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings(); // The super keyword calls methods from the parent class.
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//______________________________________________________________
console.log("--------"); console.log();
// Personal test exercise:

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    greet(name) {
        console.log("Hello", name, "from", this.name, this.surname + "!")
    }
}

class Student extends Person {
    constructor(name, surname, studentId) {
        super(name, surname) // Mandatory
        this.studentId = studentId;
    }

    greet(name) {
        super.greet(name);
        console.log("I am a humble student.");
    }
}

class Professor extends Person {
    constructor(name, surname, money) {
        super(name, surname);
        this.money = money;
    }

    greet(name, student) {
        super.greet(name);
        console.log("I have money:", this.money, "Euro, while", student.name, "doesn't");
    }
}

var studentMattia = new Student("Mattia", "Lemma", "N86005170");
var profMario = new Professor("Mario", "Rossi", 1500);
studentMattia.greet("Mario");
profMario.greet("Mattia", studentMattia);
