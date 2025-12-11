// Example of creating and using a class with inheritance

class Train {
    constructor(color, lightsOn) { // Used to build the properties of the future instance of the Train class object
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() { // The result of the call is logging to console all properties of the class prototype. 
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let train1 = new Train("red", false);
console.log(train1); // Output: Train {color: 'red', lightsOn: false}

let train2 = new Train("orange", true); // Creates an instance of the Train class with Train.prototype as prototype - That is: (Creates a new object that inherits from Train.prototype)
train2.lightsStatus(); // Output: Train { color: 'red', lightsOn: false }
train2.toggleLights(); // Output: Lights on? true
train2.lightsStatus(); // Output: Lights on? false
train2.getSelf(); // Output: Train { color: 'orange', lightsOn: false }
train2.getPrototype(); // Output: {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}


/*
    It is possible to implement polymorphism using classes in JavaScript,
    inheriting from the base class and overriding the inherited behavior.
                                (Overriding)                                        
*/


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    // Overriding
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let speedTrain = new HighSpeedTrain(200, false, "green", false);
speedTrain.lightsStatus(); // Output: Lights on? true
speedTrain.toggleLights(); // Output: Lights on? true, Lights are 100% operational.
speedTrain.getPrototype(); // Output: Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}



// -_-_-_-_-_-_-_-_-_-_-_-_-_-| Another example |-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
console.log(); console.log("-_-_-_-_-_-"); console.log();


class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

/*
 Output:
    7-22
    StationaryBike { position: 'right corner', gears: 8 }
    Treadmill { position: 'left corner', modes: 5 }
*/

/*
    This last code allows me to instantiate a new object instance of the Gym class and,
    when I inspect it, I get the following information:

    - the openHrs property is equal to "7-22" (i.e. from 7 in the morning to 10 in the evening).

    - the stationaryBike property is an Object of type StationaryBike,
      containing two properties: position and gears.

    - the treadmill property is an object of type Treadmill,
      containing two properties: position and modes.
*/
