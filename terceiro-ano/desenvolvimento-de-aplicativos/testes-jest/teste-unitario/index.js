const leia = require('readline-sync')
const { soma, subtracao, multiplicacao, divisao } = require('./aritmetica')

function main() {
    console.log('------------------------------------------')
    let a = Number(leia.question('Digite o primeiro valor: '))
    let b = Number(leia.question('Digite o segundo valor: '))
    console.log('-----------------------------------------')
    console.log('Digite a operação desejada +, -, *, /')
    let operacao = leia.question('Digite a operacao desejada: ')
    console.log(a)
    console.log(b)
    console.log(operacao)

    let resultado = 0
    switch (operacao) {
        case '+': 
            resultado = soma(a, b)
            break
        
        case '-':
            resultado = subtracao(a, b)
            break
    
        case '*':
            resultado = multiplicacao(a, b)
            break
            
        case '/':
            resultado = divisao(a, b)
            break

        default:
            console.log('Opção inválida!')
    }
    
    console.log('O resultado é = ', resultado)
}

main()