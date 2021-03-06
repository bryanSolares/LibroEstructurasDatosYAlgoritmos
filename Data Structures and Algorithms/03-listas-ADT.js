"use strict";
// TODO: lista de tipos de datos Abstractos

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(elemnet, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, elemnet);
    ++this.listSize;
    return true;
  }

  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

let nombres = new List();
nombres.append("Genesis");
nombres.append("Amber");
nombres.append("Rocio");
//const element = this.dataStore[i];
// console.log(nombres.toString());
// nombres.remove('Amber')
// console.log(nombres.toString());
// nombres.front()
// console.log(nombres.getElement());
// nombres.next()
// console.log(nombres.getElement());

// for (nombres.front(); nombres.currPos() < nombres.length(); nombres.next()) {
//   console.log(nombres.getElement());
// }

// let movies = read(films.txt).split("\n");

// function createArr(archivo) {
//   let arr = read(archivo).split("\n");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].trim();
//   }

//   return arr;
// }

// var movieList = new List();
// for (let i = 0; i < movies.length; i++) {
//   movieList.append(movies[i]);
// }

// function displayList(){
//   for(list.from){}
// }
