let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let num_array = []

function randomize(min, max){
    let valor = 0
    valor = Math.floor(Math.random() * (max - min + 1)) + min;
    return valor
}

function inserir(){
    res1.innerHTML = ''
    num_array = []
    let min = 0
    let max = Number(document.getElementById('num').value)

    for(i = 0; i < max; i++){
        let res_all = randomize(min, max)
        num_array.push(res_all)
    }
    res1.innerHTML = 'Vetor aleatório = [' + num_array + ']'
}