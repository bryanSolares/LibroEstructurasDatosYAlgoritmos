let _ = require('underscore');


//TODO Programacion Orientada a Objetos
function Player(){}

Player.prototype.usesBat = function(){
  return true;
}

let crazyBob = Player();
if(crazyBob === undefined){
  console.log('CrazyBob no esta definido');
}

let swingPlayer = new Player();
if(swingPlayer && swingPlayer.usesBat && swingPlayer.usesBat()){
  console.log('Swing player existe y puede usar su metodo');
}

//TODO Propiedades de Instancia vrs Propiedades Prototipo
function Player2(){
  this.isAvailable = function(){
    return 'El metodo de instancia dice: esta encontrado';
  };
}

Player2.prototype.isAvailable = function(){
  return 'El metodo de prototipo dice: no esta encontrado';
}

let crazyBob2 = new Player2();
console.log(crazyBob2.isAvailable());

//TODO contexto de this.
console.log(this);
let f = {
  name: 'f',
  func: function(){
    return this;
  }
}

console.log(f.func());

function Player3(name, sport, age, country){
 this.constructor.noOfPlayers++;
  let retirementAge = 40;
  let available = true;
  let playerAge = age?age:18;

  function isAvailable(){
    return available && (playerAge < retirementAge);
  }

  let playerName = name?name:'Unknown';
  let playerSport = sport?sport:'Unknown';

  this.book = function(){
    if(!isAvailable()){
      this.available = false;
    }else{
      console.log('El jugador no esta disponible');
    }
  }

  this.getSport = function(){
    return playerSport;
  }

  this.batPreference = 'Lefty';
  this.hasCelebGirldFriend = false;
  this.endorses = 'Super Brand';
}

Player3.prototype.swithHands = function(){
  this.batPreference = 'righty';
}

Player3.prototype.dateCeleb = function(){
  this.hasCelebGirldFriend = true;
}

Player3.prototype.fixEyes = function(){
  this.wearGlasses = false;
}

Player3.prototype.wearGlasses = true;
Player3.noOfPlayers = 0;

(function PlayerTest(){
  let cricketet = new Player3('Vivian', 'Cricket', 23, 'Inglaterra');
  let golfista = new Player3('Pete', 'Golf', 32, 'EE.UU');
  console.log('Hasta ahora hay'+ Player3.noOfPlayers + ' en el gremio');

  console.log(cricketet);
  console.log(golfista);
  console.log();
  console.log(Player3);
  console.log(Player3.prototype);

 cricketet.fixEyes();
  golfista.fixEyes();
  cricketet.endorses = 'Otra marca';

  Player3.prototype.fixEyes = function(){
    this.wearGlasses = true;
  }

  cricketet.swithHands = function(){
    this.batPreference = 'indeciso';
  }
})();

//TODO HERENCIA
//LO QUE NO ES HERENCIA
function Persona(){
  Persona.prototype.llorar = function(){
    console.log('Llorando');
  }
}

function Ninio(){}
Ninio.prototype = {llorar: Persona.prototype.llorar};
let unNinio = new Ninio();
console.log(unNinio instanceof Ninio);
console.log(unNinio instanceof Persona);
console.log(unNinio instanceof Object);

//LO QUE ES HERENCIA
Ninio.prototype = new Persona();
let unNinio2 = new Ninio();
console.log(unNinio2 instanceof Ninio);
console.log(unNinio2 instanceof Persona);
console.log(unNinio2 instanceof Object);

function Empleado(){
  this.nombre = '';
  this.depto = 'Ninguno';
  this.salario = 0.0;
}

function Administrador(){
  Empleado.call(this); // es como llamar a super en java
  this.reportes = [];
}
Administrador.prototype = Object.create(Empleado.prototype);

function IndividualContributor(){
  Empleado.call(this);
  this.active_projects = [];
}
IndividualContributor.prototype = Object.create(Empleado.prototype);

