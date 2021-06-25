//Exibe a imagem do produto
function ProductImage(props){
    let listPrice = props.listPrice;
    let price = props.price;

    //Valida se o produto possuí desconto. Caso sim, adiciona um selo de "OFF"
    let hasDiscount = (listPrice != undefined) && ( (listPrice >= price) );

    return(
        <div className="shelf-image">
            { (hasDiscount) && 
                <div className="shelf-discount">
                    <span>OFF</span>
                </div>
            }
            <img
                src={props.imageUrl}
                alt={props.productName}
                loading="lazy"
            />
        </div>
    )
}