'use strict'
//ESTRUCTURAS DE DATOS Y SU MANIPULACION
//1. expresiones regulares
//2. coincidencia exacta
//3. coincidir con una clase
//4. apariciones repetidas
//5. principio y fin
//6. referencias anteriores
//7. cuantificadores codiciosos y perezosos
//8. matrices
//9. mapas
//10. conjuntos
//11. cuestiones de estilo

//TODO expresiones regulares
let patron = /prueba/; //coincide exactamente con la palabra prueba.
let patter = new RegExp('prueba');

//usando banderas para los patrones
let patr = /naranja/;
console.log(patr.test('naranja'));

let patrIgnoreCase = /naranja/i;
console.log(patrIgnoreCase.test('Naranja'));

let patrGlobal = /naranja/ig;
console.log(patrGlobal.test('Jugo de naranja'));





