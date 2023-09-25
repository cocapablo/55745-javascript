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
//Acá va eso mismo
const calcularSueldo = () => {
    let nombre = document.getElementById("nombre");
    let nombreError = document.getElementById("nombreError");
    let sueldoBruto = document.getElementById("sueldoBruto");
    let sueldoBrutoError = document.getElementById("sueldoBrutoError");

    if (nombre.value.trim().length == 0) {
        nombreError.innerHTML = "Complete el campo Nombre";
        nombreError.className = "text-danger";
        return false;
    }
    else {
        nombreError.innerHTML = "";
    }

    if (sueldoBruto.value.trim().length == 0) {
        sueldoBrutoError.innerHTML = "Complete el campo Sueldo Bruto";
        sueldoBrutoError.className = "text-danger";
        return false;
    }
    else {
        sueldoBrutoError.innerHTML = "";
    }

    let valorSueldoBruto = parseFloat(sueldoBruto.value);
    

    if (valorSueldoBruto < 0) {
        sueldoBrutoError.innerHTML = "Debe ingresar un valor numérico positivo";
        sueldoBrutoError.className = "text-danger";
        return false;
    }
    else {
        sueldoBrutoError.innerHTML = "";
    }

    const datosUsuario = {
        nombreUsuario : nombre.value,
        sueldoBruto : valorSueldoBruto
    }

    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

    const datosUsuarioLS = JSON.parse(localStorage.getItem("datosUsuario"));

    //Realizo los calculos del sueldo
    let impuestoJubilacion = datosUsuarioLS.sueldoBruto * 0.11;
    let impuestoObraSocial = datosUsuarioLS.sueldoBruto * 0.03;
    let impuestoPami = datosUsuarioLS.sueldoBruto * 0.03;
    let retenciones = impuestoJubilacion + impuestoObraSocial + impuestoPami;
    let sueldoNeto = datosUsuarioLS.sueldoBruto - retenciones;

    let contenidoHTML = `<h3> Calculo de Sueldo Neto </h3>
    <table class="table">
        <tr>
            <td class="bg-primary-subtle">Sueldo Bruto: </td><td class="bg-primary-subtle text-end"><b>$${datosUsuarioLS.sueldoBruto}</b></td>
        </tr>
        <tr>
            <td>Jubilacion (11%): </td><td class="text-end"><b>$${impuestoJubilacion}</b></td>
        </tr>
        <tr>
            <td>Obra Social (3%): </td><td class="text-end"><b>$${impuestoObraSocial}</b></td>
        </tr>
        <tr>
            <td>PAMI (3%): </td><td class="text-end"><b>$${impuestoPami}</b></td>
        </tr>
        <tr>
            <td class="bg-primary-subtle">Sueldo Neto: </td><td class="bg-primary-subtle text-end"><b>$${sueldoNeto}</b></td>
        </tr>
    </t<ble>
    `;

    document.getElementById("resultado").innerHTML = contenidoHTML;


    return true;
}

document.getElementById("btnCalcularSueldo").onclick = calcularSueldo;


