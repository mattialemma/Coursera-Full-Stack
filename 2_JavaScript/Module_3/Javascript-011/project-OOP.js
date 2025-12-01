// Progettazione di un programma OOP

class Animal { // Prototipo
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }

    // Metodi
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
    // Metodi
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
    // Metodi
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    // Metodi
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
    // Metodi
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
    // Metodi
    makeSound(option) {
        if (option)
            super.makeSound();
        if (this.canTalk) // Se canTalk è true
            console.log("I'm a talking parrot!");
    }

    // Metodo che chiama un metodo della classe Tiger che Bird non estende
    callTiger(parrotOption, tigerOption) {
        const tiger = new Tiger(); // Crazione oggetto Tiger
        this.makeSound(parrotOption); // Chiamata al metodo di Parrot
        console.log("I am a tiger-parrot:");
        tiger.makeSound(tigerOption) // Chiamata al metodo di Tiger 
    }
}


var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
console.log(polly);
polly.callTiger(true, true); // Test con chiamate ad altre classi che non ereditano
// Ho provato a chiamare la classe Tiger a partire dalla classe Parrot instanziando un oggetto tiger nella funzione callTiger ed effettuando la chiamata al metodo di Tiger sull'oggetto
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

