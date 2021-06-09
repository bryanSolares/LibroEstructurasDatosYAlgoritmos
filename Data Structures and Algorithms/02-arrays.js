// creación de matrices
let numberf1 = []
let numberf2 = [1, 2, 3, 4, 5]
let numberf3 = new Array();
let numberf4 = new Array(1, 2, 3, 4, 5) //elementos
let numberf5 = new Array(10) //solo un parametro, se especifica longitud
let objecs = [1, 'Bryan', true, null]

//Escritura en una matriz
let numbs = []
for (let i = 0; i < 100; i++) {
    numbs[i] = i + 1
}

//Accediendo a los elementros de una matriz
let numbs1 = [1, 2, 3, 4, 5]
let suma = numbs1[0] + numbs1[1] + numbs1[2] + numbs1[3] + numbs1[4]
console.log(suma);

//otra forma de acceder a los elementos
let suma2 = 0
for (let i = 0; i < numbs1.length; i++) {
    suma2 += numbs1[i]
}
console.log(suma2);

//hacer matriz a partir de palabras
let oracion = 'el veloz zorro marron salto sobre el perro perezoso'
let palabras = oracion.split(' ');
for (let i = 0; i < palabras.length; i++) {
    console.log('Palabra', i, ':', palabras[i]);
}

//COPIA SUPERFIAL (NO RECOMENDADO)
let original = []
for (let i = 0; i < 100; i++) {
    original[i] = i + 1
}
let copia = original

//COPIA PROFUNDA (RECOMENDADA)
let original2 = []
for (let i = 0; i < 100; i++) {
    original[i] = i + 1
}

let copia2 = []

function copy(originalArr, copiaArr) {
    for (let i = 0; i < originalArr.length; i++) {
        copiaArr[i] = originalArr[i]
    }

    console.log(copiaArr);
}

copy(original2, copia2)

//FUNCIONES DEL OBJETO MATRIZ

let nombres = ['Yojana', 'Genesis', 'Lea', 'Bryan', 'Genesis']

//TODO: Buscar un valor en la matriz (devuelve posicion donde esta lo buscado, de lo contrario devuelve -1)
let posicion = nombres.indexOf('Genesis') // busca primera posicion izquierda a derecha, se encontrara en posicion 1, el conteo empieza en 0
let posicion2 = nombres.lastIndexOf('Genesis') // busca ultima posicion izquierda a derecha, se encontrara en posicion 4 

// TODO: Union de elementos
let StrJoin = nombres.join()
let StrtoString = nombres.toString()
console.log(StrJoin, StrtoString);

// TODO: Concatenar matrices
let mat1 = [1, 2, 3, 4, 5]
let mat2 = [10, 20, 30, 40, 50]
let matUnion = mat1.concat(mat2, 100, 200, 300, 400, 500) // devuelve como resultado la union
console.log(matUnion);

// TODO: funcion splice 
let matAnt = ['elemento 0', 'elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5']
let matNueva = matAnt.splice(1, 3, 'elemento 6', 'elemento 7')
console.log(matAnt);
console.log(matNueva);
matAnt.splice(1, 0, 'elemento 8', 'elemento 9')
console.log(matAnt);

// TODO:  agregar elemento a array
let pushArray = [1, 2, 3, 4, 5]
pushArray.push(10, 20, 30, 40, 50) //agrega al final
console.log(pushArray);
pushArray.unshift(100, 200, 300, 400, 500) // agrega al inicio
console.log(pushArray);

// TODO: eliminar elemento
let popShiftArray = [1, 2, 3, 4, 5]
popShiftArray.pop()
console.log(popShiftArray); // eliminar elemento al final (devuelve el elemento eliminado)
popShiftArray.shift()
console.log(popShiftArray); // eliminar elemento al inicio (devuelve el elemento eliminado)

//TODO: ordenamiento de matriz
let ordenamientoReverseSort = [1, 2, 3, 4, 5]
let ordenamientoReverseSortLetras = ['aa', 'cc', 'aa', 'bb', 'zz', 'dd']
ordenamientoReverseSort.reverse()
ordenamientoReverseSortLetras.reverse() //solo invierte el array no lo ordena
console.log(ordenamientoReverseSort, ordenamientoReverseSortLetras);
ordenamientoReverseSort.sort()
ordenamientoReverseSortLetras.sort()
console.log(ordenamientoReverseSort, ordenamientoReverseSortLetras);

