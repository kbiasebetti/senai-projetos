function soma(array) {
    let soma = 0
    for(i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}

function subtracao(array) {
    let subtracao = 0
    for(i = 0; i < array.length; i++) {
        subtracao -= array[i]
    }
    return subtracao
}

module.exports = { soma, subtracao }