//Función de orden superior
//Una función que devuelve una función

function mayorque(valor) {
    return (m) => m > valor; // DEvuelve una función
}

let mayorQue5 = mayorque(5); 

console.log(mayorQue5(10)); //true
console.log(mayorQue5(3)); //false

//Asignar operacion
function asignarOperacion(operacion) {
    if (operacion == "SUMA") {
        return (a, b) => a + b;
    }
    else if (operacion == "RESTA") {
        return (a, b) => a - b;
    }
    else if (operacion == "MULTIPLICACION") {
        return (a, b) => a * b;
    }
    else if (operacion == "DIVISION") {
        return (a, b) => a / b;
    }

    return (a, b) => a + b; // default suma
}

let sumar = asignarOperacion("SUMA");
let restar = asignarOperacion("RESTA");
let multiplicar = asignarOperacion("MULTIPLICACION");
let dividir = asignarOperacion("DIVISION");

console.log(sumar(10 + 10));
console.log(restar(7, 6));
console.log(multiplicar(4, 5));
console.log(dividir(10, 2));

//Funcion como parámetro
function porCadaUno(arrayMio, funcionMia) {
    for (const elemento of arrayMio) {
        funcionMia(elemento);
        
    }
}

const numeros = [1, 2, 4, 69, 78];

porCadaUno(numeros, console.log);
porCadaUno(numeros, alert);

//Creo yo una función
let total = 0;

function sumarATotal(numero) {
    total += numero;
}

porCadaUno(numeros, sumarATotal);

console.log("Total: " + total);
alert("Total : " + total);

total = 0;
//Pasar una función flecha como parámetro
porCadaUno(numeros, (x) => total += x);

console.log("Total: " + total);
alert("Total : " + total);

//Funciones de arrays
//foreach
total = 0;
numeros.forEach(sumarATotal);
console.log("Total: " + total);
alert("Total : " + total);

numeros.forEach((item) => console.log("Item : " + item + " Doble: " + item * 2));

//Find : devuelve el primer elemento que cumple la condiciòn de la función
let primerPar = numeros.find((x) => + x % 2 == 0);
console.log("Primer par: " + primerPar);
alert("Primer par : " + primerPar);

//Filter devuelve un nuevo array con todos los que cumplen la condicion
let pares = numeros.filter((x) => + x % 2 == 0);
for (const par of pares) {
    console.log(par);
    alert(par);    
}

//some : devuelve true si encuentra al menos un elemento que cumple la condición
let existeImpar = numeros.some((x) => x % 2 > 0);
console.log("Hay impar: " + existeImpar);

//map: Crea un nuevo array con modicicaciones a los elementos
let dobles = numeros.map((x) => x * 2);
for (const doble of dobles) {
    console.log(doble);
    alert(doble);    
}

//reduce : ejecuta una función en todos los elementos de un array y devuelve un único valor
const total2 = numeros.reduce((acumulador, item) => acumulador + item, 0);
console.log("Total: " + total2);
alert("Total: " + total2);

//sort : sirve para ordenar los elementos de un array
numeros.sort((a, b) => a - b); //Orden ascendente
for (const item of numeros) {
    console.log(item);
    alert(item);    
}

numeros.sort((a, b) => b - a); //Orden descendente
for (const item of numeros) {
    console.log(item);
    alert(item);    
}

//lo mismo pero explicado : Orden ascendente
numeros.sort((item1, item2) => {
    let resultado;
    if (item1 > item2) {
        resultado = 1; //al devolver >0 siginifica que item1 > item2
    }
    else if (item1 < item2) {
        resultado = -1; //negativo es que item1 es menor que item 2
    }
    else {
        resultado = 0; //son iguales
    }

    return resultado;
});

for (const item of numeros) {
    console.log(item);
    alert(item);    
}