function TeamLead(){
  Administrador.call(this);
  this.depto = 'Software';
  this.salario = 10000;
}
TeamLead.prototype = Object.create(Administrador.prototype);

function Ingenier(){
  TeamLead.call(this);
  this.depto = 'Javascript';
  this.desktop_id = '8822';
  this.salario = 80000;
}
Ingenier.prototype = Object.create(TeamLead.prototype);

let genericEmployee = new Empleado();
console.log(genericEmployee);

let Karen = new Administrador();
Karen.nombre = 'Karen';
Karen.reportes = [1,2,3];
console.log(Karen);

let Jason = new TeamLead();
Jason.nombre = 'Jason';
console.log(Jason);

String.prototype.reverse = function(){ //extendiendo funcionalidades a los objetos nativos, como se esta haciendo mediante prototype se hace globalmente el cambio
  return Array.prototype.reverse.apply(this.split('')).join('');
}

let str = 'JavaScript';
console.log(str.reverse());

//TODO getters and setters
//
let persona = {
  nombre : 'Albert',
  apellido : 'Einstein',
  setApellido: function(_apellido){
    this.apellido = _apellido;
  },
  setNombre: function(_nombre){
    this.nombre = _nombre;
  },
  getNombreCompleto: function(){
    return this.nombre + ' ' + this.apellido;
  }
};

persona.setNombre('Issac');
persona.setApellido('Newton');
console.log(persona.getNombreCompleto());

//TODO mejoras en ECMAScript5
let persona2 = {
  nombre: 'Albert',
  apellido: 'Einstein',
  get nombreCompleto(){
    return this.nombre + ' ' + this.apellido;
  },
  set darNombre(_nombre){
    let palabra = _nombre.toString().split(' ');
    this.nombre = palabra[0];
    this.apellido = palabra[1];
  }
};
persona2.darNombre = 'Issac Newton';
console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.nombreCompleto);

//Otra forma de hacer lo anterior
let persona3 = {
  nombre: 'Albert',
  apellido: 'Einstein'
}

Object.defineProperty(persona3, 'nombreCompleto', {
  get: function(){
    return this.nombre + ' ' + this.apellido;
  },
  set: function(nombreCompleto){
    let palabra = nombreCompleto.toString().split(' ');
    this.nombre = palabra[0];
    this.apellido = palabra[1];
  }
});

persona3.nombreCompleto = 'Issac Newton';
console.log(persona3.nombre);
console.log(persona3.apellido);
console.log(persona3.nombreCompleto);

//Utilidades en underscore para procesar objetos

//TODO keys = solo recuper lo propio del objeto
let testObj = {
  nombre: 'Albert',
  edad: 90, 
  profesion: 'Fisico'
};

console.log(_.keys(testObj));

//TODO allKeys = todo, incluyendo lo del prototype
function Cientifico(){
  this.nombre = 'Albert';
  this.edad = 80;
}

Cientifico.prototype.casado = true;

let cientifico = new Cientifico();
console.log(_.keys(cientifico));
console.log(_.allKeys(cientifico));

//TODO values = Recupera valores de solo el objeto
console.log(_.values(cientifico));

//TODO mapObject = transforma el valor de cada propiedad en el objeto
let lst = _.mapObject(cientifico, (valor, clave)=>{
  console.log(clave, '--->', valor);
  if(clave === 'edad'){
    return valor + 10;
  }else{
    return valor;
  }
});

console.log(lst);

//TODO pick = devuelve una copia solo con las claves indicadas
console.log(_.pick(testObj, 'nombre', 'edad'));
console.log(_.pick(testObj, (valor, clave, object)=> _.isNumber(valor)));

//TODO omit = devuelve lo opuesto que pick
console.log(_.omit(testObj, 'nombre','edad'));
console.log(_.omit(testObj, (valor, clave, object)=> _.isNumber(valor)));












