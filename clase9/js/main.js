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

let eMail = campoEmail.value;
console.log("Tu eMail es :" + eMail);

//Render de Productos
const productos = [
    {id: 1, nombre: "Gaseosa cola zero Coca Cola pet 2.25 lts", precio: 759, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/320545-170-170?v=1781043717&width=170&height=170&aspect=true" },
    {id: 2, nombre: "Gaseosa 7 Up lima limón 1.5 l.", precio: 323, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/277290-170-170?v=1781043856&width=170&height=170&aspect=true" },
    {id: 3, nombre: "Gaseosa Crush sin azúcar lima-limón 2.25 l", precio: 305, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/302007-170-170?v=1781043722&width=170&height=170&aspect=true" },
    {id: 4, nombre: "Gaseosa Crush sin azúcar naranja 2.25 l.", precio: 305, imagen: "https://carrefourar.vtexassets.com/arquivos/ids/302009-170-170?v=1781045754&width=170&height=170&aspect=true" }

];

console.log("Productos: " + productos);




