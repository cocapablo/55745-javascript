//fetch
fetch("https://jsonplaceholder.typicode.com/posts").then(respuesta => respuesta.json()).then(datos => console.log("Datos : " + datos));

function consumirAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenidoHTML = "";

        data.forEach(elemento => {
            contenidoHTML += `<div class="col-md-3 card mb-3">
            <div class="card-body">
              <h5 class="card-title">${elemento.title}</h5>
              <p class="card-text">${elemento.body}.</p>
            </div>
          </div>`;
        });

        document.getElementById("resultado").innerHTML = contenidoHTML;
    })

    }

    function consumirAPIStore() {
        fetch("https://fakestoreapi.com/products")
        .then(respuesta => respuesta.json())
        .then(data => {
            let contenidoHTML = "";
    
            data.forEach(elemento => {
                contenidoHTML += `<div class="card" style="width: 18rem;">
                <img src="${elemento.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${elemento.title}</h5>
                  <p class="card-text">${elemento.description}</p>
                  <p class="card-text">${elemento.category}</p>
                  <p class="card-text">${elemento.price}</p>
                </div>
              </div>`;
            });
    
            document.getElementById("resultado").innerHTML = contenidoHTML;
        })
    
    }

    //consumirAPI();
    //consumirAPIStore();

    function agregarNuevoProducto() {
        let titulo = document.getElementById("titulo").value;    
        let descripcion = document.getElementById("descripcion").value;  
        let precio = document.getElementById("precio").value;  
        let categoria = document.getElementById("categoria").value;  
        let imagen = document.getElementById("imagen").value;  

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: titulo,
                    price: precio,
                    description: descripcion,
                    image: imagen,
                    category: categoria
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    }

    //agregarNuevoProducto();

    //Falta leer un archivo JSON

    //async y await
    async function consumirAPIStoreAsync() {
        let contenidoHTML = "";

        try { 
            const respuesta = await fetch("https://fakestoreapi.com/products");
            const data = await respuesta.json();
            
            contenidoHTML = "";

            data.forEach(elemento => {
                contenidoHTML += `<div class="card" style="width: 18rem;">
                <img src="${elemento.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elemento.title}</h5>
                    <p class="card-text">${elemento.description}</p>
                    <p class="card-text">${elemento.category}</p>
                    <p class="card-text">${elemento.price}</p>
                </div>
                </div>`;
            });

        

        } 
        catch (error) {
            console.log("Error: " + error)
        }
    
        document.getElementById("resultado").innerHTML = contenidoHTML;
        
    
    }


    consumirAPIStoreAsync();
