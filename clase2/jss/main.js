//Estructura IF

if (true) {
    alert("Alerta Coders");
    console.log("Hola coders");
    let nombre = prompt("Ingrese su nombre");
    alert("Hola " + nombre);
}

/*
if (false) {
    alert("Esto no se va a ejecutar");
}
*/

//Comparación con ==
var cocacola = 700;

if (cocacola == 700) {
    alert("Vas a poder comprar Coca Cola");
}

if (cocacola == 800) {
    alert("No vas a poder comprar Coca Cola");
}

var edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    alert("Vas a poder embriagarte");
}
else {
    alert("No vas a poder embriagarte");
}

//Validando un prompt
let nombre = prompt("Ingrese su nombre").trim();

if (nombre.length < 2) {
    alert("Debe ingresar un nombre");
}
else {
    alert("Hola " + nombre);
}

if (nombre.includes(" ")) {
    alert("Su nombre incluye espacios vacíos");
}

//else if
let temperatura = parseInt(prompt("Ingrese la temperatura"));

if (temperatura < 5) {
    alert("Esta refrío. Abrigate");
}
else if(temperatura < 15) {
    alert("Está templado. Llevate un buzo");
}
else {
    alert("Está hermoso");
}

//Valores booleanos
let numero = 10;
let besMayor5 = (numero > 5);

if (besMayor5) {
    alert("Es mayor que 5");
}

//Comparaciones
let numero2 = "10";

if (numero2 == 10) { 
    alert("Es igual a 10"); // == compara valor solamente
}

if (numero2 === 10) {
    alert("Es estrictamente igual a 10"); // === compara valor y tipo de datos
}

//distinto
if (numero2 != 20) {
    alert("Es distinto de 20");
}

//estrictamente distinto
if (numero2 != 20) {
    alert("Es estrictamente distinto de 20");
}

//Operadores logicos
//AND &&

if ((numero > 10) && (numero2 > 10)) {
    alert("Se dió la condición");
}

//Operador OR ||
if ((numero > 10) || (numero2 > 10)) {
    alert("Se dió al menos una de las dos condiciones");
}

//Operador NOT !
if (!(numero > 10)) {
    alert("Prueba de NOT - Numero <= 10");
}

let nombrenuevo = prompt("Nuevo nombre ingresa tu");

if (nombrenuevo.toUpperCase == "YANI") {
    alert("Hola Yaniiii. Besis");
    console.log("Geniaaaa Yaniii");
}

//Ejemplo IMC
let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ahora ingrese su altura"));

let IMC = peso / (altura * altura);

if (IMC <= 18.5) {
    alert("Peso inferior al normal");
} else if (IMC > 18.5 && IMC <= 24.5) {
    alert("Normal");
}
else if (IMC > 24.5 && IMC <= 29.9 ) {
    alert("Gordinflon\nAdelgace o muera");
}
else {
    alert("Gordo sin cura\nVaya a una granja");
}




