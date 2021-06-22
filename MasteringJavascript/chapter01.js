'use strict'

let asStringObject = new String('cadena');
console.log(asStringObject instanceof String);
console.log('un string es instancia de String' instanceof String);
let string = 'este es un string simple';
console.log(string instanceof String);

let hoy = new Date();
console.log(hoy.getDate());
console.log(hoy.getMonth());
console.log(hoy.getFullYear());
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());

//Guia de estilos
//1. Espacios en blanco
//2. Parentesis, saltos de linea y llaves
//3. Elegir entre usar comillas dobles o simples
//4. Fin de lineas correcto y espacios en blanco adecuados
//5. Comprobacion de tipos
//6. Casteo de tipos
//7. Usar correctamente las condicionales
//
//MAL
//(array.length > 0)
//CORRECTO
//(array.length)
//MAL
//(array.length === 0)
//CORRECTO
//(!array.length)
//MAL
//(cadena !== '')
//CORRECTO
//(cadena)
//MAL
//(cadena === '')
//CORRECTO
//(!cadena)
//MAL
//(valor === true)
//CORRECTO
//(valor)
//MAL
//(valor === false)
//CORRECTO
//(!valor)
//
//8. Nombrado correcto de variables y metodos. Usar codificacion camelCase 
//9. Usar el modo estricto = 'use strict'
//
