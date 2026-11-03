document.addEventListener("DOMContentLoaded", function () {
    var calcular = document.getElementById("calcular");
    //console.log(calcular);
    calcular.addEventListener("click", function () {
        var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);

        var soma = numero1 + numero2;
        var subtracao = numero1 - numero2;
        var multiplicacao = numero1 * numero2;
        var divisao = numero1 / numero2;

       
        console.log("subtracao " + subtracao);
        console.log("multiplicacao " + multiplicacao);
        console.log("divisao " + divisao);
        console.log("alert");
        console.log("ola");
    })


})   