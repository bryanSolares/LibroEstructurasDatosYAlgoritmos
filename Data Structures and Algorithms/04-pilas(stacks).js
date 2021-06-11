//TODO: no importa el orden. Se base en LIFO (LAST IN FIRTS OUT)
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = [element];
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("Longitud:", s.length());
console.log(s.peek());
let popped = s.pop();
console.log("El elemento popped es:", popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length:", s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

function mulBase(num, base) {
  let sta = new Stack();
  do {
    sta.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";
  while (sta.length() > 0) {
    converted += sta.pop();
  }

  return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num, "converted to base", base, "is", newNum);
num = 125;
base = 8;
newNum = mulBase(num, base);
console.log(num, "converted to base", base, "is", newNum);
