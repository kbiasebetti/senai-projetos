let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let num_array = []

function randomizar(min, max_num){
    let respostaRandom = 0
    respostaRandom = Math.floor(Math.random() * (max_num - min + 1)) + min;
    return respostaRandom
}

function gerar(){
    res1.innerHTML = ''
    num_array = []
    let min = 0
    let max_num = 20
    let maxArray = 10

    for(i = 0;i < maxArray;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res1.innerHTML = 'Vetor Randômico = [' + num_array + ']'
}

function calcular(){
    let pares = 0

    for(i = 0;i < num_array.length;i++){
        if(num_array[i] % 2 == 0){
            pares += num_array[i]
        }
    }

    res2.innerHTML = 'A soma dos números pares do vetor é = ' + pares
}