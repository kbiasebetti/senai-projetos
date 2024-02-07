let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')

let num_array = []
let minimo = 0

function randomize(min, max){
    let valor = 0
    valor = Math.floor(Math.random() * (max - min + 1)) + min
    return valor
}

function inserir(){
    res1.innerHTML = ''
    let insert = Number(document.getElementById('insert').value)
    let maximo = insert
    let resposta = 0
    num_array = []

    for(i = 0;i < 5;i++){
        resposta = randomize(minimo, maximo)
        num_array.push(resposta)
    }

    res1.innerHTML = 'Vetor [' + num_array + ']'
}


function ordenar(){
    res2.innerHTML = ''
    let valor_atual = 0
    contador = 0

    for(i = 0;i < num_array.length;i++){
        menor = i
        for(j = i;j < num_array.length;j++){
            if(num_array[j] < num_array[menor]){
                menor = j
            }
        }
        if(i != menor){
            valor_atual = num_array[i]
            num_array[i] = num_array[menor]
            num_array[menor] = valor_atual
        }
    }
    
    res2.innerHTML = 'Vetor = [' + num_array + ']'

}