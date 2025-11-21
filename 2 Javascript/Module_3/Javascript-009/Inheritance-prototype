// Ereditarietà e prototipi utilizzando il metodo Object.create

/*
    In JavaScript, il prototipo è un oggetto che può contenere proprietà
    che possono essere  condivise da più oggetti. 
*/

var bird = { // è il prototipo
    hasWings: true,
    canFly: true,
    hasfeathers: true
}

var eagle1 = Object.create(bird); // Oggetto eagle1 che ha bird come prototipo
console.log("eagle1:", eagle1);
console.log("Eagle1 can fly:", eagle1.canFly);
console.log("Eagle1 has wings:", eagle1.hasWings);
console.log("Eagle1 has feathers:", eagle1.hasfeathers);

var eagle2 = Object.create(bird); // Oggetto eagle2 che ha bird come prototipo
console.log("Eagle2 has wings:", eagle2.hasWings);

var pinguin1 = Object.create(bird); // Oggetto pinguin1 che ha bird come prototipo
pinguin1.canFly = false; // Overriding della proprietà ereditata dal prototipo
console.log("Pinguin1 can fly:", pinguin1.canFly);

console.log("Eagle1 can fly:", eagle1.canFly); // Prova che l'override riguarda solo l'oggetto pinguino

/*
    Risulta meglio utilizzare la sintassi di classe per oggetti ed ereditarietà più complesse
    rispetto alla sintassi con i prototipi.

    Tecnicamente, però, la sintassi a classi è solo “zucchero sintattico” sopra ai prototipi:
    sotto il cofano funziona comunque basandosi sul prototype chain.
*/
