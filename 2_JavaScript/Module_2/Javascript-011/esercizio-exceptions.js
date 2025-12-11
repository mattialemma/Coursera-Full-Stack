// Exercise on exceptions
console.log();

function addTwoNums(numA, numB) {
    try {
        if (typeof (numA) != "number") {
            throw new ReferenceError("The first argument is not a number! ");
        }
        else if (typeof (numB) != "number") {
            throw new ReferenceError("The second argument is not a number! ");
        }
        else {
            console.log(numA + numB);
        }
    } catch (error) {
        console.error("Error name:", error.name, "Error message:", error.message);
        // console.log("Error:", error); Also works in this simple way
        console.log("___________");
    }
}

addTwoNums(5, "5");
console.log("This command is always executed! ");
