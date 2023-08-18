let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
num_array = []

function salvar(){
    let num = Number(document.getElementById('num').value)
    num_array.push(num)
    console.log(num_array)
}

function ordenar(){
    let menor = num_array[0]
    for(i=0;i<num_array.length;i++){
        let j = i - 1
        while(j>0 && menor < num_array[j]){
            num_array[j+1] = num_array[j]
            j--
        }
        num_array[j+1] = menor
        console.log(num_array)

    }


    // troca de valores entre posição do vetor nas variáveis
    // inverter posição de valores no array
   
    // let menor = num_array[0]
    // if(menor > num_array[1]){
    //     num_array[0] = num_array[1]
    //     num_array[1] = menor
    // }
}
