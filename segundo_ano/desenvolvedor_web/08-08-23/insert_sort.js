let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let num_array_original = []
let num_array = []

function inserir(){
    res1.innerHTML= ''
    let num = Number(document.getElementById('num').value)
    num_array.push(num)
    res1.innerHTML = 'Vetor = [' + num_array + ']'
}

function ordenar(){
    res2.innerHTML = ''
    let valor_atual = 0

    for(j = num_array.length - 1;j > 0;j--){
        for(i = 0;i < num_array.length - 1;i++){
            if(num_array[i] > num_array[i + 1]){
                valor_atual = num_array[i]
                num_array[i] = num_array[i + 1]
                num_array[i + 1] = valor_atual
            }
        }
    }

    res2.innerHTML = 'Vetor = [' + num_array + ']'

}

