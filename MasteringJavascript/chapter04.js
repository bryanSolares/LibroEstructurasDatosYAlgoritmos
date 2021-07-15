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







