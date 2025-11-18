/* 
    Gli array sono un tipo speciale di oggetto in JavaScript
    Utilizziamo il metodo push per inserire elementi alla fine dell'array
    e pop per rimuovere l'ultimo elemento dell'array
*/

var fruits = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
console.log("Fruits after push operations:", fruits);
fruits.pop();
console.log("Fruits after pop operation:", fruits);

console.log("-----");

// Funzione per inserire tre elementi in un array

function insertInArray(element1, element2, element3) {
    var arr = [];
    arr.push(element1);
    arr.push(element2);
    arr.push(element3);
    return arr;
}

var myArray = insertInArray("Dog", "Cat", "Mouse");
console.log("My Array after insertInArray function:", myArray);

console.log("-----");

// Test personale di una funzione che lavora con oggetti e array

function serviceArray(ogb2, arrOfKeys) {
    var arrResult = [];

    if (obg2.age) {
        arrResult.push(obg2.name);
        arrResult.push(obg2.age);
        arrResult.push(obg2.city);

        for (let i = 0; i < arrOfKeys.length; i++) {
            console.log(ogb2[arrOfKeys[i]]);
        }

        console.log("-----");

        for (let j = 0; j < arrResult.length; j++) {
            if (j == 0)
                arrResult[0] = "Aldo";
            console.log(arrResult[j]);
        }
        return arrResult;
    }
}

arrOfKeys = ['name', 'age', 'city'];

var obg2 = {
    name: "Alice",
    age: 30,
    city: "New York",
}

var person = serviceArray(obg2, arrOfKeys);
console.log("-----");
console.log("Person array returned from serviceArray function:", person);