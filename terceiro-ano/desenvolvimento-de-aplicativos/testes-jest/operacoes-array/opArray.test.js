const { soma, subtracao } = require('./opArray')
let array = [1, 1, 1, 1, 1]

describe('Teste de soma de arrays', () => {
    test('O resultado da soma dos arrays', () => {
        expect(soma(array)).toBe(5)
    })
    test('O resultado da subtracao dos arrays', () => {
        expect(subtracao(array)).toBe(-5)
    })
})