alert("Hola a todos");

//Comentarios de linea
/* Comentarios de varias
lineas */

let valor1 = 10; //Esto es un Number entero
let valor3 = 50.75; //Esto es un valor Number con decimales
let valor2 = "Nahuel"; //Esto es un string
let unaVariable;
unaVariable = "Laura no está";
const DOLAR = (605 *2) + 25;

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(DOLAR);

valor1 = 20;
valor2 = "Pablo";
//const DOLAR = 605;


console.log("valor1 = " + valor1);
console.log(valor2);
console.log(DOLAR);

//Suma
let resultadoSuma = valor1 + valor3;
console.log("Suma = " + resultadoSuma);

//Resta
let resultadoResta = valor1 - valor3;
console.log("Resta = " + resultadoResta);

//Multiplicación
let resultadoMultiplicacion = valor1 * valor3;
console.log("Multiplicación = " + resultadoMultiplicacion);

//División
let resultadoDivision = valor1 / valor3;
console.log("División = " + resultadoDivision);

//Operacion básicas con Strings
let textoA = "Curso";
let textoB = "JavaScript";
let espacio = " ";

alert(textoA + espacio + textoB);
console.log(textoA + espacio + textoB + espacio + 10000);

//Prompt
let sedad = prompt("Ingrese su edad"); //Los prompts devuelven strings
let edad = parseInt(sedad); //Convierto a int

console.log("Edad = " + edad);

let speso = prompt("Ingrese su peso"); //Los prompts devuelven strings
let peso = parseFloat(speso) * 1.5; //Convierto a float

console.log("Peso = " + peso);

//Masa corporal
let altura = parseFloat(prompt("Ingrese su altura"));
peso = parseFloat(prompt("Ahora ingrese su peso"));
let IMC = peso / (altura * altura);
alert("Su masa corporal es: " + IMC);
console.log("Su masa corporal es: " + IMC);
