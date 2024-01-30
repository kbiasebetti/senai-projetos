let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let num_array = []

function randomize(max, min){
    let resp_random = Math.floor(Math.random() * (max - min + 1) + min);
    return resp_random
}

function inserir(){
    num_array = []
    let min = 0
    let max = Number(document.getElementById('num').value)

    for(i = 0; i < max; i++){
        let resposta = randomize(max, min)
        num_array.push(resposta)
    }
    res1.innerHTML = 'Vetor aleatório = [' + num_array + ']'
}

function ordenar(){
    res2.innerHTML = ''
    let valor_atual = 0
    
    for(i = 0; i < num_array.length; i++){
        let j = i - 1
        valor_atual = num_array[i]

        while(j >= 0 && valor_atual < num_array[j]){
            num_array[j + 1] = num_array[j]
            
            j--
        }
        num_array[j + 1] = valor_atual
    }
    
    res2.innerHTML = 'Vetor = [' + num_array + ']'

}

