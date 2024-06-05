const { soma, subtracao, multiplicacao, divisao } = require('./aritmetica')

describe('Teste das operações aritméticas casp 8 operacao 2', () => {
    test('O valor da soma de 8 + 2 = 10', () => {
        expect(soma(8, 2)).toBe(10)
    })
    test('O valor da subtracao de 8 - 2 = 6', () => {
        expect(subtracao(8, 2)).toBe(6)
    })
    test('O valor da multiplicacao de 8 * 2 = 16', () => {
        expect(multiplicacao(8, 2)).toBe(16)
    })
    test('O valor da divisao de 8 / 2 = 4', () => {
        expect(divisao(8, 2)).toBe(4)
    })
})