class ProductBuy extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    //Interação para indicar que o produto foi adicionado ao carrinho com sucesso
    createLoading(elem){
        //Adiciona um loading ao clicar no botão comprar
        $(elem).addClass("loading")

        //Cria um popup de que o Produto foi adicionado ao carrinho
        if( $(".message-addToCart").length == 0 ){
            $("body").append('<div class="message-addToCart">Produto adicionado ao carrinho</div>');
        }

        //Exibe a mensagem de produto adicionado ao carrinho
        var popUpAddToCart = $(".message-addToCart");
        setTimeout(function(){
            $(elem).removeClass("loading")//Retira o loading do botão comprar

            popUpAddToCart.addClass("visible");
        }, 1000)

        //Oculta a mensagem de produto adicionado ao carrinho
        setTimeout(function(){
            popUpAddToCart.removeClass("visible");
        }, 5000)
    }

    handleAddToCart(e){
        //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
        //Caso já tenha sido criado anteriormente no navegador, recupera o valor atual, caso contrário cria vazio
        let items = window.itemsCart.getItems() || [];

        //Verifica se o produto já esta no carrinho
        var id = this.props.product.productId;
        var itemExistInCart = items.some((e) => e['productId'] === id)
        
        if ( !itemExistInCart && id != null ){

            let product = this.props.product;
            //Salva em um array o valor do novo produto adicionado ao carrinho.
            items.push(product);

            //Seta os valores no LocalStorage
            window.itemsCart.setItems(items);

            window.listItensCart = items;

            //Atualiza a quantidade de itens dentro do carrinho e exibe no Header
            $("#header-minicart__count").text( items.length );
        }

        //Interação para mostrar que o produto foi adicionado ao carrinho
        let elem = e.target;
        this.createLoading(elem);
    }

    render(){
        return(
            <div className="shelf-productBuy" onClick={this.handleAddToCart}>Comprar</div>
        )
    }
}