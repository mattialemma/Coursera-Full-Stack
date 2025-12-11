// OOP

/*
    With functional programming we clearly separate data from the functions that process it.
    With the OOP approach we create an object and store all data related to that object,
    including variables, functions and output statements. OOP programming therefore includes FP.
*/

var rectangle = {
    base: 10,
    height: 25,
    area: function () {
        let result = this.base * this.height;
        console.log("Area 1: ", result + "cm²");
    }
}

var rectangle2 = {
    base: 5,
    height: 2,
    area: function () {
        let result = this.base * this.height;
        console.log("Area 2: ", result + "cm²");
    }
}

rectangle.area(); // Output: Area: 250cm²
rectangle2.area(); // Output: Area: 10cm²

