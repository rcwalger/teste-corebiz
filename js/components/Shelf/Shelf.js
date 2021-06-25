//@prepros-prepend "./Grid.js"

class Shelf extends React.Component{
    
    componentDidMount(){
        $("#js-react-Shelf .shelf-items").slick({
            infinite: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false
                    }
                }
        
            ]
        })
    }

    render(){
        let listProduct = this.props.product;
        return(
            <ul className="shelf-items">
                {listProduct.map((product) =>
                    <Grid product={product} />
                )}
            </ul>
        )
    }
}