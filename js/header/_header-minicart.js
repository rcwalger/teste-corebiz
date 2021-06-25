$(document).ready(function(){
    var itemsCart = new LocalStorageCache("itens-cart");
    var items = itemsCart.getItems() || [];
    itemsCart.setItems(items);

    $("#header-minicart__count").text( items.length );
})