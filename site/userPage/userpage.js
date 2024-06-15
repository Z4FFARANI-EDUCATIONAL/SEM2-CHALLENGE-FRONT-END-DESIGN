document.addEventListener("DOMContentLoaded", function(){
    // GANHE BLITZ PARA TESTAR A FERRAMENTA
    setTimeout(function(){
        alert("Você pode testar nossa plataforma normalmente\nPorém caso queira testar a funcionalidade das ferramentas, ao clicar na nossa logo na lateral esquerda do header, 100mil blitz serão creditados <3\n\nExistem eventos que ocorrem caso faltem blitz para adquirir algo, teste também :)")
    }, 3000);

    // SISTEMA PARA PARTICIPAÇÃO DE SORTEIO //
    const addBtn = document.getElementById("maisBtn")
    addBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitzQtd")
        var valorAtual = document.getElementById("blitzQtd").textContent
        valorAtual = parseInt(valorAtual)
        const acrescimo = 1000
        var novoValor = valorAtual + acrescimo
        qtdAtual.textContent = `${novoValor}`
    })

    const subBtn = document.getElementById("menosBtn")
    subBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitzQtd")
        var valorAtual = document.getElementById("blitzQtd").textContent
        valorAtual = parseInt(valorAtual)
        const decrescimo = 1000
        var novoValor = valorAtual - decrescimo
        qtdAtual.textContent = `${novoValor}`
    })

    // ADQUIRIR ITENS //
    // MOLDURA //
        moldura = document.getElementById("compraMoldura")
        moldura.addEventListener("click", function(){
        var botãoMoldura = document.getElementById("compraMoldura")

        var userBlitz = document.getElementById("userBlitz").textContent
        userBlitz = parseInt(userBlitz)
        
            if(userBlitz < 2000){
                alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
            }
            else{
                botãoMoldura.classList.add("itemAdquirido")
                botãoMoldura.classList.remove("gold")
                botãoMoldura.textContent = 'Adquirido'
                userBlitzTotal = document.getElementById("userBlitz")
                userBlitzTotal.textContent = `${userBlitz-2000}`

                var img = document.getElementById("profileImg")
                img.src = '../../images/lendario item.png'               
            }
            
        
        })
    // PLAY STORE //
    playStore = document.getElementById("compraPlayStore")
    playStore.addEventListener("click", function(){
    var botaoPlayStore = document.getElementById("compraPlayStore")

    var userBlitz = document.getElementById("userBlitz").textContent
    userBlitz = parseInt(userBlitz)
    
        if(userBlitz < 20000){
            alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
        }
        else{
            botaoPlayStore.classList.add("itemAdquirido")
            botaoPlayStore.classList.remove("rosa")
            botaoPlayStore.textContent = 'Adquirido'
            userBlitzTotal = document.getElementById("userBlitz")
            userBlitzTotal.textContent = `${userBlitz-20000}`
        }
        
       
    })

    netflix = document.getElementById("compraNetflix")
    netflix.addEventListener("click", function(){
    var botaoNetflix = document.getElementById("compraNetflix")

    var userBlitz = document.getElementById("userBlitz").textContent
    userBlitz = parseInt(userBlitz)
        if(userBlitz < 40000){
            alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
        }
         else{
            botaoNetflix.classList.add("itemAdquirido")
            botaoNetflix.classList.remove("rosa")
            botaoNetflix.textContent = 'Adquirido'
            userBlitzTotal = document.getElementById("userBlitz")
            userBlitzTotal.textContent = `${userBlitz-40000}`
        }
    })

    // TEMPORIZADOR LOJA //
    const duracao = 62741 // tempo em Horas, minutos e segundos
    const elementoTimer = document.getElementById("timer"); //puxando o timer html

    function formataçãoTempo(segundos){
        const horas = Math.floor(segundos / 3600)//segundos para horas
        const minutos = Math.floor((segundos % 3600) / 60) // segundos para minutos
        const seg = segundos % 60; //segundos restantes
        return `NOVAS RECOMPENSAS CHEGAM EM: ${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(seg).padStart(2, '0')}s` //quando o tempo diminuir de dois digitos para um (exemplo: 10 para 9), o "0" será adicionado ficando (exemplo: 09, ao inves de apenas 9)
    }

    function iniciarTimer(duracao, display){
        var tempoRestante = duracao;
        display.textContent = formataçãoTempo(tempoRestante)

        const intervaloTimer = setInterval(function(){
            tempoRestante = tempoRestante - 1
            display.textContent = formataçãoTempo(tempoRestante)
        
            if (tempoRestante <= 0) {
                clearInterval(intervaloTimer)
                display.textContent = '00h 00m 00s'
            }
        }, 1000)
    }

    // INICIADOR AUTOMATICO DE TIMER //
    window.onload = function(){
        iniciarTimer(duracao, elementoTimer)
    }
})



// GANHAR 100MIL BLITZ //
function adicionarBlitz(){
    var userBlitz = document.getElementById("userBlitz").textContent
    var userBlitzTotal = document.getElementById("userBlitz")
    var blitz = parseInt(userBlitz)
    blitz = blitz + 100000
    userBlitzTotal.textContent = `${blitz}`
}


// SISTEMA DE CONFIRMAÇÃO DE COMPRA DE INGRESSOS PARA SORTEIO//
function participar(){
    var userBlitz = document.getElementById("userBlitz").textContent
    userBlitz = parseInt(userBlitz)

    var valorAtual = document.getElementById("blitzQtd").textContent
    valorAtual = parseInt(valorAtual)

    var popUp = document.getElementById("popUpCompra")

    if (userBlitz < valorAtual){
        alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
    }
    else{
        popUp.classList.add("mostrarPopUp") //Ativar popUp Confirmação//
    }
}

function cancelar(){
    var popUp = document.getElementById("popUpCompra")
    popUp.classList.remove("mostrarPopUp")
}

function confirmar(){
    var userBlitz = document.getElementById("userBlitz").textContent
    userBlitz = parseInt(userBlitz)

    var popUp = document.getElementById("popUpCompra")
    popUp.classList.remove("mostrarPopUp")

    var valorAtual = document.getElementById("blitzQtd").textContent
    valorAtual = parseInt(valorAtual)

    var qtdIngressos = valorAtual / 1000
    setTimeout(function(){
        alert(`Parabens você acaba de adquirir ${qtdIngressos} chances de sorteado!\nBoa Sorte! Resultado disponivel em: xx/xx/xxxx`)
    }, 300);
    
    var userBlitzTotal = document.getElementById("userBlitz")
    userBlitzTotal.textContent = `${userBlitz-valorAtual}`
}

