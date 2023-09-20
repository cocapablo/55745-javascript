//Local Storage quedan almacenadas en el navegador hasta que se elimine el cache
localStorage.setItem("nombre", "Pablo Andrés Coca");
localStorage.setItem("eMail", "cocapablo@gmail.com");
localStorage.setItem("edad", "51");

//Session Storage se borran al cerrar sesion o cuando cierro el navegador
sessionStorage.setItem("nombre", "Pablo Andrés Coca");
sessionStorage.setItem("eMail", "cocapablo@gmail.com");
sessionStorage.setItem("edad", "51");

//Accedo a la localStorage
let nombre = localStorage.getItem("nombre"); //Siempre devuelve un string
let eMail = localStorage.getItem("eMail");
let edad = parseInt(localStorage.getItem("edad"));

div = document.getElementById("contenido");
div.innerHTML = "Nombre: " + nombre + "<br>eMail: " + eMail + "<br>Edad: " + edad;

//Recorriendo localStorage
for(let i = 0; i < localStorage.length; ++i) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log("Clave : " + clave + "\nValor : " + valor + "\n\n");
}

// Eliminando una o todas las  local Storage
localStorage.removeItem("nombre"); //elimina solo el nombre
for(let i = 0; i < localStorage.length; ++i) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log("Clave : " + clave + "\nValor : " + valor + "\n\n");
}

localStorage.clear(); //Elimina todas
for(let i = 0; i < localStorage.length; ++i) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(`Clave : ${clave}\nValor : ${valor}\n\n`);
}

//Que pasa cuando guardamos un objeto o un array en localStorage
let gaseosa = {id: 1, nombre : "Coca Cola", precio : 500};
let gaseosas = [
    {id: 1, nombre : "Coca Cola", precio : 500},
    {id: 2, nombre : "Pepsi Cola", precio : 400}
];

//JSON
localStorage.setItem("gaseosa", JSON.stringify(gaseosa));
//Array
localStorage.setItem("gaseosas", JSON.stringify(gaseosas));

//Lo leo
//Convertir el contenido en formato JSON a su valor original
let valorGaseosa = JSON.parse(localStorage.getItem("gaseosa"));
console.log("ID Gaseosa: " + valorGaseosa.id  + "\nNombre: " + valorGaseosa.nombre + "\n");

//Ejemplo aplicado
let gaseosasLista = [
    {id: 1, nombre : "Coca Cola", precio : 500},
    {id: 2, nombre : "Pepsi Cola", precio : 400},
    {id: 3, nombre : "Manaos", precio : 200},
    {id: 4, nombre : "Crush", precio : 100}
];

const guardarLocalStorage = (clave, objeto) => {
    localStorage.setItem(clave, JSON.stringify(objeto));
}

const cargarLocalStorage = (clave) => {
    return JSON.parse(localStorage.getItem(clave));
}

guardarLocalStorage("listaGaseosas", gaseosasLista);

class Producto {
    constructor(gaseosa) {
        this.nombre = gaseosa.nombre.toUpperCase();
        this.precio = parseFloat(gaseosa.precio);
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21
        return this.precio;
    }
}

const productosAlmacenados = cargarLocalStorage("listaGaseosas");

const productos = [];

for (const pa of productosAlmacenados) {
    let prod = new Producto(pa);
    productos.push(prod);
    
}

let mensajeHTML = ""
for (const pro of productos) {
    pro.aplicarIVA();    
    console.log("Producto : " + pro.nombre + " - " + "Precio con IVA : " + pro.precio);
    mensajeHTML += "Producto : " + pro.nombre + " - " + "Precio con IVA : " + pro.precio + "<br>";
}

let divProductos = document.getElementById("contenido2");
divProductos.innerHTML = mensajeHTML;

//Falta el último ejemplo con Bootstrap, formularios, etc


