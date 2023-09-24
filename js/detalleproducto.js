// Obtén el parámetro "producto" de la URL
const params = new URLSearchParams(window.location.search);
const productoNombre = params.get("producto");



// Crea un objeto con los detalles de los productos
const productosDetalles = {
    Aguacate: {
        imagen: '../img/Aguacate.jpg',
        descripcion: 'El aguacate es una fruta deliciosa y saludable. Es una excelente fuente de grasas saludables y es perfecto para preparar guacamole.',
        precio: 2.99,
    },
    Apio: {
        imagen: '../img/Apio.jpg',
        descripcion: 'El apio es una hortaliza crujiente y refrescante. Es ideal para ensaladas y snacks saludables.',
        precio: 1.49,
    },
    Berenjena: {
        imagen: '../img/Berenjena.jpg',
        descripcion: 'La berenjena es una verdura versátil que se puede asar, hornear o freír. Es un ingrediente común en las cocinas mediterráneas.',
        precio: 2.29,
    },
    Carne: {
        imagen: '../img/Carne.jpg',
        descripcion: 'Nuestra carne fresca proviene de la mejor calidad. Es perfecta para parrillas y asados.',
        precio: 5.99,
    },
    Coliflor: {
        imagen: '../img/coliflor.jpg',
        descripcion: 'La coliflor es una verdura crucífera que se puede cocinar de muchas maneras. Es una excelente opción baja en calorías.',
        precio: 1.99,
    },
    Fresa: {
        imagen: '../img/fresa.jpg',
        descripcion: 'Las fresas son frutas dulces y jugosas. Son ideales para postres, batidos y ensaladas de frutas.',
        precio: 3.49,
    },
    Lechuga: {
        imagen: '../img/Lechuga.jpg',
        descripcion: 'La lechuga es una verdura de hojas verdes perfecta para ensaladas. Es refrescante y saludable.',
        precio: 1.79,
    },
    Mandarina: {
        imagen: '../img/Mandarina.jpg',
        descripcion: 'Las mandarinas son cítricos pequeños y deliciosos. Son una fuente rica de vitamina C.',
        precio: 0.99,
    },
    Manzana: {
        imagen: '../img/Manzana.jpg',
        descripcion: 'Las manzanas son frutas crujientes y nutritivas. Son ideales como tentempié saludable.',
        precio: 1.69,
    },
    Mazorca: {
        imagen: '../img/Mazorca.jpg',
        descripcion: 'Las mazorcas de maíz frescas son ideales para parrillas y barbacoas de verano.',
        precio: 2.49,
    },
    Papaya: {
        imagen: '../img/papaya.jpg',
        descripcion: 'La papaya es una fruta tropical jugosa y llena de sabor. Es rica en vitaminas y antioxidantes.',
        precio: 2.19,
    },
    Pera: {
        imagen: '../img/Pera.jpg',
        descripcion: 'Las peras son frutas dulces y jugosas que son perfectas para comer solas o en ensaladas de frutas.',
        precio: 1.89,
    },
    Piña: {
        imagen: '../img/Piña.jpg',
        descripcion: 'La piña es una fruta tropical que es una excelente fuente de vitamina C. Es deliciosa en batidos y cócteles.',
        precio: 2.39,
    },
    Plátano: {
        imagen: '../img/Platano.jpg',
        descripcion: 'Los plátanos son frutas versátiles y energéticas. Son ideales como snack o en batidos.',
        precio: 1.29,
    },
    Naranja: {
        imagen: '../img/Prod1.png',
        descripcion: 'Nuestras naranjas frescas son jugosas y llenas de sabor. Son una excelente fuente de vitamina C.',
        precio: 3.99,
    },
    Tomate: {
        imagen: '../img/Tomate.jpg',
        descripcion: 'Los tomates son versátiles y se utilizan en muchas recetas. Son una excelente fuente de licopeno.',
        precio: 1.49,
    },
    Uva: {
        imagen: '../img/Uva.jpg',
        descripcion: 'Las uvas son frutas dulces y se pueden disfrutar solas o en ensaladas de frutas. Son una fuente de antioxidantes.',
        precio: 4.99,
    }

};

// Verifica si el producto está en la lista y muéstralo
if (productosDetalles.hasOwnProperty(productoNombre)) {
    debugger;
    const detalleProducto = document.getElementById("detalle-producto");
    const producto = productosDetalles[productoNombre];
    detalleProducto.innerHTML = `
                <div class="image">
                    <img src="${producto.imagen}" alt="${productoNombre}">
                </div>
                <div class="container1">
                    <span class="title1">
                    ${productoNombre}
                    </span>
                    <p class="description1">${producto.descripcion}</p>
                    <p class="description1">Precio: $${producto.precio.toFixed(2)}</p>
                    <div class="primary1">
                        <span class="titlePrimary1">
                            Agregar al Carrito
                        </span>
                    </div>
                </div>
            `;
} else {
    detalleProducto.innerHTML = '<p>Producto no encontrado.</p>';
}
