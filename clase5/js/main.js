//Objetos
const bebida1 = {id: 1, nombre: "Coca Cola", litros: 2.25, precio: 950};

let idBebida = 2;
let nombreBebida = "Pepsi";
let litrosBebida = 1.5;
let precioBebida = 750;
const bebida2 = {id: idBebida, nombre: nombreBebida, litros: litrosBebida, precio: precioBebida};

console.log(bebida1);

alert("Nombre de la bebida: " + bebida2.nombre);
alert("Precio: " + bebida2["precio"]);

//Modificar y/o agregar propiedades a un objeto
bebida2.precio = 1000;
bebida2.delivery = true;

console.log(bebida2);

//Plantilla literal
alert(`Voy a tomar ${bebida2.nombre} a un precio de ${bebida2.precio}`);

//Constructores
function Bebida(id, nombre, litros, precio) {
    this.id = id;
    this.nombre = nombre;
    this.litros = litros;
    this.precio = precio;
}

let bebida3 = new Bebida(3, "Manaos", 2, 1000);
console.log(bebida3);

bebida3.esFeo = true;
console.log(bebida3);


function Bebida(bebida) {
    this.id = bebida.id;
    this.nombre = bebida.nombre;
    this.litros = bebida.litros;
    this.precio = bebida.precio;
}

console.log(bebida3); //bebida3 queda undefined por el nuevo constructor de Bebida que redefine las propiedades id, nombre, litros y precio. Solo queda definida la propiedad esFeo de antes


let bebida4 = new Bebida(bebida1);

console.log(bebida4);

function Bebedor(nombreBebedor, dniBebedor, bebida) {
    this.nombre = nombreBebedor;
    this.dni = dniBebedor;
    this.bebida = bebida;
}

const marioBebedor = new Bebedor("Mario", "22.706.194", bebida4);

console.log(marioBebedor);

//Metodos
function Borracho(nombre, edad, litrosPorDia) {
    this.nombre = nombre;
    this.edad =  edad;
    this.litrosPorDia = litrosPorDia;
    this.esperanzaDeVida = function() {
        let esperanza = this.edad - this.litrosPorDia;
        return esperanza;
    }
    this.deberiaPreocuparme = () => {
        let alHorno = true;

        if (this.litrosPorDia <= 5) {
            alHorno = false;
        }

        return alHorno;
    }
}

const raul = new Borracho("Raul", 45, 50);
console.log("Esperanza de Raul: " + raul.esperanzaDeVida());

//in
console.log("litrosPorDia" in raul);

//for in (recorre todos los nombres de las propiedades)
for (let clave in raul) {
    console.log(clave + " : " + raul[clave]);
}

//Clases
class Mago {
    constructor (id, nombre, mejorTruco) {
        this.id = id;
        this.nombre = nombre;
        this.mejorTruco = mejorTruco;
    }

    //Metodo
    hacerTruco(palabraMagica) {
        let discurso = "Hola. Soy el gran mago ";
        discurso += this.nombre;
        discurso += " " + palabraMagica;

        return discurso;
    }

}

const cacarulo = new Mago(1, "Cacarulo", "Sacar conejos del ano");

console.log(cacarulo);

alert(cacarulo.hacerTruco("ABRACADABRA"));
