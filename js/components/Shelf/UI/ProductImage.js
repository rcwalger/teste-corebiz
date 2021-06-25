function ProductImage(props){
    let listPrice = props.listPrice;
    let price = props.price;
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