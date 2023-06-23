function somar() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta = num1 + num2;
    document.getElementById("resposta").innerHTML = "Resultado da soma é = " + resposta
}

function subtrair() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta = num1 - num2;
    document.getElementById("resposta").innerHTML = "Resultado da subtração é = " + resposta
}

function multiplicar() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta = num1 * num2;
    document.getElementById("resposta").innerHTML = "Resultado da multiplicação é = " + resposta
}

function dividir() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resposta = num1 / num2;
    document.getElementById("resposta").innerHTML = "Resultado da divisão é = " + resposta
}