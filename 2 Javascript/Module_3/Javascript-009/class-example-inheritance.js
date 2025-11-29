// Esempio creazione e utilizzo di una classe con ereditarietà

class Train {
    constructor(color, lightsOn) { // Utilizzato per costruire le proprietà della futura istanza dell'oggetto della classe Train
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
    getPrototype() { // Il risultato della chiamata è la registrazione in console di tutte le proprietà della classeprototype. 
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let train1 = new Train("red", false);
console.log(train1); // Output: Train {color: 'red', lightsOn: false}

let train2 = new Train("orange", true); // Crea un'istanza della classe Train con Train.prototype come prototipo - Ovvero: (Crea un nuovo oggetto che eredita da Train.prototype)
train2.lightsStatus(); // Output: Train { color: 'red', lightsOn: false }
train2.toggleLights(); // Output: Lights on? true
train2.lightsStatus(); // Output: Lights on? false
train2.getSelf(); // Output: Train { color: 'orange', lightsOn: false }
train2.getPrototype(); // Output: {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}


/*
    È possibile implementare il polimorfismo utilizzando le classi in JavaScript,
    ereditando dalla classe base e sovrascrivendo il comportamento ereditato.
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



// -_-_-_-_-_-_-_-_-_-_-_-_-_-| Altro esempio |-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
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
    Quest'uiltimo codice mi consente di istanziare un nuovo oggetto istanza della classe Gym e,
    quando lo ispeziono, ottengo le seguenti informazioni:

    - la proprietà openHrs è uguale a "7-22" (cioè dalle 7 del mattino alle 10 di sera).

    - la proprietà stationaryBike è un Object di tipo StationaryBike,
      contenente due proprietà: position e gears.

    - la proprietà treadmill è un oggetto del tipo Treadmill,
      contenente due proprietà: position e modes.
*/
