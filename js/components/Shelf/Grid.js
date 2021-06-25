//@prepros-prepend "./UI/ProductImage.js"
//@prepros-prepend "./UI/ProductName.js"
//@prepros-prepend "./UI/ProductRating.js"
//@prepros-prepend "./UI/ProductPrice.js"
//@prepros-prepend "./UI/ProductBuy.js"

//Estrutura do Grid de cada produto
class Grid extends React.Component{
    render(){
        let product = this.props.product;
        return(
            <li className="shelf-item" product-id={product.id}>
                <ProductImage
                    listPrice={product.listPrice}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    productName={product.productName}
                />

                <div className="shelf-infos">
                    <ProductName
                        productName={product.productName}
                    />

                    <ProductRating
                        stars={product.stars}
                    />

                    <ProductPrice
                        listPrice={product.listPrice}
                        price={product.price}
                        installments={product.installments}
                    />

                    <ProductBuy
                        id={product.productId}
                    />
                </div>
            </li>
        )
    }
}