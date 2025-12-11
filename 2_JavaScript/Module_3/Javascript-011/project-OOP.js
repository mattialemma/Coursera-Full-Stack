// Designing an OOP program

class Animal { // Prototype
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }

    // Methods
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        }
        else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.energy = energy;
    }
    // Methods
    makeSound() {
        console.log(this.sound);
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    // Methods
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    // Methods
    makeSound(option) {
        if (option)
            super.makeSound();
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    // Methods
    makeSound(option) {
        if (option)
            super.makeSound();
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    // Methods
    makeSound(option) {
        if (option)
            super.makeSound();
        if (this.canTalk) // If canTalk is true
            console.log("I'm a talking parrot!");
    }

    // Method that calls a method from the Tiger class that Bird doesn't extend
    callTiger(parrotOption, tigerOption) {
        const tiger = new Tiger(); // Creating Tiger object
        this.makeSound(parrotOption); // Call to Parrot's method
        console.log("I am a tiger-parrot:");
        tiger.makeSound(tigerOption) // Call to Tiger's method 
    }
}


var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
console.log(polly);
polly.callTiger(true, true); // Test with calls to other classes that don't inherit
// I tried calling the Tiger class from the Parrot class by instantiating a tiger object in the callTiger function and making the call to Tiger's method on the object
console.log("- - - ");

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Output: Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Output: Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // Output: meow
// leo, both purr and meow now:
leo.makeSound(true); // Output: purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Output: Roar!
cuddles.makeSound(true); // Output: purr, Roar!

