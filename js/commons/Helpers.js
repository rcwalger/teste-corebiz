function refreshMiniCart(product){
    //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
    let itemsCart = new LocalStorageCache("itens-cart");

    //Caso já tenha sido criado anteriormente no navegador, recupera o valor atual
    let items = itemsCart.getItems();
    if(items == null){
        items = [];
    }

    //Salva em um array o valor do novo produto adicionado ao carrinho.
    if(product){
        items.push(product);
    }

    //Seta os valores no LocalStorage
    itemsCart.setItems(items);

    //Atualiza a quantidade de itens dentro do carrinho e exibe no Header
    $("#header-minicart__count").text( items.length );
}

//Fecha overlay
$("#overlay").click(function(){
    $(".minicart").removeClass("opened");
    $("body").removeClass("show-overlay");
})