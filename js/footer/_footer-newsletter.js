import { post } from 'axios';

//Retorna se é um e-mail válido
function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

//Limpa os campos do formulário de newsletter
function resetFormNewsletter(){
    $("#newsletter-name").val("");
    $("#newsletter-email").val("");
}

//Alterna entre Cadastro e Mensagem de Sucesso/Novo Cadastro
function toggleOptionNewsletter(){
    $(".newsletter .form-item").slideToggle();
    $(".newsletter .form-success").slideToggle();
}

//Válida os campos
function FormValidateNewsletter(){
    let isFormValidate = true;
    let fieldName = $("#newsletter-name");
    let fieldMail = $("#newsletter-email");

    //Valida se o campo esta vazio
    if( fieldName.val() == "" ){
        isFormValidate = false;

        fieldName.addClass('error');
    }

    //Checa se é um e-mail válido
    if( !isEmail(fieldMail.val()) ){
        isFormValidate = false;

        fieldMail.addClass('error');
    }
    
    //Se os campos estiverem tudo certo, dispara a requisição para cadastrar o Lead
    if(isFormValidate){
        console.log("Válido");
        sendFormNewsletter()
    }
}


function sendFormNewsletter(){
    post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
        "email": $("#newsletter-email").val(),
        "name": $("#newsletter-name").val()
    })
    .then(function (response) {
        console.log(response);

        resetFormNewsletter();
        toggleOptionNewsletter();
    })
    .catch(function (error) {
        console.log(error);
    });
}

//Quando entra no campo, retira as mensagens de erro
$("#newsletter-form").on("focus", ".form-input", function(){
    $(this).removeClass('error')
})

//Ao dar submit válida os campos
$("#newsletter-form #newsletter-submit").click(function(){
    FormValidateNewsletter();
})

//Ao dar submit válida os campos
$("#newsletter-form #newsletter-newEmail").click(function(){
    toggleOptionNewsletter()
})