function comparar(num1, num2) {
    return num1 - num2
}

var numSort = [3, 1, 2, 100, 4, 200]
numSort.sort(comparar)
console.log(numSort);

// TODO funciones de iteracion que no devuelven array nuevo
//forEach
function cuadrado(num) {
    console.log(num, num * num);
}

let numsIterator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numsIterator.forEach(cuadrado)

//every
function resto(num) {
    return num % 2 == 0;
}

let numbsTodosAlgunos = [2, 4, 6, 8, 10, 7]
let even = numbsTodosAlgunos.every(resto)
even ? console.log('Todos son pares') : console.log('No todo son pares');
let som = numbsTodosAlgunos.some(resto)
som ? console.log('Alguno es par') : console.log('Ninguno es par');

//reduce
function add(valorAcumulado, valorActual) {
    return valorAcumulado + valorActual
}

let sumReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumReduce.reduce(add));

function concatReduce(cadenaAcumulada, palabraActual) {
    return cadenaAcumulada + palabraActual
}

let concatRecudeWords = ['el ', 'rapido ', 'zorro ', 'marron ']
console.log(concatRecudeWords.reduce(concatReduce));

// TODO: funciones iteradoras que devuelve nuevo array (map, filter)

function curve(grade) {
    return grade += 5;
}

let grades = [77, 65, 81, 92, 83]
let newGrades = grades.map(curve)
console.log(newGrades);

function first(word) {
    return word[0]
}

let words = ['for', 'your', 'information']
let acronym = words.map(first)
console.log(acronym.join(''));

//TODO: recurriendo matrices multidimensionales

let calificaciones = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 89]
]

let total = 0
let promedio = 0

// patron por filas
for (let row = 0; row < calificaciones.length; row++) {
    for (let colum = 0; colum < calificaciones[row].length; colum++) {
        total += calificaciones[row][colum]
    }
    promedio = total / calificaciones[row].length;
    console.log('Studiante', parseInt(row + 1), 'promedio:', promedio.toFixed(2));
    total = 0, promedio = 0
}

// patron por columna
for (let col = 0; col < calificaciones.length; col++) {
    for (let row = 0; row < calificaciones[col].length; row++) {
        total += calificaciones[col][row]
    }
    promedio = total / calificaciones[col].length;
    console.log('Studiante', parseInt(col + 1), 'promedio:', promedio.toFixed(2));
    total = 0, promedio = 0
}

//matriz irregular
let matrizIrregular = [
    [89, 77, 78, 80, 90, 100],
    [76, 82, 81, 65],
    [91, 94, 89]
]

for (let col = 0; col < calificaciones.length; col++) {
    for (let row = 0; row < calificaciones[col].length; row++) {
        total += calificaciones[col][row]
    }
    promedio = total / calificaciones[col].length;
    console.log('Studiante', parseInt(col + 1), 'promedio:', promedio.toFixed(2));
    total = 0, promedio = 0
}

//TODO: matriz de objetos
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPoints(arr) {
    arr.forEach(obj => console.log(obj.x, ',', obj.y))
}

let p1 = new Point(1, 2)
let p2 = new Point(3, 5)
let p3 = new Point(2, 8)
let p4 = new Point(4, 4)
let points = [p1, p2, p3, p4]
points.forEach((obj, cont) => console.log('Poing', parseInt(cont + 1), ':', obj.x, ',', obj.y))
let p5 = new Point(12, -3)

points.push(p5)
console.log('Despues de agregar')
displayPoints(points)
console.log('Despues de quitar');
points.shift();
displayPoints(points)

// TODO: matrices en objetos


// function weekTemps() {
//     this.dataStore = []
//     this.add = addTemp;
//     this.average = averageTemp;
// }

// function addTemp(temp) {
//     this.dataStore.push(temp)
// }

// function averageTemp() {
//     let total = 0;
//     for (const dt of this.dataStore) {
//         total += dt
//     }

//     return total / this.dataStore.length;
// }

// let thisWeek = new weekTemps()
// thisWeek.add(52)
// thisWeek.add(55)
// thisWeek.add(61)
// thisWeek.add(65)
// thisWeek.add(55)
// thisWeek.add(50)
// thisWeek.add(52)
// thisWeek.add(49)
// console.log(thisWeek.average().toFixed(2));

