//@prepros-prepend "../Shelf/Grid.js"

class Minicart extends React.Component{
    render(){
        let listProduct = this.props.products;
        return(
            <>
                {listProduct.map((product) =>
                    <Grid product={product} />
                )}
            </>
        )
    }
}