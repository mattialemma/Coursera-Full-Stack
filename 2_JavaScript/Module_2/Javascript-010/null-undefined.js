
/* -_-_-_-| Null |-_-_-_- */

var letters = "abc";
letters.match(/a/); // search for letter 'a' in the string | Returns an array: 
/* 
 Output:
    [
    'a',
    index: 0,
    input: 'abc',
    groups: undefined
    ]
*/

// Test on how .match() works
var test = "hello";
console.log(test.match("el")); // index 1 because the match starts from test[1]


var letters = "abc";
letters.match(/d/); // 'd' not found so doesn't build the array:
/* 
Output:
    null
*/


/* -_-_-_-| Undefined |-_-_-_- */

var a;
console.log(a); // value of a undefined, not initialized


/* -_-_-_-| Empty string |-_-_-_- */
var name1 = "";
var name2 = '';
