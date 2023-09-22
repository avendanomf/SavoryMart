
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
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
    })
});