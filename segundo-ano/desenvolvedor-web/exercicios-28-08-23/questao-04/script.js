let res_vetor = document.getElementById('res_vetor')
let res_pares = document.getElementById('res_pares')
let res_impares = document.getElementById('res_impares')
let res_all_array = document.getElementById('res_all_array')
let num_array = []

function randomizar(min, max_num){
    let random = 0
    random = Math.floor(Math.random() * (max_num - min + 1)) + min
    return random
}

function gerar(){
    res_vetor.innerHTML = ''
    num_array = []

    let num = Number(document.getElementById('num').value)
    let min = 0
    let max_num = 100
    let max_array = num

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res_vetor.innerHTML = 'Vetor Randômico = [' + num_array + ']'
}

function calcular(){
    let pares = 0
    let impares = 0
    let total = 0

    for(i = 0;i < num_array.length;i++){
        if(num_array[i] % 2 == 0){
            pares += num_array[i]
        }
    }
    res_pares.innerHTML = 'A soma dos números pares do vetor é = ' + pares

    for(i = 0;i < num_array.length;i++){
        if(num_array[i] % 2 == 1){
            impares += num_array[i]
        }
    }
    res_impares.innerHTML = 'A soma dos números ímpares do vetor é = ' + impares

    for(i = 0;i < num_array.length;i++){
        total += num_array[i]
    }
    res_all_array.innerHTML = 'A soma de todos os números do vetor é = ' + total
}