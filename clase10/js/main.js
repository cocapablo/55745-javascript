function Saludar() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Hola a todos y todas </h2>";
}

//Opciòn 1 : addEventListener
let btnSaludar = document.getElementById("btnSaludar");
btnSaludar.addEventListener("click", Saludar);

//Opciòn 2 : Propiedad onclick
btnSaludar.onclick = () => {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Hola a todos y todas carajo</h2>";
};

//Formulario con validaciòn de datos
const validarFormulario = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;   
    let resultado = document.getElementById("resValidar"); 

    console.log("Entre a validarFormulario");

    //Valido campos
    if (email == "") {
        resultado.innerHTML = "Debe ingresar un email";
        resultado.className = "text-danger";
        return;
    }

    console.log("Estoy en password");
    if (password == "") {
        resultado.innerHTML = "Debe ingresar una contraseña";
        resultado.className = "text-danger";
        return;
    }

    console.log("Todo bien");
    //Todo bien
    resultado.innerHTML = "Datos enviados correctamente";
    resultado.className = "text-primary";

    return;
};

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", validarFormulario);

//Formulario con validaciòn de datos submit
const validarFormularioSubmit = (e) => {

    e.preventDefault();

    let email = document.getElementById("email-sub").value;
    let password = document.getElementById("password-sub").value;   
    let resultado = document.getElementById("resValidar-sub"); 
    let formulario = document.getElementById("formulario-sub"); 

    console.log("Entre a validarFormularioSubmit");

    //Valido campos
    if (email == "") {
        resultado.innerHTML = "Debe ingresar un email";
        resultado.className = "text-danger";
        return;
    }

    console.log("Estoy en password submit");
    if (password == "") {
        resultado.innerHTML = "Debe ingresar una contraseña";
        resultado.className = "text-danger";
        return;
    }

    console.log("Todo bien");
    //Todo bien
    resultado.innerHTML = "Datos enviados correctamente";
    resultado.className = "text-primary";

    formulario.submit;

    return;
};

let btnSubmit = document.getElementById("btnEnviar-sub");
btnSubmit.addEventListener("click", validarFormularioSubmit);
