//Retorna se é um e-mail válido
function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

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

    if( fieldName.val() == "" ){
        isFormValidate = false;

        fieldName.addClass('error');
    }

    if( !isEmail(fieldMail.val()) ){
        isFormValidate = false;

        fieldMail.addClass('error');
    }
    
    if(isFormValidate){
        console.log("Válido");
        resetFormNewsletter();
        toggleOptionNewsletter()
    }
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