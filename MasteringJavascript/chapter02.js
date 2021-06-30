"use strict";

//FUNCIONES, CIERRES Y MODULOS

//FUNCIONES LITERALES
function sumar(a, b) {
  return a + b;
}

let sumarB = function (a, b) {
  return a + b;
};

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

function chageCase(val) {
  return val.toUpperCase();
}

function demoFuncion(a, passFunction) {
  console.log(passFunction(a));
}

demoFuncion("smallcase", chageCase);

//FUNCIONES COMO DATA
let validateDataForAge = function (data) {
  let person = data();
  if (person.age < 1 || person.age > 99) {
    return true;
  } else {
    return false;
  }
};

let errorHandlerForAge = function () {
  console.log("Error al procesar la edad");
};

function parseRequest(datos, validateData, errorHandler) {
  let error2 = validateData(datos);
  if (!error2) {
    console.log("Sin errores");
  } else {
    errorHandler();
  }
}
//EXPRESION DE FUNCIONES error
//functionOne();
let functionOne = function () {
  console.log("functionOne");
};

//DECLARACION DE FUNCIONES no error
functionTwo();
function functionTwo() {
  console.log("Function Two");
}

//Cuando hay funciones dentro de condicionales if se debe usar las expresiones
//de funciones en lugar de declaraciones
let miFuncion;
if (true) {
  miFuncion = function () {
    return true;
  };
} else {
  miFuncion = function () {
    return false;
  };
}

miFuncion();

//Utilizando la palabra reservada this.
let person = {
  name: "Bryan Solares",
  age: 26,
  greet: function () {
    console.log("Saludando.....");
  },
};
person.greet();

//INVOCACION COMO CONSTRUCTOR
let Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function () {
  return this.name;
};

let Bryan = new Person("Bryan Solares");
console.log(Bryan.greet());

//FUNCIONES ANONIMAS
//funciones anonimas al crear objetos
let santa = {
  say: function () {
    "ho, ho, ho";
  },
};
santa.say();

//funciones anonimas al crear una lista
let cosas = [
  function () {
    console.log("Hace la primera cosa");
  },
  function () {
    console.log("Hace la segunda cosa");
  },
];

for (let a = 0; a < cosas.length; a++) {
  cosas[a]();
}

//funciones anonimas como parametros para otras funciones
function eventHandler(event) {
  event();
}

eventHandler(function () {
  console.log("ejecutando cualquier codigo");
});

//funciones anonimas en logica condicional
let form;
let form_name = "circulo";
if (form_name === "CUADRADO") {
  form = function () {
    console.log("Dibujando un cuadrado");
  };
} else {
  form = function () {
    console.log("Dibujando un circulo");
  };
}
form();

// TODO: CIERRES
let exterior = "Yo soy el exterior";
let copy;
function externalFuncion() {
  let interior = "Interior";
  console.log(exterior);
  function internalFuncion() {
    console.log(exterior);
    console.log(interior);
  }
  copy = internalFuncion;
}

externalFuncion();
copy();
