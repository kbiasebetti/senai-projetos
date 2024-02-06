let res_vetor = document.getElementById('res_vetor')
let res_all = document.getElementById('res_all')
let num_array = []

function randomizar(min, max_num){
    let res_random = 0
    res_random = Math.floor(Math.random() * (max_num - min + 1) + min)
    return res_random
}

function gerar(){
    res_vetor.innerHTML = ''
    num_array = []
    let min = 1
    let max_num = 50
    let max_array = 10

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res_vetor.innerHTML = 'Vetor Randômico = [' + num_array + ']'
}

function encontrar(){
    let maior = num_array[0]

    for(i = 0;i < num_array.length;i++){
        if(num_array[i] > maior){
            maior = num_array[i]
        }
    }

    res_all.innerHTML = 'O maior número do array é = ' + maior

}