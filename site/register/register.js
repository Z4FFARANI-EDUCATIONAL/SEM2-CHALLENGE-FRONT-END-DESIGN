function armazenarDados(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    if(email == false || senha == false) {
        alert("Preencha todos os campos!")
    }

    else{
        emailCheck.style.color = "green"
        senhaCheck.style.color = "green"
        sessionStorage.setItem('email', document.getElementById("email").value) //armazenando dados entre paginas
        sessionStorage.setItem('senha', document.getElementById("senha").value) //armazenando dados entre paginas
        setTimeout(function(){
            alert('Usuário cadastrado!\nClique em "OK" para ser redirecionado.')
            window.location.href = ("../login/login.html");
        },500)
    } 
}