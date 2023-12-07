let res_vetor = document.getElementById('res_vetor')
let res_all = document.getElementById('res_all')
let num_array_original = []

function gerar(){
   res_vetor.innerHTML = ''
   let res_random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
   num_array_original.push(res_random)
   res_vetor.innerHTML = `Vetor Randômico = [${num_array_original}]`
}

function merge(esquerdo,direito){
  let resultado = []
  let indiceEsquerdo = 0, indiceDireito = 0

  while(indiceEsquerdo < esquerdo.length && indiceDireito < direito.length){
      if(esquerdo[indiceEsquerdo]<direito[indiceDireito]){
          resultado.push(esquerdo[indiceEsquerdo])
          indiceEsquerdo++
      }else{
          resultado.push(direito[indiceDireito])
          indiceDireito++
      }
  }
  return resultado.concat(esquerdo.slice(indiceEsquerdo)).concat(direito.slice(indiceDireito))

}

function mergeRecursiva(vetor){
  if(vetor.length <= 1){
      return vetor
  }
  let meio = Math.floor(vetor.length/2) 
  let meioEsquerdo = vetor.slice(0, meio)
  let meioDireito = vetor.slice(meio)

  return merge(mergeRecursiva(meioEsquerdo),mergeRecursiva(meioDireito))

}

function ordenar(){
  num_array = mergeRecursiva(num_array_original)
  res2.innerHTML = `[ ${num_array} ]`
}