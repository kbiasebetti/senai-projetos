let resVetor = document.getElementById('resVetor')
let resPares = document.getElementById('resPares')
let resImares = document.getElementById('resImares')
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
    let pares = 0
    let impares = 0
    let soma = 0

    for(i = 0; i < num_array.length;i++){
        if(num_array[i] % 2 == 0){
            pares += num_array[i]
        }
        
        resPares.innerHTML = 'Soma dos pares = ' + pares
    }

    for(i = 0; i < num_array.length;i++){
        if(num_array[i] % 2 == 1){
            impares += num_array[i]
        }

        resImares.innerHTML = 'Soma dos ímpares = ' + impares
    }

    soma = pares + impares

    resAll.innerHTML = 'A soma dos pares e ímpares do vetor é = ' + soma
}