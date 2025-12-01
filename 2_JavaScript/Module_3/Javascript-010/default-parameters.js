// Parametri predefiniti

// Dichiarazione di funzione senza parametri predefiniti:
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

// Se chiamo la funzione senza inserire parametri
noDefaultParams(); // Output: NaN (perché il numero è indefinito per impostazione predefinita)


// Utilizziamo ora i parametri predefiniti:
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

withDefaultParams(); // Output: 100
withDefaultParams(2); // Output: 4

/*
    I parametri predefiniti mi permettono di costruire una funzione
    che verrà eseguita con i valori degli argomenti predefiniti
    anche se non le passo alcun argomento, pur essendo abbastanza flessibile
    da permettermi di passare valori di argomenti personalizzati e di gestirli di conseguenza.
*/

// Esempio con classe senza parametri predefiniti:

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false); // false è assegnato a string1, quindi bool1 risulta undefined (ovvero false)
fail.calculate(); // Output: 'The value of bool1 is incorrect' 


// Con parametri predefiniti

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

let better = new WithDefaultParams();
better.calculate(); // Output: 6
better.num1 = 1;    better.num2 = 1.1;  better.num3 = 0.4;
better.calculate(); // Output: 2.5
better.bool1 = false;
console.log(better.calculate()); // Output: The value of bool1 is incorrect
