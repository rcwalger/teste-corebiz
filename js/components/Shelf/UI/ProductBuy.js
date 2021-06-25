class ProductBuy extends React.Component{
    handleAddToCart(id){
        let items = [];
        var itemsCart = new LocalStorageCache("itens-cart");
        items = itemsCart.getItems() || [];
        
        if ( !items.includes(id) ){
            items.push(id);
            itemsCart.setItems(items);

            $("#header-minicart__count").text( items.length );
        }
        
    }

    render(){
        let id = this.props.id;
        return(
            <div className="shelf-productBuy" onClick={() => this.handleAddToCart(id)}>Comprar</div>
        )
    }
}