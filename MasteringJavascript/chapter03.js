'use strict'
//ESTRUCTURAS DE DATOS Y SU MANIPULACION
//1. expresiones regulares
//2. coincidencia exacta
//3. coincidir con un conjunto de caracteres
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

//TODO coincidir con un conjunto de caracteres
let patronAlgunosCaracteres = /[abc]/;
console.log(patronAlgunosCaracteres.test('a'));
console.log(patronAlgunosCaracteres.test('d'));

let patronCaracteresNoSeTomanEnCuenta = /[^abc]/;
console.log(patronCaracteresNoSeTomanEnCuenta.test('a'));
console.log(patronCaracteresNoSeTomanEnCuenta.test('d'));
  
let patronRangoValores = /[1-5]/;
console.log(patronRangoValores.test(3));
console.log(patronRangoValores.test(12345));
console.log(patronRangoValores.test(9));
console.log(patronRangoValores.test(67890));
console.log(/[01234567890]/.test('Este es el anio 2021'));

//TODO usando caracteres especiales
let stringToMatch = '¡Un Toyota! ¡Corre coche rápido y seguro! ¡Un Toyota!';
let regExAt = /Toy/;
let arrExec = regExAt.exec(stringToMatch);
let arrMatch = stringToMatch.match(regExAt);
console.log(arrExec);
console.log(arrMatch);

let stringReemplace = 'El azul es tu color favorito';
let regReemplace = /azul/;
//console.log(stringReemplace.replace(regReemplace,'rojo'));
console.log(stringReemplace.replace(regReemplace, 
  function(matchingText){
  return 'rojo';
  })
);

let sColor = 'sol, luna, estrella';
let reComma = /\,/;
console.log(sColor.split(reComma));

let stringMultiplePatrones = 'bato de madera, gato maloliente, plato gordo';
let re = /[bgl]ato/gi;
let stringMultipleMatchArr = stringMultiplePatrones.match(re);
console.log(stringMultipleMatchArr);

let stringMul2 = 'i1,i2,i3,i4,i5,i6,i7,i8,i9,i10';
let re2 = /i[0-5]/gi;
let re3 = /i[^0-5]/gi;
let arrStringMulti = stringMul2.match(re2);
let arrStringMulti2 = stringMul2.match(re3);
console.log(arrStringMulti, arrStringMulti2);

//Notaciones especiales para abreviar
// \d = [0-9]
// \w = caracter alfanumerico
// \s = cualquier caracter de espacio en blanco (espacio, tabulador, nueva
// linea, similar)
// \D = cualquier caracter que no sea digito 
// \W = un caracter no alfanumerico
// \S = un caracter que no sea espacio, tabulador, nueva linea, similar

let stringNumber = '123-456-7890';
let matchLago = /[0-9][0-9][0-9]-[0-9][0-9][0-9]/;
let matchCorto = /\d\d\d-\d\d\d/;
let matchNumbers1 = stringNumber.match(matchLago);
let matchNumbers2 = stringNumber.match(matchCorto);
console.log(matchNumbers1);
console.log(matchNumbers2);

//TODO apariciones repetidas

// ?: = 0 o 1 ocurrencia
// *: = 0 o mas ocurrencias
// +: = 1 o mas ocurrencias
// {n} = exactamente n casos
// {n, m} = ocurrencias entre n y m
// {n,} = al menos una aparicion n
// {,n} = 0 a n ocurrencias

let patronOcurrencias = /behaviou?r/;
console.log(patronOcurrencias.test('behaviour'));
console.log(patronOcurrencias.test('behavior'));













