//DOM
console.log("Head: " + document.head)
console.log("Body: " + document.body);

console.log(document.body.children[1].innerHTML);
document.body.children[1].innerHTML = "Malvenidos ahora";

//Acceso a los elementos del DOM

//getElementbyid trae un solo elemento
let elemento = document.getElementById("hijo1");
elemento.innerHTML = "<b> Desgraciados </b>";

//getElementbyClassName trae un array de elementos
let elementosRojos = document.getElementsByClassName("colorRojo");
let contadorElementos = 0;

for (const eRojo of elementosRojos) {
    ++contadorElementos;
    console.log(`Elemento Rojo ${contadorElementos} : ${eRojo}`);
    console.log(eRojo.innerHTML);
    eRojo.innerHTML = "Soy del Rojo";    
} 

let listaPaises = document.getElementsByClassName("pais");
contadorElementos = 0;

for (const ePais of listaPaises) {
    ++contadorElementos;
    console.log(`País ${contadorElementos} : ${ePais}`);
    console.log(ePais.innerHTML);
       
} 


//getElementsByTagName => trae elementos por nombre de etiqueta
let paisesTodos = document.getElementsByTagName("li");
contadorElementos = 0;

for (const ePais of paisesTodos) {
    ++contadorElementos;
    console.log(`País ${contadorElementos} : ${ePais}`);
    console.log(ePais.innerHTML);   
}


//innerText y innerHTML
//innerText te nuestra todo como texto plano. innerHTML como HTML
console.log("InnerText : " + document.body.innerText);
console.log("InnerHTML : " + document.body.innerHTML);

//Messi
let parrafoMessi = document.getElementById("parrafo");

parrafoMessi.innerText = "<img src='https://media.gettyimages.com/id/1347638555/es/foto/lionel-messi-of-paris-saint-germain-celebrates-after-scoring-their-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=DTMRKllsfB6GKaRa5fHNUaQIbgVoTtIt76_ERHvm20Y='>";
parrafoMessi.innerHTML = "<img src='https://media.gettyimages.com/id/1347638555/es/foto/lionel-messi-of-paris-saint-germain-celebrates-after-scoring-their-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=DTMRKllsfB6GKaRa5fHNUaQIbgVoTtIt76_ERHvm20Y=' alt='Lionel Messi' width=480>";

//className : le cambio la clase
parrafoMessi.className = "img-thumbnail";
console.log("Parrafo : " + parrafoMessi);

//Seguir con el resto de la clase desde acá porque me perdí con Bootstrap
//Falta agregar y sacar nodos, leer inputs y modificarlos
let nuevaImagen = document.createElement("p");
nuevaImagen.className = "img-thumbnail";
nuevaImagen.innerHTML = "<img src='https://media.gettyimages.com/id/1347638555/es/foto/lionel-messi-of-paris-saint-germain-celebrates-after-scoring-their-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=DTMRKllsfB6GKaRa5fHNUaQIbgVoTtIt76_ERHvm20Y=' alt='Lionel Messi' width=480>"

let divContenido = document.getElementById("contenido");
divContenido.appendChild(nuevaImagen);

console.log("Voy a borrar el ùltimo Messi");

nuevaImagen.remove();

//Formularios
//Accediendo valores de un campo
let campoEmail = document.getElementById("email");
if (campoEmail.value.includes("@") == false) {
    document.getElementById("emailHelp").innerHTML = "Debe ingresar un mail valido chambonazo";
    document.getElementById("emailHelp").className = "text-danger";    
}



