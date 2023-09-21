//Sugar syntax
let x = 10;

console.log("Valor original: " + x);

x += 1;
console.log("Valor x += 1: " + x);

//Sugar syntax
x++;
console.log("Valor x++: " + x);

//Operador ternario
let precio = 500;

precio > 800 ? alert("El precio se fué al coño") : alert("Está en precio aún");

//elseif
precio > 800 ? alert("El precio se fué al coño") : precio > 600 ? alert("El precio está entre 600 y 800") : alert("El precio está barato");

const persona = {
    nombre : "Pablo Coca",
    edad : 15
};


let meporteMal = false;

/*
if (persona.edad >= 18) {
    meporteMal = true;
}
else {
    meporteMal = false;
}
*/

//Con ternario
meporteMal = (persona.edad >=18) ? true : false; //el ? tiene un return impícito

if (meporteMal) {
    alert(persona.nombre + " serás castigado pecador");
}
else {
    alert(persona.nombre + " serás bendecido");
}

//O
alert(persona.nombre + ((persona.edad >= 18) ? " serás castigado pecador" : " serás bendecido"));

//Operador && : se ejecuta operador 2 solo si operador 1 es true
let mensaje = persona.edad >= 18 && "Mayor de edad";
console.log(mensaje);

//Operador ||
//Si no es falsy retorna operador 1, sino retorna operador 2
console.log(0 || "Error");
console.log("" || "Error");
console.log(-20 || "Error");
console.log(NaN || "Error");
console.log("Hola a todos" || "Error");
console.log(null || "Error");
console.log(undefined || "Error");
console.log(false || "Error");
console.log("false" || "Error");
console.log(true || "Error");
console.log("true" || "Error");

let persona1 = {
    nombre : "Pablo Coca",
    sueldo : 3000
}

let persona2 = null;

console.log("Resultado persona1: " + (persona1 || "No existe"));
console.log("Resultado persona2: " + (persona2 || "No existe"));

//Otro ejemplo
let carrito;

let carritoenLS = JSON.parse(localStorage.getItem("carrito"));

if (carritoenLS) {
    carrito = carritoenLS;
}
else {
    carrito = [];
}

console.log(carrito);

localStorage.setItem("carrito", JSON.stringify([1, 2, 3]));

if (carritoenLS) {
    carrito = carritoenLS;
}
else {
    carrito = [];
}

console.log(carrito);

//Versiòn simplificada con ||
carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log("Versión con OR :" + carrito);

//Versiòn simplificada con ?
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
console.log("Versión con OR :" + carrito);

//Operador Nullish ??
console.log(0 ?? "Error");
console.log("" ?? "Error");
console.log(-20 ?? "Error");
console.log(NaN ?? "Error");
console.log("Hola a todos" ?? "Error");
console.log(null ?? "Error");
console.log(undefined ?? "Error");
console.log(false ?? "Error");
console.log("false" ?? "Error");
console.log(true ?? "Error");
console.log("true" ?? "Error");

//Acceso condicional con ? (chequea si es null primero y ejecuta la sentencia si no es null)
persona1 = {
    nombre : "Pablo",
    edad : 34
}

persona2 = null;

console.log("Resultados persona1: " + persona1?.nombre);
console.log("Resultados persona2: " + persona2?.nombre);

//Desestructuracion
let persona4 = {
    nombre : "Pablo Coca",
    edad : 34,
    ciudad : "CABA",
    padres : 2
};

let {nombre, edad, padres} = persona4;

console.log("Nombre : " + nombre + " - Edad : " + edad + " Padres : " + padres);

//Desestructuracion anidada
let persona5 = {
    nombre2 : "Pablo Coca",
    edad2 : 51,
    novia : {
        nombreNovia : "Rula",
        virtud : "Gauchita"
    }
}

let {nombre2, edad2, novia:{virtud} } = persona5;

console.log("Nombre : " + nombre2 + " - Edad : " + edad2 + " Virtud novia : " + virtud);

//Alias
let {nombre2 : nm, edad2 : ed, novia:{virtud : vir}} = persona5;

console.log("Nombre : " + nm + " - Edad : " + ed + " Virtud novia : " + vir);

//Desesctructurar un objeto como parámetro
const desestructurador = ({nombre2 : nom2, edad2 : ed2, novia:{virtud:vir2}}) => {
    console.log("Nombre : " + nom2 + " - Edad : " + ed2 + " Virtud novia : " + vir2);    
}

desestructurador(persona5);

//desestructuro un evento
window.addEventListener("click", ({x, y}) => {
    console.log("X : " + x + " - Y : " + y);
});

//Desestructarando Arrays
const nombres = ["Pablo", "Rogelio", "Martin", "Abdulio"];

const [n1, n2, n3] = nombres;

console.log("Nombre 1 : " + n1 + " Nombre 2 : " + n2
 + " Nombre 3 : " + n3);

 //Accediendo a posiciones intermedias
 const [, n4, , n5] = nombres;
 console.log("Nombre 1 : " + n1 + " Nombre 2 : " + n2
 + " Nombre 3 : " + n3 + " Nombre 4 : " + n4 + " Nombre 5 : " + n5);