// Spread operator

//  It's the shortest and simplest method to copy
//  the properties of an object onto a newly created object.

let top3 = [
    "Naples",
    "Capri",
    "Procida"
];

function showTop3(place1, place2, place3) {
    console.log("Visit", place1);
    console.log("Then visit", place2);
    console.log("Finish with a visit to", place3);
}

showTop3(top3[0], top3[1], top3[2]);

console.log(); console.log("- - - With spread operator - - -");
// What if I had 10 elements? It would be annoying to list them all in the call! 
// So I use the spread operator ...

// Let's test with top3:
showTop3(...top3);
