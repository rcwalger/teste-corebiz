//@prepros-prepend "../components/Shelf/Shelf.js"
import { get } from 'axios';

$(document).ready(function(){
    get('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(function(res) {
        let product = res.data;
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