class ProductBuy extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(e){
        var id = e.target.dataset.id;
        let elem = e.target;

        let items = [];

        //Usa o LocalStorage do navegador do usuário para guardar quais os produtos ele possuí no carrinho
        var itemsCart = new LocalStorageCache("itens-cart");

        //Caso já tenha sido criado anteriormente no navegador, recupera o valor atual, caso contrário cria vazio
        items = itemsCart.getItems() || [];
        
        if ( !items.includes(id) && id != null ){
            //Salva em um array o valor do novo produto adicionado ao carrinho.
            items.push(id);

            //Seta os valores no LocalStorage
            itemsCart.setItems(items);

            //Atualiza a quantidade de itens dentro do carrinho e exibe no Header
            $("#header-minicart__count").text( items.length );
        }

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


    render(){
        let id = this.props.id;
        return(
            <div className="shelf-productBuy" data-id={id} onClick={this.handleAddToCart}>Comprar</div>
        )
    }
}