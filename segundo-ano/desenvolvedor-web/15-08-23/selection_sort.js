let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')

let num_array_original = []
let num_array = []
let contador = 0

function inserir(){
    res1.innerHTML = ''
    let insert = Number(document.getElementById('insert').value)
    num_array.push(insert)
    res1.innerHTML = 'Vetor = [' + num_array + ']'
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