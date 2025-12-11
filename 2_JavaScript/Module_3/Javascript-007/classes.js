// Classes

class Car {
    constructor(color, speed, km) {
        this.color = color;
        this.speed = speed;
        this.km = km;
    }

    printKm() {
        console.log(this.km + "km");
    }
    printSpeed() {
        console.log(this.km + "km/h");
    }

    addNkm(n) {
        this.km = this.km + n;
    }
}

console.log("- - - car1 - - -");

const car1 = new Car("red", 120, 1500);
car1.printKm();
car1.printSpeed();
console.log(car1);

console.log("- - - car2 - - -");

let nKm = 55;
const car2 = new Car("black", 90, 100);
car2.printKm();
car2.addNkm(nKm);
car2.printKm();


//-_-_-_-_- _-_-_-_-_- _-_-_-_-_- _-_-_-_-_-

class Animal { /* ...class code here... */ }
var myDog = Object.create(Animal) // Using the Object.create method to instantiate class objects
console.log(Animal) // Output: [class Animal]


// A more common way is using the new keyword

class Animal { /* ...class code here... */ }
var myDog = new Animal()
console.log(Animal) // Output: [class Animal]


//______________________________________________________________
// The four fundamental principles of OOP are:
//  inheritance, encapsulation, abstraction and polymorphism.
