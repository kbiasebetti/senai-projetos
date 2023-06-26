programa
{
	funcao inicio()
	{
		real salario = 1800, nv, com, bah

		escreva("---------------------------------------------------\n")
		escreva("| Programa para verificar o salário do vendedor |\n")
		escreva("---------------------------------------------------\n")
		escreva("Quantas vendas você fez no mês?\n")
		leia(nv)

		se(nv<=10000){
			com = salario * 0.3
			bah = com + salario
			escreva("Você vai receber o total de: R$ ", bah, "")
		}

		se((nv>10000) e(nv<30000)){
			com = salario * 0.5
			bah = com + salario
			escreva("Você vai receber o total de: R$", bah, "")
			
		}

		se(nv>=30000){
			com = salario * 0.8 
			bah = com + salario
			escreva("Você vai receber o total de: R$", bah, " ")
		
	}
}}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 697; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */