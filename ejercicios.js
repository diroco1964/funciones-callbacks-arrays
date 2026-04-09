// ------------------------------------------Ejercicio 01 – FUNCIONES Y ARRAYS ------------------------
//----------------------------------------------------------------
//1)Crear una función que reciba dos parámetros y retorne un valor.

function restar(num1, num2) {
    return num1 - num2
};
let resultado = restar(6, 7);
console.log(`Ejercicio 1: ${resultado}`);

//----------------------------------------------------------------
//2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el 
// lado del cuadrado, calcule el área y la retorne.

function areaCuadrado(lado) {
    return lado * 2
}
console.log(`Ejercicio 2: ${areaCuadrado(14)}`);

//----------------------------------------------------------------
//3) Crear una función por declaración, puede hacer lo que quieras.

function calcularPorcionesPizza(personas) {
    return `Para ${personas} personas necesitas ${personas * 2} porciones`;
}
console.log(`Ejercicio 3: ${calcularPorcionesPizza(8)}`);

//----------------------------------------------------------------
//4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
// es un array de números y retorna la suma del total de los números (utilizar foreach para
// recorrer el array)

let numeros = [10, 20, 30, 40];
const autosuma = function (numeros) {
    let resultado = 0;
    numeros.forEach(element => {
        resultado = element + resultado
    });
    return resultado;
};
console.log(`Ejercicio 4: ${autosuma(numeros)}`);

//----------------------------------------------------------------
//5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
// retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”

const tuEdad = (nombre, añoNacimiento) => {
    const edad = 2026 - añoNacimiento;
    return `Hola ${nombre} este año tienes o cumples ${edad} años`;
}
console.log(`Ejercicio 5: ${tuEdad("Ana", 1964)}`);

//----------------------------------------------------------------
//6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
// un nombre, que agregue al alumno en la ultima posición del array

let alumnos = ["Jhon Doe", "Juan Sanchez", "Pepito Perez"];
const inscribirAlumno = function (alumnos, nuevoAlumno) {
    alumnos.push(nuevoAlumno)
    return alumnos
}
console.log(`Ejercicio 6: ${inscribirAlumno(alumnos, "Mariano Paez")}`);

//----------------------------------------------------------------
//7) Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un
// nombre a buscar, y diga si encuentra el nombre en la lista.

let nombreAlumnos = ["Jhon Doe", "Juan Sanchez", "Pepito Perez"];
function buscarAlumno(alumnos, nombreBuscar) {
    let encontrado = false;
    alumnos.forEach(element => {
        if (element === nombreBuscar) {
            encontrado = true;
        }
    });
    return `¿El alumno ${nombreBuscar} está en la lista? ${encontrado}`;
}
console.log(`Ejercicio 7: ${buscarAlumno(nombreAlumnos, "Mariano Paez")}`);

// ------------------------------------------Ejercicio 02 – CALLBACKS ------------------------
//----------------------------------------------------------------
//1) Definir una función que se llame Calculadora, que reciba un array de números, y una callback.
// A) Pasarle por argumento una función arrow que realice la suma de los elemtos del array.
// B) Pasarle por argumento una función arrow que realice la resta de los elementos del array.
// C) Pasarle por argumento una función arrow que realice la multiplicación de los elementos.

let Anumeros = [10, 20, 30, 40];
function calculadora(numeros, callback) {
    return callback(numeros)
}
const sumarFlecha = (numeros) => {
    let resultado = 0;
    numeros.forEach(element => {
        resultado = element + resultado
    });
    return resultado;
}

//Profe esta función la vi despues en el repositorio que ud dejo despues de que no me saliera restar
// con el foreach y ahi vi esta función que si es la que se usa, pero deje la suma anterior porque  
// ya me habia equivocado eligiendo la propiedad correcta. 

const restarFlecha = (numeros) => numeros.reduce((acumulador, numActual) => acumulador - numActual);
const multiplicarFlecha = (numeros) => numeros.reduce((acumulador, numActual) => acumulador * numActual);

console.log(`Ejercicio 1 a: ${calculadora(Anumeros, sumarFlecha)}`);
console.log(`Ejercicio 1 b: ${calculadora(Anumeros, restarFlecha)}`);
console.log(`Ejercicio 1 c: ${calculadora(Anumeros, multiplicarFlecha)}`);

//----------------------------------------------------------------
// 2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
// y un array, la función debe validar si el número es mayor o igual a cero y menor o
// igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso
// contrario debe arrojar un error informando que el número es mayor o menor a lo
// establecido. Debe retornar el array con el resultado.

const numerosAFiltrar = [1, 2, 3, 4, 5, 6, 7]
function agregarSiEstaEntreCeroYDiez(num, numeros) {
    if (num >= 0 && num <= 10) {
        numeros.unshift(num);
        return `Agregado. Nuevo array: [${numeros}]`;
    }
    return `El num ${num} es mayor o menor a lo establecido`;
};
console.log(`Ejercicio 2: ${agregarSiEstaEntreCeroYDiez(11, numerosAFiltrar)}`);
console.log(`Ejercicio 2 B: ${agregarSiEstaEntreCeroYDiez(8, numerosAFiltrar)}`);

//----------------------------------------------------------------
// 3) Definir una función similar a la del punto 2, pero que en vez de un número reciba
// un array con números y valide si cada uno de los elementos cumple con la condición de estar
// entre cero y diez, debe retornar un array con los números que cumplan la función.

const numerosCondicion = [1, 20, 30, 4, 5, 6, 7]
let arrayFiltrado = (numeros) => numeros.filter(element => element >= 0 && element <= 10);
console.log(`Ejercicio 3: Array Filtrado : ${arrayFiltrado(numerosCondicion)}`);

//----------------------------------------------------------------
//4) Momento de creatividad! – Definir una función que reciba tres parámetros, algo, y
// dos callbacks, que internamente las ejecute y realice algún procedimiento.

// Profe aqui me perdi un poco, porque segun lo que vimos el callback seria lo ultimo que ejecute
// es decir que el primer callback es un callaback?? osea lo que entendi es que un callback es 
// uan función que se pasa como parametro. 

function validarContraseña(constraseña, callback1, callback2) {
    if (constraseña.length >= 8) {
        callback1(constraseña.length);
    } else {
        callback2(constraseña.length);
    }
};

function contraseñaValida(longitud) {
    console.log(`Ejercicio 4: Contraseña Valida, es mayor o igual a ${longitud} caracteres`);
};
function contraseñaInvalida(longitud) {
    console.log(` Ejercicio 4:Contraseña invalida solo tienes ${longitud} caracteres debe ser mayor igual a 8`);
};

validarContraseña("admin123", contraseñaValida, contraseñaInvalida);
validarContraseña("c123", contraseñaValida, contraseñaInvalida);

//----------------------------------------------------------------
//5) Realizar una función que se llame validarIngreso, que reciba una edad, y una
//callback. Esta función debe validar por medio de un operador ternario si puede
//intregar o no (la condición es que sea mayor a 18 años). El resultado del operador
//ternario de debe pasar como argumento a la ejecución de la callback. (Podes
//elegir que hacer con la función callback que le vas a pasar por agumento a la
//función validarIngreso)

function validarIngreso (edad,callback){
    let ingresar =  (edad>=18) ? "Puede Ingresar " : "No puede Ingresar";
    callback(ingresar);
};

function dejarPasar(mensaje) {
    console.log(`Ejercicio 5: La Persona x ${mensaje}`);
};

validarIngreso(20, dejarPasar);
validarIngreso(7, dejarPasar);







