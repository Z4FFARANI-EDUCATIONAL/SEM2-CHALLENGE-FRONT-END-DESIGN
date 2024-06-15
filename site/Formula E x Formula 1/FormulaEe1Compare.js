function proximaPagina() {
    var ganhouProximaPagina = sessionStorage.getItem('ganhouProximaPagina');
    if (ganhouProximaPagina === null) {
        var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
        saldoBlitz += 2000;
        document.getElementById("saldoBlitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximaPagina', 'true');
    }
}

function proximoSlideFormulaE() {
    var ganhouProximoSlideFormulaE = sessionStorage.getItem('ganhouProximoSlideFormulaE');
    if (ganhouProximoSlideFormulaE === null) {
        var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldoBlitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormulaE', 'true');
    }
}

function proximoSlideFormula1() {
    var ganhouProximoSlideFormula1 = sessionStorage.getItem('ganhouProximoSlideFormula1');
    if (ganhouProximoSlideFormula1 === null) {
        var saldoBlitz = parseInt(document.getElementById("saldoBlitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldoBlitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldoBlitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormula1', 'true');
    }
}

document.addEventListener("DOMContentLoaded", function() {

var nome = sessionStorage.getItem('nome')
document.getElementById('username').textContent = nome

var totalBlitz = sessionStorage.getItem('saldoBlitz');
    if (totalBlitz === null) {
        // Se não houver saldoBlitz no sessionStorage, inicialize com um valor padrão
        totalBlitz = 500;
        sessionStorage.setItem('saldoBlitz', totalBlitz.toString());
    } else {
        totalBlitz = parseInt(totalBlitz);
    }
    document.getElementById("saldoBlitz").textContent = totalBlitz.toString();

// programação carrossel //
const carrossel = document.getElementById("carrossel")
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length;
let slideAtual = 0

document.getElementById("proxBtn").addEventListener("click", function(){
    if (slideAtual < totalSlides - 1){
        slideAtual = slideAtual + 1;
        atualizarCarrossel()
    }
    else{
        slideAtual = 0;
        atualizarCarrossel();
    }
});

document.getElementById("voltBtn").addEventListener("click", function(){
    if (slideAtual > 0 ){
        slideAtual = slideAtual - 1;
        atualizarCarrossel()
    }
    else{
        slideAtual = totalSlides - 1;
        atualizarCarrossel();
    }
});

function atualizarCarrossel(){
const troca = -slideAtual * 800;
carrossel.style.transform='translateX(' + troca + 'px)';
}
});