'use strict'

//FUNCIONES, CIERRES Y MODULOS

//FUNCIONES LITERALES
function sumar(a,b){
  return a + b;
}

let sumarB = function(a,b){
  return a + b;
}

/*let facto = function factorial(n){
  if(n <= 1){
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(facto(10))

(function sayHi(){
  console.log('Hola mundo')
})();*/

function chageCase(val){
  return val.toUpperCase();
}

function demoFuncion(a, passFunction){
  console.log(passFunction(a));
}

demoFuncion('smallcase', chageCase);

//FUNCIONES COMO DATA
var validateDataForAge = function(data){
 var person = data();
  if(person.age < 1 || person.age > 99){
    return true;
  }else{
    return false;
  }
}

var errorHandlerForAge = function(){
  console.log('Error al procesar la edad');
}

function parseRequest (datos, validateData, errorHandler){
  var error = validateData(datos);

  if(!error){
    console.log('Sin errores');
  }else{
    errorHandler();
  }
}

var generateDataForScientis = function(){
  return {
    name: 'Bryan Solares',
    age: Math.floor(Math.random() * (100 - 1)) + 1
  };
}

var generateDataForComposes = function(){
  return {
    name: 'JS Bach',
    age: Math.floor(Math.random() * (100 - 1)) + 1
  };
}

parseRequest(generateDataForScientis, validateDataForAge, errorHandlerForAge)
parseRequest(generateDataForComposes, validateDataForAge, errorHandlerForAge)

//ALCANCES
//ALCANCES GLOBALES
//Las variables globables pueden ser modificadas desde cualquier ambito
let a = 1;
function scopeTest(){
  a = 2;
  console.log(a)
}

console.log(a)
scopeTest()
console.log(a)

//ALCANCE LOCAL
let scopeName = 'Global';
function showScopeName(){
  let scopeName = 'Local';
  console.log(scopeName);
}

console.log(scopeName);
showScopeName();
console.log(scopeName);

let aa = 1;
//patron IIFE patron de funcion invocada inmediatamente 
(function(){
  let aa = 2;
  console.log(a)
})();

console.log(aa);

//Error
/*functionOne();
let functionOne = function(){
  console.log('Function One');
}*/

//No error
functionTwo();
function functionTwo(){
  console.log('Function Two');
}




