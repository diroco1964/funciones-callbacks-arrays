// ------------------------------------------Ejercicio 01 – FUNCIONES Y ARRAYS ------------------------
//----------------------------------------------------------------
//1)Crear una función que reciba dos parámetros y retorne un valor.

function restar(num1,num2){
    return num1-num2
};
let resultado= restar(6,7);
console.log(`Ejercicio 1: ${resultado}`);

//----------------------------------------------------------------
//2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el 
// lado del cuadrado, calcule el área y la retorne.

function areaCuadrado (lado){
    return lado*2
}
console.log(`Ejercicio 2: ${areaCuadrado(14)}`);

//----------------------------------------------------------------
//3) Crear una función por declaración, puede hacer lo que quieras.

function calcularPorcionesPizza (personas){
    return `Para ${personas} personas necesitas ${personas * 2} porciones`;
}
console.log(`Ejercicio 3: ${calcularPorcionesPizza(8)}`);

//----------------------------------------------------------------
//4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
// es un array de números y retorna la suma del total de los números (utilizar foreach para
// recorrer el array)

let numeros = [10, 20, 30, 40];
const autosuma = function (numeros){
   let resultado=0;
   numeros.forEach(element => {
    resultado=element+resultado
   });
   return resultado;
};
console.log(`Ejercicio 4: ${autosuma(numeros)}`);

//----------------------------------------------------------------
//5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
// retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años”

const tuEdad=(nombre,añoNacimiento)=>{
    const edad= 2026-añoNacimiento;
    return `Hola ${nombre} este año tienes o cumples ${edad} años`;
}
console.log(`Ejercicio 5: ${tuEdad("Ana",1964)}`);

//----------------------------------------------------------------
//6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
// un nombre, que agregue al alumno en la ultima posición del array

let alumnos = ["Jhon Doe", "Juan Sanchez", "Pepito Perez"];
const inscribirAlumno= function (alumnos,nuevoAlumno){
    alumnos.push(nuevoAlumno)
    return alumnos
}
console.log(`Ejercicio 6: ${inscribirAlumno(alumnos,"Mariano Paez")}`);

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





