let res_vet = document.getElementById('res_vet')
let res = document.getElementById('res')
let num_array = []

function randomizar(min, max_num){
    let resp_random = 0
    resp_random = Math.floor(Math.random() * (max_num - min + 1)) + min;
    return resp_random
}

function gerar(){
    res_vet.innerHTML = ''
    num_array = []
    let min = 0
    let max_num = 10
    let max_array = 6

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res_vet.innerHTML = 'Vetor Randômico = [' + num_array + ']'

}

function calcular(){
    let soma = 0
    let media = 0

    for(i = 0;i < num_array.length;i++){
        soma += num_array[i]
    }

    media = soma / num_array.length

    res.innerHTML = 'A média aritmética dos números de dentro do vetor é = ' + media.toFixed(2)
}