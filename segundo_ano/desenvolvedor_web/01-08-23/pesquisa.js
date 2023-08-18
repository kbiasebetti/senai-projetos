let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
num_array = []

function salvar(){
    let num = Number(document.getElementById('num').value)
    num_array.push(num)
    console.log(num_array)
}

function pesquisar(){
    let pesq = Number(document.getElementById('pesq').value)
    for(i=0;i<num_array.length;i++){
        if(pesq == num_array[i]){
            console.log('O valor existe e é = ' + num_array[i])
        }
    }
}