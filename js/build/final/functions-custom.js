"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,a=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var LocalStorageCache=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;_classCallCheck(this,e),this.localStorage=window.localStorage,this.key=t,this.xpirationInHours=r,this.timeCache=this.getTime()}return _createClass(e,[{key:"setItems",value:function(e){try{this.localStorage.setItem(this.key,JSON.stringify({time:(new Date).getTime(),items:e}))}catch(t){window.localStorage.clear();try{this.localStorage.setItem(this.key,JSON.stringify({time:(new Date).getTime(),items:e}))}catch(e){console.log(e)}}}},{key:"getItems",value:function(){return this.timeCache?JSON.parse(this.localStorage.getItem(this.key)).items:null}},{key:"getItemsIfNotExpired",value:function(){return this.hasExpired()?null:this.getItems()}},{key:"getTime",value:function(){var e=JSON.parse(this.localStorage.getItem(this.key));return e?e.time:null}},{key:"hasExpired",value:function(){if(!this.timeCache)return!0;return((new Date).getTime()-this.timeCache)/36e5>this.xpirationInHours}}]),e}();function ProductImage(e){var t=e.listPrice,r=e.price,a=null!=t&&t>=r;return React.createElement("div",{className:"shelf-image"},a&&React.createElement("div",{className:"shelf-discount"},React.createElement("span",null,"OFF")),React.createElement("img",{src:e.imageUrl,alt:e.productName,loading:"lazy"}))}function ProductName(e){return React.createElement("h2",{className:"shelf-name"},e.productName)}function ProductRatingItem(e){return React.createElement("li",{className:"shelf-rating__item"},e.fill?React.createElement("svg",{width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z",fill:"#F8475F"})):React.createElement("svg",{width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69477 7.70161L3.55353 8.89634L4.12301 6.64371L2.23234 5.12792L4.72666 4.92792L5.69477 2.80687L6.66857 4.93319L9.16289 5.13319L7.27222 6.64897L7.8417 8.90161L5.69477 7.70161Z",fill:"#F8475F"})))}function ProductRating(e){for(var t=[],r=0;r<5;r++)t.push(React.createElement(ProductRatingItem,{fill:r<=e.stars}));return React.createElement("ul",{className:"shelf-rating"},t)}function ListPrice(e){var t=e.listPrice,r=e.price,a=null!=t&&t>=r;return React.createElement("div",{className:"shelf-listPrice"},a&&"de ",t)}function BestPrice(e){var t=e.listPrice,r=e.price,a=null!=t&&t>=r;return React.createElement("div",{className:"shelf-bestPrice"},a&&"por ",e.price)}function Installments(e){var t=e.installments;return React.createElement("div",{className:"shelf-installments"},null!=t&&"ou ".concat(t.quantity,"x de ").concat(e.numberToReal(t.value)))}window.itemsCart=new LocalStorageCache("itens-cart");var ProductPrice=function(e){_inherits(r,React.Component);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,[{key:"numberToReal",value:function(e){if(null!=e)return"R$ "+(e=(e=(e=(e=e.toString().replace(/\D/g,"")).toString().replace(/(\d)(\d{8})$/,"$1.$2")).toString().replace(/(\d)(\d{5})$/,"$1.$2")).toString().replace(/(\d)(\d{2})$/,"$1,$2"))}},{key:"bestInstallments",value:function(e){var t=e;return e.length>0&&e.forEach((function(e){e.quantity===t.quantity?e.value<t.value&&(t=e):e.quantity>t.quantity&&(t=e)})),t=0==t.length?null:t[0]}},{key:"render",value:function(){var e=this.numberToReal(this.props.listPrice),t=this.numberToReal(this.props.price),r=this.bestInstallments(this.props.installments);return React.createElement("div",{className:"shelf-price"},React.createElement(ListPrice,{listPrice:e,price:t}),React.createElement(BestPrice,{listPrice:e,price:t}),React.createElement(Installments,{installments:r,numberToReal:this.numberToReal}))}}]),r}(),ProductBuy=function(e){_inherits(r,React.Component);var t=_createSuper(r);function r(e){var a;return _classCallCheck(this,r),(a=t.call(this,e)).handleAddToCart=a.handleAddToCart.bind(_assertThisInitialized(a)),a}return _createClass(r,[{key:"createLoading",value:function(e){$(e).addClass("loading"),0==$(".message-addToCart").length&&$("body").append('<div class="message-addToCart">Produto adicionado ao carrinho</div>');var t=$(".message-addToCart");setTimeout((function(){$(e).removeClass("loading"),t.addClass("visible")}),1e3),setTimeout((function(){t.removeClass("visible")}),5e3)}},{key:"handleAddToCart",value:function(e){var t=window.itemsCart.getItems()||[],r=this.props.product.productId;if(!t.some((function(e){return e.productId===r}))&&null!=r){var a=this.props.product;t.push(a),window.itemsCart.setItems(t),window.listItensCart=t,$("#header-minicart__count").text(t.length)}var n=e.target;this.createLoading(n)}},{key:"render",value:function(){return React.createElement("div",{className:"shelf-productBuy",onClick:this.handleAddToCart},"Comprar")}}]),r}(),Grid=function(e){_inherits(r,React.Component);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,[{key:"render",value:function(){var e=this.props.product;return React.createElement("li",{className:"shelf-item","product-id":e.id},React.createElement(ProductImage,{listPrice:e.listPrice,price:e.price,imageUrl:e.imageUrl,productName:e.productName}),React.createElement("div",{className:"shelf-infos"},React.createElement(ProductName,{productName:e.productName}),React.createElement(ProductRating,{stars:e.stars}),React.createElement(ProductPrice,{listPrice:e.listPrice,price:e.price,installments:e.installments}),React.createElement(ProductBuy,{product:e})))}}]),r}(),Minicart=function(e){_inherits(r,React.Component);var t=_createSuper(r);function r(e){var a;return _classCallCheck(this,r),(a=t.call(this,e)).state={itemsCart:[]},a.cleanCart=a.cleanCart.bind(_assertThisInitialized(a)),a}return _createClass(r,[{key:"componentWillMount",value:function(){var e=window.itemsCart.getItems()||[];this.setState({itemsCart:e})}},{key:"cleanCart",value:function(){window.itemsCart.setItems([]),this.setState({itemsCart:[]}),$("#header-minicart__count").text("0")}},{key:"render",value:function(){var e=this.state.itemsCart;return React.createElement("div",{className:"minicart"},React.createElement("div",{className:"minicart-header"},React.createElement("p",{class:"minicart-header__title"},"Resumo"),React.createElement("span",{class:"minicart-header__cleanCart",onClick:this.cleanCart},"Limpar carrinho")),React.createElement("div",{className:"minicart-body"},React.createElement("ul",{className:"shelf-items__minicart"},e.map((function(e){return React.createElement(Grid,{product:e})})))),React.createElement("div",{className:"minicart-footer"},React.createElement("a",{href:"#",className:"minicart-footer__goCheckout"},"Finalizar Compra")))}}]),r}();$(document).ready((function(){var e=window.itemsCart.getItems()||[];window.itemsCart.setItems(e),$("#header-minicart__count").text(e.length);var t=document.getElementById("js-react-Minicart");null!=t&&ReactDOM.render(React.createElement(Minicart,{products:e}),t)})),$(".header-minicart").click((function(){var e=$(".minicart");e.hasClass("opened")?(e.removeClass("opened"),$("body").removeClass("show-overlay")):(e.addClass("opened"),$("body").addClass("show-overlay"))})),$("#overlay").click((function(){$(".minicart").removeClass("opened"),$("body").removeClass("show-overlay")}));