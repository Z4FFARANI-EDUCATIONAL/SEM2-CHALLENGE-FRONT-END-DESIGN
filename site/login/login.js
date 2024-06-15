function checarDados(){
    var email = sessionStorage.getItem('email')
    var senha = sessionStorage.getItem('senha') 
    var loginEmail = document.getElementById('loginEmail').value
    var loginSenha = document.getElementById('loginSenha').value

    if(email!=loginEmail || senha!=loginSenha){
        senhaLog.style.color = "red"
        emailLog.style.color = "red"
        setTimeout(function(){
            alert("E-mail ou senha incorretos!\nTente novamente.")
        },500)
    }
    else if(email==loginEmail && senha==loginSenha){
        senhaLog.style.color = "green"
        emailLog.style.color = "green"
        setTimeout(function(){
            alert(`Sessão iniciada com sucesso!\n Clique em "OK" para ser redirecionado.`)
            window.location.href = "../userPage/userpage.html";
        },500)
    }
}