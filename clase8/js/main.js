//Objeto Math
console.log("Pi: " + Math.PI);
alert("Pi: " + Math.PI);

//Max y min
const numeros = [10, 76, 1, 178, 343];

console.log("Máximo : " + Math.max(10, 76, 1, 178, 343));
console.log("Mínimo : " + Math.min(10, 76, 1, 178, 343));

//Ceil, Floor y Round
console.log("Ceil : " + Math.ceil(6.6));
console.log("Floor : " + Math.floor(6.6));
console.log("Round : " + Math.round(6.6));


//Square root (Raíz cuadrada) y cbrt (raíz cúbica)
console.log("Raíz cuadrada de 16: " + Math.sqrt(16));
console.log("Raís cúbica de 125: " + Math.cbrt(125));


//Random
let numero = 10;
console.log("Número aleatorio entre 0 y " + numero + " : " + Math.round(Math.random() * numero));

//Clase Date
let fecha = new Date();
console.log("Fecha : " + fecha);

fecha = new Date(1972, 2, 25);
console.log("Nací el : " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());

let navidad = new Date("December 25, 2023");
let ahora = new Date();

const milisegundosPorDia = 60 * 60 * 24 * 1000;
let diasParaNavidad = navidad - ahora;
diasParaNavidad = diasParaNavidad / milisegundosPorDia;
diasParaNavidad = Math.floor(diasParaNavidad);

console.log("Faltan " + diasParaNavidad + " días para Navidad");

function diasParaElVerano(fechaDesde) {
    const fechaVerano = new Date(2023, 11, 21);
    let diasParaElVerano = fechaVerano - fechaDesde;
    diasParaElVerano = diasParaElVerano / milisegundosPorDia;
    diasParaElVerano = Math.floor(diasParaElVerano);

    return diasParaElVerano

}

let faltanParaElVerano = 0;

faltanParaElVerano = diasParaElVerano(ahora);
console.log("Faltan " + faltanParaElVerano + " días para el verano");

//DOM
let contenido = document.getElementById("contenido");
let textoCronica = "FALTAN " + faltanParaElVerano + "<br> DÍAS PARA <br> EL VERANO";
contenido.innerHTML = textoCronica;

