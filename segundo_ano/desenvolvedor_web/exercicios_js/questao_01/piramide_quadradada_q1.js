function calcular(){
    let lado = Number(document.getElementById('lado').value)
    let altura = Number(document.getElementById('altura').value)

    let volume = (lado * altura) / 3
    document.getElementById("res").innerHTML = "O volume da pirâmide é = " + volume
}