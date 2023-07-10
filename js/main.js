const productos = [

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
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");

function cargarProductos () {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
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
}
console.log(botonesCategorias)
cargarProductos();

/*botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", {e} > {

        botonesCategorias.forEach(boton => boton.classList.remove("active")),
        e.currentTarget.classList.add("active"),

    })
})*/
