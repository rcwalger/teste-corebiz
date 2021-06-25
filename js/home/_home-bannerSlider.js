$(document).ready(function(){
    //Executa o Slider de Banners
    $(".banner-slider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false
    })
})