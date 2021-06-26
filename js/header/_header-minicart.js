//@prepros-prepend "../components/Minicart/Minicart.js"

function openMiniCart(){
    //Abre o Modal de MiniCart
    let elemMiniCart = $(".minicart");
    if ( elemMiniCart.hasClass("opened") ){
        elemMiniCart.removeClass("opened");
        $("body").removeClass("show-overlay");
    }else{
        elemMiniCart.addClass("opened");
        $("body").addClass("show-overlay");
    }      
}

//Gera o Mini Carrinho
$(document).on("click", ".header-minicart", function(){
    $(".shelf-item").removeClass("itemRemoved");

    //Atualiza a lista de produtos adicionada ao carrinho antes de renderizar o minicart
    let itemsCart = new LocalStorageCache("itens-cart");
    let items = itemsCart.getItems();
    if(items == null){
        items = [];
    }

    //Seta os valores no LocalStorage
    itemsCart.setItems(items);

    //Renderiza minicart
    let $minicart = document.getElementById("js-react-MiniCartList");
    if( $minicart != null ){
        ReactDOM.render(
            <Minicart
                products={items}
            />,
            $minicart
        );
    }

    openMiniCart();
})

//Limpa o carrinho
$(".minicart-header__cleanCart").click(function(){
    //Reseta o LocalStorage
    var items = [];
    let itemsCart = new LocalStorageCache("itens-cart");
    itemsCart.setItems(items);

    //Zera o contador de itens do carrinho
    $("#header-minicart__count").text("0");

    //Efeito de remover os itens do carrinho.
    $(".shelf-item").addClass("itemRemoved");

    $(".shelf-productBuy").removeClass("selected").text("Comprar")

    //Fecha o modal
    setTimeout(function(){
        $(".minicart").removeClass("opened");
        $("body").removeClass("show-overlay");
    }, 500)
})



//Inicia a página
$(document).ready(function(){
    refreshMiniCart();
})