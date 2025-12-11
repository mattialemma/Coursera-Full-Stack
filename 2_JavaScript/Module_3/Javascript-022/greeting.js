
export const informalGreeting = (person) => console.log(`Hello, ${person}`);

const greet = () => console.log('Very normal text!');
export default greet;

/*
    We created two functions.
    The first (informalGreeting) is a function exported by name.
    The second (greet) is the main function of the file, exported as default.
    In another file we can import them.
*/
