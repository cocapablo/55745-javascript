//Funciones
/*
function saludar() {
    console.log("Hola que tal");
}

saludar();


//Otro ejemplo
function solicitarNombre() {
    let nombre = prompt("Ingresa tu nombre chaval");
    alert("Hola genial " + nombre);
    saludar();
}

solicitarNombre();

*/

//Parametros
/*
function holaNombre(nombre) {
    alert("Hola genial " + nombre);
}

let nombre = prompt("Ingresa tu nombre chaval");
holaNombre(nombre);
*/

/*
//Nombre Completo
function nombreCompleto(nombre1, nombre2, apellido) {
    alert(`Hola genial ${nombre1} ${nombre2} ${apellido}`);
}

let nombre1 = prompt("Ingrese su primer nombre");
let nombre2 = prompt("Ingrese su segundo nombre");
let apellido = prompt("Ahora ingrese su apellido");

nombreCompleto(nombre1, nombre2, apellido);

//return
function sumar(valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado;
}

let suma = sumar(2, 3);
alert("el resultado de la suma es " + suma);

//Otro
function aplicarDescuento(importe) {
    let importeIVA = importe * 1.21;
    let descuento = importeIVA;

    if (importeIVA > 15000) {
        //10% de descuento
        descuento = importeIVA * 0.9;
    }

    return descuento;
}

let consumo = parseFloat(prompt("Ingrese el importe de su compra"));
let consumoFinal = aplicarDescuento(consumo);

alert("Su gasto final es de: " + consumoFinal);
*/

//Calculadora
/*
function calculadora(valor1, valor2, operacion) {
    let resultado;

    switch(operacion) {
        case "+" :
            resultado = valor1 + valor2;
            break;
        case "-" :
            resultado = valor1 - valor2;
            break;
        case "*" :
            resultado = valor1 * valor2;
            break;
        case "/" :
            resultado = valor1 / valor2;
            break;
        default:
            resultado = 0;
    }

    return resultado;
}


let valor1 = parseFloat(prompt("Ingrese el primer valor"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor"));
let operacion = prompt("Ahora ingrese la operación a realizar");

let resultado = calculadora(valor1, valor2, operacion);

alert("El resultado de la operación es: " + resultado);
*/

//Variables globales
let valor = 1000;

function sumar(numero) {
    valor += numero;
    
}

sumar(300);
alert("El valor ahora es " + valor);

//Variables locales
valor = 5000;

function sumarLocal(numero) {
    let valor = 1000; //Valor acá es local
    valor += numero;
    return valor;
}

let resultadoFinal = sumarLocal(3000);
alert("El valor es " + resultadoFinal);

//Variables que apuntan a funciones
let miFuncion = sumarLocal;
resultadoFinal = miFuncion(5000);
alert("El valor es " + resultadoFinal);

//Funciones anonimas
//Es una buena practica en funciones anonimas usar const en vez de let
const miFuncion2 = function(valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado;
}

resultadoFinal = miFuncion2(100, 300);
alert("El valor en funciones anonimas es " + resultadoFinal);

//Funciones flecha
const miFuncion3 = (valor1, valor2) => {
    let resultado;
    resultado = valor1 + valor2;
    return resultado;
}

resultadoFinal = miFuncion3(1100, 300);
alert("El valor en funciones flecha es " + resultadoFinal);

