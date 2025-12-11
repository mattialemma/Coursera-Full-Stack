
// Example with if else
var result = 35;

if (result >= 50) {
    console.log("You passed the exam Bro!");
}
else if (result >= 30 && result <= 40) {
    console.log("You have a second chance to pass the exam.");
}
else {
    console.log("You did not pass the exam... Bro");
}

// Example with else if
var place = "city";

switch (place) { // switch checks value and type of 'place' (strict comparison with ===)
    case "city":
        console.log("You live in a city.");
        break; // If you don't use break, the code continues to execute the following cases (fall through)
    case "suburb":
        console.log("You live in the suburbs.");
        break;
    case "village":
        console.log("You live in a village.");
        break;
    default:
        console.log("You live in a place far away from civilization.");
}

// Example with break in a loop
for (let i = 1; i <= 5; i++) { // We use let because i is a block variable and therefore doesn't exist outside the loop (loop scope)
    if (i === 3) {
        break; // Stop the loop when i equals 3
    }
    console.log(i); // Prints numbers from 1 to 2
}

