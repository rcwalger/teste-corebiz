//@prepros-prepend "../Shelf/Grid.js"

class Minicart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemsCart: []
        }
        this.cleanCart = this.cleanCart.bind(this);
    }

    //Renderiza o carrinho inicial
    componentWillMount(){
        var items = window.itemsCart.getItems() || [];
        this.setState({ itemsCart: items })
    }

    //Limpa o carrinho
    cleanCart(){
        var items = [];
        window.itemsCart.setItems(items);

        //Atualiza o estado para renderizar o novo carrinho. Agora vazio.
        this.setState({
            itemsCart: []
        })

        $("#header-minicart__count").text("0");
    }

    render(){
        let listProduct = this.state.itemsCart;
        return(
            <div className="minicart">
                <div className="minicart-header">
                    <p class="minicart-header__title">Resumo</p>
                    <span class="minicart-header__cleanCart" onClick={this.cleanCart}>Limpar carrinho</span>
                </div>
                <div className="minicart-body">
                    <ul className="shelf-items__minicart">
                        {listProduct.map((product) =>
                            <Grid product={product} />
                        )}
                    </ul>
                </div>
                <div className="minicart-footer">
                    <a href="#" className="minicart-footer__goCheckout">Finalizar Compra</a>
                </div>
            </div>
        )
    }
}