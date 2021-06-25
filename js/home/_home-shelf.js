//@prepros-prepend "../components/Shelf/Shelf.js"
import { get } from 'axios';

$(document).ready(function(){
    //Busca via API a lista dos produtos que serão exibidos na vitrine e renderiza o component React
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