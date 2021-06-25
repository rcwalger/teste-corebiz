//@prepros-prepend "../components/Shelf/Shelf.js"

$(document).ready(function(){
    $.ajax({
        url: `https://corebiz-test.herokuapp.com/api/v1/products`,
        type: "GET"
    })
    .then(function(product) {
        console.log(product)

        let $shelf = document.getElementById("js-react-Shelf");
        if( $shelf != null ){
            ReactDOM.render(
                <Shelf
                    product={product}
                />,
                $shelf
            );
        }
    })
})