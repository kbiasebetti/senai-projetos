let resVetor = document.getElementById('resVetor')
let resAll = document.getElementById('resAll')
let num_array = []

function inserir(){
    resVetor.innerHTML = ''
    let num = Number(document.getElementById('num').value)
    num_array.push(num)
    
    resVetor.innerHTML = 'Vetor = [' + num_array + ']'
}

function calcular(){
    let soma = 0
    let media = 0

    for(i = 0;i < num_array.length;i++){
        soma += num_array[i]
    }

    media = soma / num_array.length
    resAll.innerHTML = 'A média aritmética dos números do array é = ' + media
}