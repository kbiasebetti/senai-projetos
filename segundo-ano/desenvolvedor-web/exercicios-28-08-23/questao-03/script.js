let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let num_array = []

function randomizar(min, max_num){
    let random = 0
    random = Math.floor(Math.random() * (max_num - min + 1)) + min;
    return random
}

function gerar(){
    res1.innerHTML = ''
    num_array = []
    let min = 0
    let max_num = 10
    let max_array = 6

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res1.innerHTML = 'Vetor Randômico = [' + num_array + ']'
}

function calcular(){
    let impares = 0

    for(i = 0;i < num_array.length;i++){
        if(num_array[i] % 2 == 1){
            impares += num_array[i]
        }
    }

    res2.innerHTML = 'A soma dos números ímpares do vetor é = ' + impares
}