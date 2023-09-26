$(document).ready(function () {

    const productos = [
        {
            nombre: 'Aguacate',
            imagen: '../img/Aguacate.jpg',
            precio: 2.99,
        },
        {
            nombre: 'Apio',
            imagen: '../img/Apio.jpg',
            precio: 1.49,
        },
        {
            nombre: 'Berenjena',
            imagen: '../img/Berenjena.jpg',
            precio: 2.29,
        },
        {
            nombre: 'Carne',
            imagen: '../img/Carne.jpg',
            precio: 5.99,
        },
        {
            nombre: 'Coliflor',
            imagen: '../img/coliflor.jpg',
            precio: 1.99,
        },
        {
            nombre: 'Fresa',
            imagen: '../img/fresa.jpg',
            precio: 3.49,
        },
        {
            nombre: 'Lechuga',
            imagen: '../img/Lechuga.jpg',
            precio: 1.79,
        },
        {
            nombre: 'Mandarina',
            imagen: '../img/Mandarina.jpg',
            precio: 0.99,
        },
        {
            nombre: 'Manzana',
            imagen: '../img/Manzana.jpg',
            precio: 1.69,
        },
        {
            nombre: 'Mazorca',
            imagen: '../img/Mazorca.jpg',
            precio: 2.49,
        },
        {
            nombre: 'Papaya',
            imagen: '../img/papaya.jpg',
            precio: 2.19,
        },
        {
            nombre: 'Pera',
            imagen: '../img/Pera.jpg',
            precio: 1.89,
        },
        {
            nombre: 'Piña',
            imagen: '../img/Piña.jpg',
            precio: 2.39,
        },
        {
            nombre: 'Plátano',
            imagen: '../img/Platano.jpg',
            precio: 1.29,
        },
        {
            nombre: 'Naranja',
            imagen: '../img/Prod1.png',
            precio: 3.99,
        },
        {
            nombre: 'Tomate',
            imagen: '../img/Tomate.jpg',
            precio: 1.49,
        },
        {
            nombre: 'Uva',
            imagen: '../img/Uva.jpg',
            precio: 4.99,
        },
    ];


    // Aquí seleccionamos el carrusel utilizando su clase CSS
    const carousel = $('.owl-carousel');

    // Recorre la lista de productos y crea elementos para cada uno
    productos.forEach(producto => {
        const item = `
            <div class="item">
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="card-body">
                        <a href="..\\Pages\\DetallesProducto.html?producto=${encodeURIComponent(producto.nombre)}"  target="_top" class="custom-link">
                            <h5 class="card-title">${producto.nombre}</h5>
                        </a>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        carousel.append(item);
    });

    // Luego inicializamos el carrusel
    carousel.owlCarousel({
        loop: true,
        margin: 20, // Ajusta el margen
        responsiveClass: true,
        responsive: {
            0: {
                items: 2, // Ajusta la cantidad de productos visibles en pantallas pequeñas
                nav: true
            },
            600: {
                items: 3, // Ajusta la cantidad de productos visibles en pantallas medianas
                nav: false
            },
            1000: {
                items: 5, // Ajusta la cantidad de productos visibles en pantallas grandes
                nav: true,
                loop: false
            }
        }
    });
});
