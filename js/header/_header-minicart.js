//@prepros-prepend "../components/Minicart/Minicart.js"

$(document).ready(function(){
    //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
    //Caso já tenha sido criado anteriormente no navegador, recupera o valor atual, caso contrário cria vazio
    var items = window.itemsCart.getItems() || [];

    //Seta os valores no LocalStorage
    window.itemsCart.setItems(items);

    //Atualiza a quantidade de itens dentro do carrinho e exibe no Header
    $("#header-minicart__count").text( items.length );

    //Renderiza minicart
    let $minicart = document.getElementById("js-react-Minicart");
    if( $minicart != null ){
        ReactDOM.render(
            <Minicart
                products={items}
            />,
            $minicart
        );
    }

})

//Abre/Fecha Mini Carrinho
$(".header-minicart").click(function(){
    let elemMiniCart = $(".minicart");
    if ( elemMiniCart.hasClass("opened") ){
        elemMiniCart.removeClass("opened");
        $("body").removeClass("show-overlay");
    }else{
        elemMiniCart.addClass("opened");
        $("body").addClass("show-overlay");
    }

    // let items = window.itemsCart.getItems();
    // //Renderiza minicart
    // let $minicart = document.getElementById("js-react-Minicart");
    // if( $minicart != null ){
    //     console.log("oi", items)
    //     ReactDOM.render(
    //         <Minicart
    //             products={items}
    //         />,
    //         $minicart
    //     );
    // }
})

$("#overlay").click(function(){
    $(".minicart").removeClass("opened");
    $("body").removeClass("show-overlay");
})