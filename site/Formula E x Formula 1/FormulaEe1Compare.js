document.addEventListener("DOMContentLoaded", function() {
// programação carrossel //
const carrossel = document.getElementById("carrossel");
const slides = document.querySelectorAll(".slide");
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