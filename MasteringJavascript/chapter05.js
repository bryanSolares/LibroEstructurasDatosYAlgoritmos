
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




