/* 
    Arrays are a special type of object in JavaScript
    We use the push method to insert elements at the end of the array
    and pop to remove the last element of the array
*/

var fruits = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
console.log("Fruits after push operations:", fruits);
fruits.pop();
console.log("Fruits after pop operation:", fruits);

console.log("-----");

// Function to insert three elements into an array

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

// Personal test of a function that works with objects and arrays

function serviceArray(obj2, arrOfKeys) {
    var arrResult = [];

    if (obj2.age) {
        arrResult.push(obj2.name);
        arrResult.push(obj2.age);
        arrResult.push(obj2.city);

        for (let i = 0; i < arrOfKeys.length; i++) {
            console.log(obj2[arrOfKeys[i]]);
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

var obj2 = {
    name: "Alice",
    age: 30,
    city: "New York",
}

var person = serviceArray(obj2, arrOfKeys);
console.log("-----");
console.log("Person array returned from serviceArray function:", person);