//TODO: ejercicio

// 1. Cree un objeto de calificaciones que almacene un conjunto de calificaciones de los estudiantes en un objeto.
// Proporcionar unafunción para agregar una calificación y una función para mostrar el promedio de calificaciones del estudiante .

function alumnoCalificaciones() {
    this.calificaciones = []
    this.agregarCalificacion = agregarCalificacion;
    this.promedioCalificaciones = promedioCalificaciones;
}

function agregarCalificacion(calificacion) {
    this.calificaciones.push(calificacion)
}

function promedioCalificaciones() {
    let total = 0;
    this.calificaciones.forEach(e => total += e)
    return total / this.calificaciones.length;
}

let bryan = new alumnoCalificaciones()
bryan.agregarCalificacion(80)
bryan.agregarCalificacion(85)
bryan.agregarCalificacion(90)
bryan.agregarCalificacion(95)
console.log(bryan.promedioCalificaciones());

// 2.Almacene un conjunto de palabras en una matriz y muestre el contenido tanto hacia adelante como hacia atrás.
let palabrasReverse = []

function agregarPalabra(palabra) {
    palabrasReverse.push(palabra)
}

function imprimir() {
    console.log(palabrasReverse);
    console.log(palabrasReverse.reverse());
}

agregarPalabra('hola')
agregarPalabra('mundo')
agregarPalabra('como')
agregarPalabra('estan')
imprimir()

//3.Modifique el objeto WeekTemps en el capítulo para que almacene el valor de un mesdatos utilizando una matriz bidimensional.
//Cree funciones para mostrar el promedio mensualedad, promedio de una semana específica y promedios de todas las semanas .

function weekTemps() {
    this.dataStore = [
        [],
        [],
        [],
        []
    ]
    this.add = addTemp;
    this.averageMensual = averageTempMensual;
    this.averagePorSemana = averageTempPorSemana;
    this.averageSemanaEspecifica = averageTempSemana
}

function addTemp(semana, temperaturaDiaria) {
    this.dataStore[semana - 1].push(
        temperaturaDiaria
    )
}

function averageTempMensual() {

    let totalTempMes = 0;
    let totalDiasMes = 0;

    this.dataStore.forEach(week => {
        totalDiasMes += week.length;
        totalTempMes += week.reduce((acu, act) => acu + act)
    })

    console.log('Promedio Temperatura Mensual:', totalTempMes / totalDiasMes, 'Grados');

}

function averageTempPorSemana() {
    let totalTempSemana = 0;
    let totalDiasSemana = 0;

    this.dataStore.forEach((week, indice) => {
        totalDiasSemana += week.length;
        totalTempSemana += week.reduce((acu, act) => acu + act)
        console.log('Semana:', indice + 1, 'temperatura promedio:', totalTempSemana / totalDiasSemana);
        totalDiasSemana = 0;
        totalTempSemana = 0;
    })
}

function averageTempSemana(semana) {

    let totalTempSemana = 0;
    let totalDiasSemana = 0;

    if (semana > 0 && semana <= this.dataStore.length) {
        this.dataStore[semana - 1].forEach(week => {
            totalTempSemana += week
            totalDiasSemana++
        })
        console.log('Promedio Temperatura en la semana:', semana, totalTempSemana / totalDiasSemana, 'Grados');
    } else {
        console.log('La semana indicada no esta en base de datos');
    }


}

let thisWeek = new weekTemps()
thisWeek.add(1, 80)
thisWeek.add(1, 85)
thisWeek.add(1, 90)
thisWeek.add(1, 95)

thisWeek.add(2, 60)
thisWeek.add(2, 65)
thisWeek.add(2, 70)
thisWeek.add(2, 75)

thisWeek.add(3, 60)
thisWeek.add(3, 70)
thisWeek.add(3, 80)
thisWeek.add(3, 90)

thisWeek.add(4, 60)
thisWeek.add(4, 170)
thisWeek.add(4, 180)
thisWeek.add(4, 190)

thisWeek.averageMensual()
thisWeek.averagePorSemana()
thisWeek.averageSemanaEspecifica(1)

//4.Cree un objeto que almacene letras individuales en una matriz y tenga una función paramostrando las letras como una sola palabra