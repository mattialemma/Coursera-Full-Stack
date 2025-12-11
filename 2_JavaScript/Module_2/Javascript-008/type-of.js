// Type of operator

/*
System created to speed up type verification and apply switch-case

1) var test = typeof ('Dear I am Mattia'); 
2) var test = typeof (10); 
3) var test = typeof (3.14); 
4) var test = typeof (true); 
5) var test = typeof (1 < 2); 
6) var test = typeof ([1, 2, 3]); 
7) var test = typeof ([1, "hey", 2, ""]); 
8) var test = typeof ({ Property: 1 }); 
9) var test = typeof (function abc() { console.log("Mattia Lemma") }) 
*/
var flag = true;
var test = 1; // Set the test number you want to try

switch (test) {
    case 0:
        var test = typeof ('Dear I am Mattia');
        break;
    case 1:
        var test = typeof (10);
        break;
    case 2:
        var test = typeof (3.14);
        break;
    case 3:
        var test = typeof (true);
        break;
    case 4:
        var test = typeof (1 < 2);
        break;
    case 5:
        var test = typeof ([1, 2, 3]);
        break;
    case 6:
        var test = typeof ([1, "hey", 2, ""]);
        break;
    case 7:
        var test = typeof ({ Property: 1 });
        break;
    case 8:
        var test = typeof (function abc() { console.log("Mattia Lemma") })
        break;
    default:
        console.log("Error!");
        flag = false;
}

if (flag)
    console.log(test);
