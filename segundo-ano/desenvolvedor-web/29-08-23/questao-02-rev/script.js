let resVetor = document.getElementById('resVetor')
let resAll = document.getElementById('resAll')
let num_array = []

function randomizar(min, max_num){
    let random = 0
    random = Math.floor(Math.random() * (max_num - min + 1)) + min
    return random
}

function gerar(){
    resVetor.innerHTML = ''
    num_array = []
    let min = 1
    let max_num = 10
    let max_array = 5

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    resVetor.innerHTML = 'Vetor [' + num_array + ']'
}

function calcular(){
    let soma = 0

    for(i = 0;i < num_array.length;i++){
        soma += num_array[i]
    }

    resAll.innerHTML = 'A soma dos valores do vetor é = ' + soma
}