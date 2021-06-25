$(document).ready(function(){
    //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
    var itemsCart = new LocalStorageCache("itens-cart");

    //Caso já tenha sido criado anteriormente no navegador, recupera o valor atual, caso contrário cria vazio
    var items = itemsCart.getItems() || [];

    //Seta os valores no LocalStorage
    itemsCart.setItems(items);

    //Atualiza a quantidade de itens dentro do carrinho e exibe no Header
    $("#header-minicart__count").text( items.length );
})