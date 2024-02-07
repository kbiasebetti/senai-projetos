programa
{
	funcao inicio()
	{
		inteiro valor, impostos, venda
		real teste

		escreva("---------------------------------------------------\n")
		escreva("| Programa para ler o custo de fábrica de um carro |\n")
		escreva("---------------------------------------------------\n")
		
		escreva("Insira o valor do carro: ")
		leia(valor)

		escreva("Insira a porcentagem de revenda: ")
		leia(teste)
		escreva("\n")

		impostos = valor * 0.15

		venda = valor * teste

		escreva("O valor do carro mais os impostos é: R$", impostos, " ")
		escreva("\n")
		escreva("O valor da revenda será de: R$ ", venda, " ")

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 605; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */