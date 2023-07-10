function validarDados(){
    event.preventDefault()
    var error = document.querySelector('#error')
    error.style.color = 'black'
    
    var expresion = /\w+@\w+\.+[a-z]/

    var mensajesError = []
    
    if (document.form.name.value=="" ) {
        mensajesError.push("Campo Nome é obrigatório")  
        document.form.name.focus()
    
    }else if (document.form.email.value=="") {
        mensajesError.push("Campo E-mail é obrigatório")
        document.form.email.focus() 

    }else if (document.form.assunto.value=="" ) {
        mensajesError.push("Campo Assunto é obrigatório")
        document.form.assunto.focus() 

    }else if (document.form.textarea.value=="" || document.form.textarea.value.length < 50 ){
        mensajesError.push("Campo Mensagem é obrigatório e deve conter pelo menos 50 carateres") 
        document.form.textarea.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        mensajesError.push("E-mail inválido")
    }


    error.innerHTML = mensajesError.join(',')

    
}
    document.querySelector('form').addEventListener('submit',validardados)