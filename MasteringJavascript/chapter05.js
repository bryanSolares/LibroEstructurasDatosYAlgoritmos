
//Patrones en JAVASCRIPT
/*
 *
1. Patrones de creacion             -> esta orientado a la optimizacion en la creacion de objetos
  Metodo de fabrica
  Fabrica abstracta
  Constructor
  Prototipo
  Unico

2. Patrones estructurales           -> esta orientado a la composicion de objetos y relacion entre ellos
  Adaptador
  Puente
  Compuesto
  Decorador
  Fachada
  Flywigth
  Proxy

3. Patrones de comportamiento       -> esta orientado a la interdependencia y relacion entre objetos
  Interprete
  Metodo Plantilla
  Cadena de Responsabilidad
  Mando
  Iterador
  Mediador
  Recuerdo
  Observador
  Expresar
  Estrategia
  Visitante
  */

//TODO Patron del espacio en nombre
//puede reducir la cantidad de globales y ayudar a evitar colisiones entre nombres o prefijos de
//nombres

//ANTIPATRON
function car(){}
function BMW(){}
let engiens = 1;
let features = {
  seats: 6,
  airbags: 6
}

//PATRON
//objeto global
let CARFACTORY = /*CARFACTORY ||*/ {};
CARFACTORY.car = function(){};
CARFACTORY.BMW = function(){};
CARFACTORY.engiens = 1;
CARFACTORY.features = {
  seats: 6,
  airbags: 6
}

console.log(CARFACTORY);

//TODO Patron Modulo = hace separaciones en partes pequenias
let basicServerConfig = {
  env: 'production',
  startupParams: {
    cacheTimeOut: 30,
    locale: 'en_US'
  },
  init: function(){
    console.log('Initializing Server');
  },
  updateStartup: function(params){
    this.startupParams = params;
    console.log(this.startupParams.cacheTimeOut);
    console.log(this.startupParams.locale);
  }
};

basicServerConfig.init();
basicServerConfig.updateStartup({cacheTimeOut: 60, locale: 'en_UK'});

//TODO convirtiendolo en modulo
let basicServerConfig2 = (function(){
  let env = 'production';
  startupParams = {
    cacheTimeOut: 30,
    locale: 'en_US'
  };
  return {
    init: function(){
      console.log('Initializing Server')
    },
    updateStartup: function(params){
      this.startupParams = params;
      console.log(this.startupParams.cacheTimeOut);
      console.log(this.startupParams.locale);
    }
  }
})();

basicServerConfig2.init();
basicServerConfig2.updateStartup({cacheTimeOut: 60, locale: 'en_UK'});

//TODO patron modulo mejorado
let revealingExample = function(){
  let privateOne = 1;
  function privateFunction(){
    console.log('Llamando a funcion privada');
  }

  let publicTwo = 2;
  function publicFunction(){
    publicFunctionTwo();
  }

  function publicFunctionTwo(){
    privateFunction();
  }

  function getCurrentState(){
    return 2;
  }

  return{
    configuration: publicFunction,
    count: publicTwo,
    incrementCount: publicFunctionTwo,
    current: getCurrentState()
  }
}();

console.log(revealingExample);
console.log(revealingExample.current);
revealingExample.configuration();

// TODO PATRON MODULO -> THE REVEALING MODULE PATTER -> PATRON DE MODULO REVELADO.
  // Es asincrono
  let miModuloRevelador = (function(){
    var nombre = 'Bryan Solares';
    var saludo = 'Hola!';

    //Function Privada
    function imprimirNombre(){
      console.log('Nombre:', nombre);
    }

    //Funcion Publica
    function asignarNombre(nuevoNombre){
      nombre = nuevoNombre;
    }

    //Revelar accesos publicos (opcionalmente con otros nombre)
    return{
      setName: asignarNombre,
      greeting: saludo
    }

  })();

miModuloRevelador.setName('Carlos');

//TODO CommonJS
const circle = require('./circle.js');
console.log('El area de 1 circulo de radio 4 es: ' + circle.area(4));
/*
//TODO Asynchronous Module Definition (AMD)
define(function(require){
  var dependencia1 = require('./chapter01');
  var dependencia2 = require('./chapter02');

  return function(){};
});
*/

//TODO Modulos en ES2015
/*import { square, diag} from './lib';
console.log(square(11));
console.log(diag(4,3));*/


//TODO Patron Fabrica
//**********************************************************************************************************
//Para crear objetos
//Propositos
//1. Abstrae las operaciones repetitivas al crear objetos similares
//2. Permite a los consumidores de la fabrica crear objetos sin conocer la parte interna de la
//creaci
//
function CarFactoryPatron(){};
CarFactoryPatron.prototype.info = function(){
  console.log('Este carro tiene ' + this.doors + " puertas y un " + this.engine_capacity + " motor de primera");
}

CarFactoryPatron.make = function(type){
  let constr = type;
  let car;
  CarFactoryPatron[constr].prototype = new CarFactoryPatron();
  car = new CarFactoryPatron[constr]();
  return car;
};

CarFactoryPatron.Compact = function(){
  this.doors = 4;
  this.engine_capacity = 2;
}

CarFactoryPatron.Sedan = function(){
  this.doors = 4;
  this.engine_capacity = 2;
}

CarFactoryPatron.SUV = function(){
  this.doors = 4;
  this.engine_capacity = 6;
}

console.log(CarFactoryPatron);

let golf = CarFactoryPatron.make('Compact');
let vento = CarFactoryPatron.make('Sedan');
let touareg = CarFactoryPatron.make('SUV');
golf.info();







