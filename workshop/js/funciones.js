let productos = [
    {id : 1, nombre : "Doble Cuarto de Libra con Queso", calorias : 771, descripcion : "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio : 2500, categoria : "hamburguesas"},
    {id : 2, nombre : "Hamburguesa con Queso", calorias : 289 , descripcion : "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", precio : 2600, categoria : "hamburguesas"},
    {id : 3, nombre : "McNífica", calorias : 513 , descripcion : "En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio : 3000, categoria : "hamburguesas"},
    {id : 4, nombre : "McNuggets 6 unidades", calorias : 238 , descripcion : "Seis piezas del mejor pollo rebozado sólo para vos. Comelas como quieras: con salsas o solas; todas son igual de deliciosas!", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXp9cg0/200/200/original?country=ar", precio : 1500, categoria : "Sandwiches de pollo"},
    {id : 5, nombre : "Papas Grandes", calorias : 339 , descripcion : "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar", precio : 800, categoria : "Papas y complementos"},
    {id : 6, nombre : "Papas Medianas", calorias : 292 , descripcion : "Nuestro sello. Las aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última. Crujientes y deliciosas, no vas a parar hasta terminarlas todas.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar", precio : 700, categoria : "Papas y complementos"},
    {id : 7, nombre : "Papas Pequeñas", calorias : 192 , descripcion : "Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última en su versión pequeña.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUUjwZ/200/200/original?country=ar", precio : 500, categoria : "Papas y complementos"},
    {id : 8, nombre : "Sundae de Dulce de Leche", calorias : 257 , descripcion : "El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-dulce-de-leche.png/200/200/original?country=ar", precio : 800, categoria : "Postres"},
    {id : 9, nombre : "McFlurry Oreo", calorias : 424 , descripcion : "Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.", imagen : "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio : 1200, categoria : "Postres"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    let productos;

    productos = JSON.parse(localStorage.getItem("productos")) || [];

    return productos;
}

const renderProductos = () => {
    const productos = cargarProductosLS();

    let contenidoHTML = "";

    productos.forEach(producto => {
        contenidoHTML += `
        <div class="col-md-3 mb-5 text-center">
            <div class="card" >
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.precio}</p>
                    <a href="#" class="btn btn-warning" onclick="agregarAlCarrito(${producto.id})">Agregar (+)</a>
                </div>
            </div>
        </div>`;    
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}


const guardarCarritoLS = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const cargarCarritoLS = () => {
    let productos;

    productos = JSON.parse(localStorage.getItem("carrito")) || [];

    return productos;
}

const agregarAlCarrito = (id) => {
    const carrito = cargarCarritoLS();

    const producto = buscarProducto(id);

    carrito.push(producto);

    guardarCarritoLS(carrito);

}

const buscarProducto = (id) => {
    const productos = cargarProductosLS();

    let producto = productos.find(item => item.id === id);

    return producto;
}

const estaEnElCarrito = (id) => {
    const productos = cargarProductosLS();

    return productos.some(item => item.id === id);
   
}

const renderCarrito = () => {
    const productos = cargarCarritoLS();

    let contenidoHTML = `<table class="table">`;

    productos.forEach(producto => {
        contenidoHTML += `
        <tr>
            <td>
                <img src="${producto.imagen}" alt="${producto.nombre}" width="64">
            </td>
            <td>
                ${producto.nombre}
            </td>
            <td>
                ${producto.precio}
            </td>
            <td>
                <img src="images/trash3.svg" alt="Eliminar" width="24">
            </td>
        </tr>
        `;    
    });

    contenidoHTML += "</table>";

    document.getElementById("contenido").innerHTML = contenidoHTML;
}