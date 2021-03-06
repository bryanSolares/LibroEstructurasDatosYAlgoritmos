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

console.log(/'\d+'/.test('123'));
// \d = todos los digitos de 0-9
//  + = que tenga una o mas coincidencias
//  ' = coincidencias de caracteres literales

let heartyLaugth = /Ha+(Ha+)+/i;
console.log(heartyLaugth.test('HaHaHaHaHaHaHaaaaaaaaaaaaaaaaa'));

//  H = coincidencia de caracteres literal
// a+ = 1 o mas coincidencias del caracter 'a'
//  ( = inicio del grupo de expresion
//  H = coincidencia de caracter literal
// a+ = 1 o mas coincidencias del caracter 'a'
//  ) = final de grupo de expresion
//  + = 1 o mas coincidencias del grupo de expresion (Ha+)

// \b = marca indica un espacio
console.log(/gato/.test('un gato negro'));
console.log(/\bgato/.test('un gato negro'));
console.log(/gato\b/.test('un gato negro'));
console.log(/\bgato\b/.test('un gatonegro'));
console.log(/\bcat\b/.test('concatenar'));

let matchExec = /\d+/.exec('Hay 100 formas de hacer esto');
console.log(matchExec)

//TODO alternativas - O = |
// /(ab)|(cd)+/

//TODO principio y fin
// /^prueba/ = indica que solo tiene que aparecer al inicio
// /prueba$/ = indica que solo tiene que aparecer al final
// /^prueba$/ = el patron debera abarcar toda la cadena

//TODO cuantificadores CODICIOSO Y PEREZOSOS
//Se agrega un signo ? para hacer el patron perezoso

function trim (str){
  return (str || "").replace(/^\s+|\s+$/g,'');
}

//TODO MATRICES
//las matrices pueden contener cualquier tipo de elemento
let arr = new Array(1,2,3);
let arr2 = Array(1,2,3);
let arr3 = [1,2,3];
let arrCualquierTipo = [
  'texto', 42.0, true, false, null, undefined, ['sub','matriz'],{'clave': 'valor'}, NaN
]

//para buscar un elemento se puede hacer buscando el indice del elemento
console.log(arrCualquierTipo[1]);

//reduccion de los elemento de la matriz
arrCualquierTipo.length = 0;
console.log(arrCualquierTipo.length);

//para recorrer una matriz se puede hacer con un bucle for o forEach
//hay diferentes metodos que ofrecen extremas utilidades

//TODO: concat = une dos o mas matrices, generando una nueva matriz
//TODO: join = une dos o mas matrices a partir de un patron buscado, resultando en un string
//TODO: pop = elimina y devuelve el ultimo elemento de una matriz
//TODO: push = agregar un elemento al final de la matriz y devuelve la nueva longitud
//TODO: shift = eliminar el primer elemento de una matriz y devuelve el elemento eliminado
//TODO: unshift = agregar uno o mas elementos al inicio de la matriz y devuelve la nueva longitud
//TODO: reverse = traspone los elementos de una matriz
//TODO: sort = ordena los elementos de una matriz 
//TODO: indexOf = busca un elemento deseado en la matriz y devuelve la posicion de la primera
//coincidencia
//TODO: lastIndexOf = busca un elemento deseado en la matriz de atras hacia adelante y devuelve la
//posicion de la primera coincidencia
//se sugiere como libreria util usar UnderScore.js


//TODO MAPS = se define por un dato que tiene clave y valor let redes = new Map();
let redes = new Map();
redes.set('facebook', 'Mark');
redes.set('google', 'Larry');
console.log(redes.size);
console.log(redes.get('twitter'));
console.log(redes.has('yahoo'));

for(let [key, value] of redes){
  console.log(key, value);
}

//TODO SET'S = los valores tienen que ser unicos
let mySet = new Set();
mySet.add(1);
mySet.add('Hola');
mySet.add('foo');

console.log(mySet.has(1));
console.log(mySet.delete('foo'));
console.log(mySet.size);

for(let item of mySet) console.log(item);

//TODO RECOMENDACIONES

//INCORRECTO
let elementos = new Array();
//CORRECTO
let elementos2 = [];

const myL = [];
//INCORRECTO
myL[myL.length] = 'pushElement';
//CORRECTO
myL.push('pushElement');


















