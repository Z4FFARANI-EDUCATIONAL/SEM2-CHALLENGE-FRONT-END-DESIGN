function armazenarDados(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    if(email == false || senha == false || nome == false) {
        alert("Preencha todos os campos!")
    }

    else{
        emailCheck.style.color = "green"
        senhaCheck.style.color = "green"
        sessionStorage.setItem('nome', document.getElementById("nome").value) //armazenando dados entre paginas
        sessionStorage.setItem('email', document.getElementById("email").value) //armazenando dados entre paginas
        sessionStorage.setItem('senha', document.getElementById("senha").value) //armazenando dados entre paginas
        setTimeout(function(){
            alert('Usuário cadastrado!\nClique em "OK" para ser redirecionado.')
            window.location.href = ("../login/login.html");
        },500)
    } 
}