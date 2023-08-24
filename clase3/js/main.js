//Ciclo for
//Los ciclos for deben tener al menos tres condiciones

for (let i = 0; i < 100; ++i) {
    console.log(`Te saludo por vez ${i}`);
}

//Ciclo for con inputs 
numero = parseInt(prompt("Ingrese un  número para ver su tabla de multiplicar"));

for (let objetivo = 1; objetivo <= 10; ++objetivo) {
    let resultado = numero * objetivo;

    console.log(`${numero} * ${objetivo} = ${resultado}`);
}

//Sentencia break en el bucle for
//lo que hace break lo que hace es finalizar el bucle
for (let y = 0; y < 100; ++y) {
    if (y === 5) {
        console.log(`Corté en ${y}`);
        break;
    }
}

//sentencia continue
for (let z = 0; z <= 10 ; ++z) {
    if (z === 5) {
        continue;
    }

    console.log(`Item : ${z}`);
}

//Bucle while
let repetir = true;
let contador = 0;
let respuesta = "SI";


while(repetir === true) {
    console.log(`Voy por ${contador}`);
    ++contador;
    if (contador >= 8) {
        repetir = false;
    }
    alert("Usted ingresó " + repetir);
    
}

//do
repetir = true;
do {
    respuesta = prompt("¿Sigo?"); 
    alert("Usted ingresó " + respuesta);
    if (respuesta.trim().toUpperCase() == "NO") {
        repetir = false;
    }
    alert("Repetir :" + repetir );
} while(repetir == true);

alert("fin");

//Switch
let moneda = "ARS";
switch(moneda) {
    case "ARS" :
        console.log("Moneda de Argentina");
        break;
    case "CLP" :
        console.log("Moneda de Chile");
        break;
    default:
        console.log("Sin moneda");


}
