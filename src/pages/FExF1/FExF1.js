document.addEventListener("DOMContentLoaded", function(){
    var totalBlitz = sessionStorage.getItem('saldo-blitz');
    if (totalBlitz === null) {
        totalBlitz = 500;
        sessionStorage.setItem('saldo-blitz', totalBlitz.toString());
    }
    else{
        totalBlitz = parseInt(totalBlitz);
    }
    document.getElementById("saldo-blitz").textContent = totalBlitz.toString();


    var nome = sessionStorage.getItem('nome')
    document.getElementById('username').textContent = nome

    sessionStorage.setItem('saldo-blitz', totalBlitz.toString());

     // MANTER MOLDURA
     var adquiriuMoldura = sessionStorage.getItem("moldura-adquirida")
     if (adquiriuMoldura === "true"){
         var img = document.getElementById("moldura-user")
         img.src = '../../../public/assets/images/gold-profile.png'
     }
})

function proximaPagina() {
    var ganhouProximaPagina = sessionStorage.getItem('ganhouProximaPagina');
    if (ganhouProximaPagina === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 2000;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximaPagina', 'true');
    }
}

function proximoSlideFormulaE() {
    var ganhouProximoSlideFormulaE = sessionStorage.getItem('ganhouProximoSlideFormulaE');
    if (ganhouProximoSlideFormulaE === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormulaE', 'true');
    }
}

function proximoSlideFormula1() {
    var ganhouProximoSlideFormula1 = sessionStorage.getItem('ganhouProximoSlideFormula1');
    if (ganhouProximoSlideFormula1 === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormula1', 'true');
    }
}
