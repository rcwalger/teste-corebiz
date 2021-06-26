class ProductBuy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemExistInCart: false
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    //Iteração para indicar que o produto foi adicionado ao carrinho com sucesso
    createLoading(elem){
        //Adiciona um loading ao clicar no botão comprar
        $(elem).addClass("loading")

        setTimeout(function(){
            //Retira o loading do botão comprar
            $(elem).removeClass("loading").addClass("selected").text("Comprado")
        }, 1000)
    }

    //Verifica quais produtos já estão no carrinho
    checkProductsInCart(){
        //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
        let itemsCart = new LocalStorageCache("itens-cart");

        //Recupera o valor atual
        let items = itemsCart.getItems();

        //Marca se o produto já esta no carrinho
        var id = this.props.product.productId;
        let hasInCart = items.some((e) => e['productId'] === id);
        this.setState({
            itemExistInCart: hasInCart
        })
    }

    handleAddToCart(e){
        let itemExistInCart = this.state.itemExistInCart;
        if ( !itemExistInCart ){
            let product = this.props.product;

            //Atualiza minicart
            refreshMiniCart(product);
        }

        //Iteração para mostrar que o produto foi adicionado ao carrinho
        this.createLoading(e.target);
    }

    componentWillMount(){
        this.checkProductsInCart();
    }

    render(){
        let itemExistInCart = this.state.itemExistInCart;
        return(
            <div className={`shelf-productBuy ${ (!itemExistInCart) ? ``: `selected`}`} onClick={this.handleAddToCart}>
                { (!itemExistInCart) ? "Comprar" : "Comprado" }
            </div>
        )
    }
}