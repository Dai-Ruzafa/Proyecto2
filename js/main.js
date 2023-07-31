/*const productos = [

    {
        id: "botas-1",
        titulo: "Botas 1",
        imagen: "./img/botas/01.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-2",
        titulo: "Botas 2",
        imagen: "./img/botas/02.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-3",
        titulo: "Botas 3",
        imagen: "./img/botas/03.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-4",
        titulo: "Botas 4",
        imagen: "./img/botas/04.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-5",
        titulo: "Botas 5",
        imagen: "./img/botas/05.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-6",
        titulo: "Botas 6",
        imagen: "./img/botas/06.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-7",
        titulo: "Botas 7",
        imagen: "./img/botas/07.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-8",
        titulo: "Botas 8",
        imagen: "./img/botas/08.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-9",
        titulo: "Botas 9",
        imagen: "./img/botas/09.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-10",
        titulo: "Botas 10",
        imagen: "./img/botas/10.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-11",
        titulo: "Botas 11",
        imagen: "./img/botas/11.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
    {
        id: "botas-12",
        titulo: "Botas 12",
        imagen: "./img/botas/12.jpg",
        categoria: {
            nombre: "Botas",
            id: "botas"
        },
        precio: 20000

    },
]*/

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}