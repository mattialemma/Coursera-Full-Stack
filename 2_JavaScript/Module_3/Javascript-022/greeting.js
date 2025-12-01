
export const informalGreeting = (person) => console.log(`Hello, ${person}`);

const greet = () => console.log('Testo normalissimo!');
export default greet;

/*
    Abbiamo creato due funzioni.
    La prima (informalGreeting) è una funzione esportata per nome.
    La seconda (greet) è la funzione principale del file, esportata come default.
    In un altro file possiamo importarle.
*/
