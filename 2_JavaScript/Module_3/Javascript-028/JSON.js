// JSON (JavaScript Object Notation)

/*
    In JSON
    - Double-quoted strings are required for all keys.
    - Accepts the following primitive values: strings, numbers, boolean, Null
    - Accepts the following complex values: Object and array. Cannot contain functions.
    - Properties are separated by commas in JSON objects and arrays, just like in JavaScript.
    - String properties must be surrounded by double quotes. For example: "fruit", "vegetable"
    You can use Object literals and array literals, as long as you follow the above rules.
*/


// -_-_-| From JSON to JavaScript |-_-_-
const jsonString = JSON.stringify({
    "currencies": {
        "USD": {
            "name": "United States Dollar",
            "symbol": "$",
            "value": 1.0,
            "country": "United States"
        },
        "GBP": {
            "name": "British Pound Sterling",
            "symbol": "£",
            "value": 0.75,
            "country": "United Kingdom"
        },
        "EUR": {
            "name": "Euro",
            "symbol": "€",
            "value": 0.85,
            "country": "Eurozone"
        }
    },
    "color": "red",
    "nestedObject": {
        "color": "blue"
    }
});

// Now I can convert the JSON string to a JavaScript object:
const currencyInfo = JSON.parse(jsonString);


// -_-_-| From JavaScript to JSON |-_-_-
const currencyInfo2 = {
    USD: {
        value: 2,
        name: "Dollars"
    },
    GBP: {
        value: 0.5,
        name: "British Pound"
    },
    EUR: {
        value: 2.1,
        name: "Euro"
    },
    description: "text"
};

// Now I can convert the currencyInfo2 object to JSON string:
const jsonString2 = JSON.stringify(currencyInfo);



// --- Other examples ---

// JSON object with two properties separated by ,
'{"color":"red", "nestedObject": { "color": "blue" } }'

// JSON string encoding array:
'["one", "two", "three"]'


/*
    What happens with unsupported data types?
    If you try to stringify a data type not accepted by JSON, such as:
    - Functions: The operation fails silently.
    - BigInt numbers: 
    For example, attempting to stringify 123n will result in an error: 
    Output: Uncaught TypeError: Do not know how to serialize a BigInt.
*/

