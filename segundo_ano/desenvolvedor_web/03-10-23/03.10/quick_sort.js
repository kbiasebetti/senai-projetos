let res_vetor = document.getElementById('res_vetor')
let res_all = document.getElementById('res_all')
let num_array_original = []

function gerar(){
   res_vetor.innerHTML = ''
   let res_random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
   num_array_original.push(res_random)
   res_vetor.innerHTML = `Vetor Randômico = [${num_array_original}]`
}

function quickRecursiva(vetor){
    if(vetor.length <= 1){
        return vetor
    }
    let pivot = vetor[0];
      const left = [];
      const right = [];
      for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < pivot) {
          left.push(vetor[i]);
        } else {
          right.push(vetor[i]);
        }
      }
    return quickRecursiva(left).concat([pivot], quickRecursiva(right))
}

function ordenar(){
    num_array_original = quickRecursiva(num_array_original)
    res_all.innerHTML = `Os valores ordenados são = [ ${num_array_original} ]`
}