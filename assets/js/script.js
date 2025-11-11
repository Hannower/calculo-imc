const botaoCalcular = document.getElementById('botao-calcular');
const elementoResultado = document.getElementById('resultado-imc');

function calcularIMC () {
    let inputPeso = document.getElementById('peso');
    let inputAltura = document.getElementById('altura');
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);
    let imc = peso / (altura * altura);

    let mensagem = ""

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mensagem = "Por favor, insira valores válidos e positivos para peso e altura.";
    } else if (imc < 18.5) {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Abaixo do peso)";
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Peso normal)";
    } else if (imc >= 25 && imc < 30) {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Acima do peso)";
    } else if (imc >= 30 && imc < 35) {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Obesidade grau 1)";
    } else if (imc >= 35 && imc < 40) {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Obesidade grau 2)";
    } else {
        mensagem = "Seu imc é " + imc.toFixed(2) + " (Obesidade grau 3)";
    }

    elementoResultado.innerHTML = mensagem;
}

botaoCalcular.addEventListener('click', function(e) {
    e.preventDefault();
    calcularIMC();
})




