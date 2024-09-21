document.addEventListener("DOMContentLoaded", function(){

    var totalBlitz = sessionStorage.getItem('saldoBlitz');
    if (totalBlitz === null) {
        // Se não houver saldoBlitz no sessionStorage, inicialize com um valor padrão
        totalBlitz = 500;
        sessionStorage.setItem('saldoBlitz', totalBlitz.toString());
    } else {
        totalBlitz = parseInt(totalBlitz);
    }
    document.getElementById("saldoBlitz").textContent = totalBlitz.toString();

    var nome = sessionStorage.getItem('nome')
    document.getElementById('username').textContent = nome

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

     // BLITZ POR ASSISTIR //
     assistir = document.getElementById("transmitBtn")
     assistir.addEventListener("click", function(){
         var saldoBlitz = document.getElementById("saldoBlitz").textContent
         saldoBlitz = parseInt(saldoBlitz)

         var saldoBlitzTotal = document.getElementById("saldoBlitz")
         saldoBlitzTotal.textContent = `${saldoBlitz + 1000}`

         setTimeout(function(){
            alert("Área ainda em desenvolvimento\nReceba 1000 Blitz!\nAgradecemos a compreensão <3")
        }, 1000);
     })

    // ADQUIRIR ITENS //
    // MOLDURA //
        moldura = document.getElementById("compraMoldura")
        moldura.addEventListener("click", function(){
        var botãoMoldura = document.getElementById("compraMoldura")

        var saldoBlitz = document.getElementById("saldoBlitz").textContent
        saldoBlitz = parseInt(saldoBlitz)
        
            if(saldoBlitz < 2000){
                alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
            }
            else{
                botãoMoldura.classList.add("itemAdquirido")
                botãoMoldura.classList.remove("gold")
                botãoMoldura.textContent = 'Adquirido'
                var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
                saldoBlitz -= 2000;
                document.getElementById("saldoBlitz").textContent = saldoBlitz;
                sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
                sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
                var img = document.getElementById("profileImg")
                img.src = '../../images/lendario item.png'
                
                setTimeout(function(){
                    alert(`Parabéns você acaba de adquirir uma moldura Gold para seu perfil!`)
                }, 300);
            }
        })
    // PLAY STORE //
    playStore = document.getElementById("compraPlayStore")
    playStore.addEventListener("click", function(){
    var botaoPlayStore = document.getElementById("compraPlayStore")

    var saldoBlitz = document.getElementById("saldoBlitz").textContent
    saldoBlitz = parseInt(saldoBlitz)
    
        if(saldoBlitz < 20000){
            alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
        }
        else{
            botaoPlayStore.classList.add("itemAdquirido")
            botaoPlayStore.classList.remove("rosa")
            botaoPlayStore.textContent = 'Adquirido'
            var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
            saldoBlitz += 20000;
            document.getElementById("saldoBlitz").textContent = saldoBlitz;
            sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
            sessionStorage.setItem('ganhouAdicionarBlitz', 'true');

            setTimeout(function(){
                alert(`Parabéns você acaba de adquirir um giftcard de R$15,00 para ser utilizado na PlayStore`)
            }, 300);
        }
        
       
    })

    netflix = document.getElementById("compraNetflix")
    netflix.addEventListener("click", function(){
    var botaoNetflix = document.getElementById("compraNetflix")

    var saldoBlitz = document.getElementById("saldoBlitz").textContent
    saldoBlitz = parseInt(saldoBlitz)
        if(saldoBlitz < 40000){
            alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
        }
        else{
            botaoNetflix.classList.add("itemAdquirido")
            botaoNetflix.classList.remove("rosa")
            botaoNetflix.textContent = 'Adquirido'
            var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
            saldoBlitz -= 40000;
            document.getElementById("saldoBlitz").textContent = saldoBlitz;
            sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
            sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
            setTimeout(function(){
                alert(`Parabéns você acaba de adquirir um mês de Netflix!`)
            }, 300);
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
function adicionarBlitz() {
    var ganhouAdicionarBlitz = sessionStorage.getItem('ganhouAdicionarBlitz');
    if (ganhouAdicionarBlitz === null) {
        var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
        saldoBlitz += 100000;
        document.getElementById("saldoBlitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
    }
}

function botaoDescobrir(){
    var ganhouBotaoDescobrir = sessionStorage.getItem('ganhouBotaoDescobrir');
    if (ganhouBotaoDescobrir === null) {
        var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
        saldoBlitz += 2000;
        document.getElementById("saldoBlitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouBotaoDescobrir', 'true');
    }
}

// SISTEMA DE CONFIRMAÇÃO DE COMPRA DE INGRESSOS PARA SORTEIO//
function participar(){
    var saldoBlitz = document.getElementById("saldoBlitz").textContent
    saldoBlitz = parseInt(saldoBlitz)

    var valorAtual = document.getElementById("blitzQtd").textContent
    valorAtual = parseInt(valorAtual)

    var popUp = document.getElementById("popUpCompra")

    if (saldoBlitz < valorAtual){
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
    var saldoBlitz = document.getElementById("saldoBlitz").textContent
    saldoBlitz = parseInt(saldoBlitz)

    var popUp = document.getElementById("popUpCompra")
    popUp.classList.remove("mostrarPopUp")

    var valorAtual = document.getElementById("blitzQtd").textContent
    valorAtual = parseInt(valorAtual)

    var qtdIngressos = valorAtual / 1000
    setTimeout(function(){
        alert(`Parabéns você acaba de adquirir ${qtdIngressos} chances de ser sorteado!\nBoa Sorte! Resultado disponivel em: xx/xx/xxxx`)
    }, 300);
    
    var saldoBlitzTotal = document.getElementById("saldoBlitz")
    saldoBlitzTotal.textContent = `${saldoBlitz-valorAtual}`
}

