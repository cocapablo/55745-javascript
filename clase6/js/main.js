//Arrays
const nombres = ["Pablo", "Pedro", "Josefo"];
console.log(nombres, nombres.length);

//Posición 2
console.log("Posición 2: " + nombres[2]);

let nombre2 = nombres[1].toUpperCase();
console.log(nombre2);

nombres[2] = "Roberto Carlos";
console.log("Posición 2 ahora: " + nombres[2]);

//Recorrer el array
for (let i = 0; i < nombres.length; ++i) {
    alert("Nombre " + i + " : " + nombres[i]);
}

//con forof
for (const item of nombres) {
    alert("Nombre " + nombres.indexOf(item) + " : " + item); 
}

//Metodos de Arrays
//PUSH : Agrega un elemento al final del array
nombres.push("Messi");
for (const item of nombres) {
    alert("Nombre " + nombres.indexOf(item) + " : " + item); 
}

//Agrega igual!!
nombres[nombres.length] = "Anita";
for (const item of nombres) {
    alert("Nombre " + nombres.indexOf(item) + " : " + item); 
}

//Unshift : Agrega un elemento al comienzo del array
nombres.unshift("Ronaldo");
for (const item of nombres) {
    alert("Nombre " + nombres.indexOf(item) + " : " + item); 
}

//Pop : Quita el ùltimo elemento del array y lo devuelve
let ultimoNombre = nombres.pop();
alert(ultimoNombre);

//Shift : Quita el primer elemento del array y lo devuelve
let primerNombre = nombres.shift();
alert(primerNombre);

//Splice: elimina n cantidad de elementos desde una posición
nombres.splice(1,2);
for (const item of nombres) {
    alert("Nombre " + nombres.indexOf(item) + " : " + item); 
}

//Join : Concatena los elementos como un String y los separa con un caracter dado
let nombresTodos = nombres.join(" - ");
alert("Lista de nombres : " + nombresTodos);

//Concat: concatena 2 arrays y devuelve un nuevo array resultante
const nombresBis = ["Pulga", "Belcebu", "Rogelio Roldàn"]
const dobleNombres = nombres.concat(nombresBis);
for (const item of dobleNombres) {
    alert("Nombre " + dobleNombres.indexOf(item) + " : " + item); 
}

//Slice: Crea un nuevo Array con un cacho de otro Array . Se para en el primer parametro
const cachoArray = dobleNombres.slice(1, 4);
for (const item of cachoArray) {
    alert("Nombre " + cachoArray.indexOf(item) + " : " + item); 
}

//Indexof : Devuelve la posiciòn del nombre a buscar
let indice = dobleNombres.indexOf(prompt("Ingrese un nombre a buscar"));
if (indice >=0) {
    alert("Posicion es " + indice);
}
else {
    alert("Nombre no encontrado");
}

//includes : true si lo encuentra, false si no
let esta = dobleNombres.includes(prompt("Ingrese un nombre a buscar"));
if (esta == true) {
    alert("Nombre encontrado");
}
else {
    alert("Nombre no encontrado");
}

//Reverse : invierte el orden de los elementos del array
dobleNombres.reverse();
console.log(dobleNombres);

//Ejemplo
const cantidadInsultos =  5;
const insultos = [];
let insulto;

do {
    insulto = prompt("Ingrese un insulto");
    insultos.push(insulto);
} while (insultos.length < cantidadInsultos);

//Agrego 2 insultos 
const masInsultos = insultos.concat("Puto", "Horrendo");

let puteada = masInsultos.join(" y ");
alert(puteada);

//Array de Objetos
class gaseosas {
    constructor(nombre, litros, precio) {
        this.nombre = nombre;
        this.litros = litros;
        this.precio = precio;
    }

    getDescripcion() {
        let descripcion = "";

        descripcion = this.nombre + " - " + this.litros + " - " + this.precio.toFixed(2);

        return descripcion;
    }
}

const bebidas = [];

bebidas.push(new gaseosas("Coca Cola", 10, 100.50));
bebidas.push({nombre : "Pepsi", litros : 8, precio : 300});

for (const gaseosa of bebidas) {
    console.log("Nombre : " + gaseosa.nombre + " - Litros : " + gaseosa.litros + " - Precio : " + gaseosa.precio.toFixed(2) + "\n");
}
