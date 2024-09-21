document.addEventListener('DOMContentLoaded', function(){
    alert('Receba 2000 Blitz por assistir a transmissão AO VIVO!')
    var totalBlitz = sessionStorage.getItem('saldo-blitz');
    totalBlitz = parseInt(totalBlitz) + 2000;
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

})