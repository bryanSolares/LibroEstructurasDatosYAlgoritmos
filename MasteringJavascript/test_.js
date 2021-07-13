const {partition} = require('underscore');
const _ = require('underscore');

function print(string){
  console.log(string);
}

//TODO range
_.each([1,2,3], print);

console.log(_.range(10));
console.log(_.range(1,11));
console.log(_.range(0,30,5));
console.log(_.range(0,-10,-1));
console.log(_.range(0));
console.log(_.range(3).map(function(){return 'a'}));

//TODO map
console.log(_.map([1,2,3], (num) =>  num * 3));

//TODO reduce
let sum = _.reduce([1,2,3], (memo, num) => {
  console.log(memo, num);
  return memo + num;
}, 0);
console.log(sum);

//TODO filter
let pares = _.filter([1,2,3,4,5,6], (num) => num % 2 === 0);
console.log(pares);

//TODO reject
let noPares = _.reject([1,2,3,4,5,6], (num) => num % 2 === 0);
console.log(noPares);

//TODO contains
console.log(_.contains([1,2,3], 3));

//TODO invoke = hace cualquier accion contenida dentro del tipo que almacena, para string por
//ejemplo usar toUpperCase
console.log(_.invoke([[3,2,1],[30,20,10]], 'sort'));
console.log(_.invoke(['a','b','c'], 'toUpperCase'));

//TODO unique
console.log(_.unique([1,1,2,2,3,3]));

//TODO partition
function resto(n){
  return n % 2 == 0;
}
console.log(_.partition([0,1,2,3,4,5,6], resto));

//TODO compact
console.log(_.compact([0,1,false,2,'',3]));

//TODO without
console.log(_.without([1,2,3,4,5,6,7,8,9,0,0,1,1,2,3,4,5,6],0,1,2));

















