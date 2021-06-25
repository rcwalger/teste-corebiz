//Preço De
function ListPrice(props){
    let listPrice = props.listPrice;
    let price = props.price;

    //Valida se o produto possuí desconto. Caso sim, adiciona o prefixo 'de'
    let hasDiscount = (listPrice != undefined) && ( (listPrice >= price) );

    return(
        <div className="shelf-listPrice">
            { (hasDiscount) && `de ` }
            {listPrice}
        </div>
    )
}

//Preço Por / Melhor Preço
function BestPrice(props){
    let listPrice = props.listPrice;
    let price = props.price;

    //Valida se o produto possuí desconto. Caso sim, adiciona o prefixo 'por'
    let hasDiscount = (listPrice != undefined) && ( (listPrice >= price) );

    return(
        <div className="shelf-bestPrice">
            { (hasDiscount) && `por ` }
            {props.price}
        </div>
    )
}

//Parcelamento
function Installments(props){
    let installments = props.installments;
    return(
        <div className="shelf-installments">
            { (installments != null) &&
                `ou ${installments.quantity}x de ${props.numberToReal(installments.value)}`
            }
        </div>
    )
}

class ProductPrice extends React.Component{

    //Converte para Real
    numberToReal(valor){
        if( valor != null ){
            valor = valor.toString().replace(/\D/g,"");
            valor = valor.toString().replace(/(\d)(\d{8})$/,"$1.$2");
            valor = valor.toString().replace(/(\d)(\d{5})$/,"$1.$2");
            valor = valor.toString().replace(/(\d)(\d{2})$/,"$1,$2");
            return "R$ " + valor;
        }
    }

    //Retorna a melhor parcela
    bestInstallments(installments){
        var bestInstallment = installments;

        if( installments.length > 0 ){
            //Para cada installment
            installments.forEach(installment => {

                //Se tiver o mesmo tanto de parcela
                if (installment.quantity === bestInstallment.quantity) {
                    //Se o valor é menor (em caso de quantity igual)
                    if(installment.value < bestInstallment.value) {
                        //Salva como melhor installment
                        bestInstallment = installment
                    }
                }else if (installment.quantity > bestInstallment.quantity) {
                    bestInstallment = installment
                }

            })
        }

        if( bestInstallment.length == 0){
            bestInstallment = null;
        }else{
            bestInstallment = bestInstallment[0];
        }

        return bestInstallment;
        
    }

    render(){
        //Converte os valores para Real.
        let listPrice = this.numberToReal(this.props.listPrice);
        let price = this.numberToReal(this.props.price)

        //Pega o valor do parcelamento mais vantajoso. Entre número de parcelas e menor preço.
        let bestInstallments = this.bestInstallments(this.props.installments)
    
        return(
    
            <div className="shelf-price">

                <ListPrice
                    listPrice={listPrice}
                    price={price}
                />

                <BestPrice
                    listPrice={listPrice}
                    price={price}
                />

                <Installments
                    installments={bestInstallments}
                    numberToReal={this.numberToReal}
                />
            </div>
        )
    }

}