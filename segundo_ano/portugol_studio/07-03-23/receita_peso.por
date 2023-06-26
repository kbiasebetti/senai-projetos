programa
{
	funcao inicio()
	{
		real peso1 = 0.0, peso2 = 0.0, peso3 = 0.0, peso4 = 0.0
		real peso5 = 0.0, peso6 = 0.0, peso7 = 0.0, media_peso = 0.0
		real media_preco = 0.0, receita = 0.0, custo = 0.0

		escreva("-------------------------------\n")
		escreva("  | Programa peso x receita |  \n")
		escreva("-------------------------------\n")
		escreva(" Digite o peso do primeiro prato: \n")
		leia(peso1)
		escreva(" Digite o peso do segundo prato: \n")
		leia(peso2)
		escreva(" Digite o peso do terceiro prato: \n")
		leia(peso3)
		escreva(" Digite o peso do quarto prato: \n")
		leia(peso4)
		escreva(" Digite o peso do quinto prato: \n")
		leia(peso5)
		escreva(" Digite o peso do sexto prato: \n")
		leia(peso6)
		escreva(" Digite o peso do sétimo prato: \n")
		leia(peso7)
		media_peso = (peso1 + peso2 + peso3 + peso4 + peso5 + peso6 + peso7) / 7
		escreva("------------------------------------------\n")
		escreva("A média de peso é = ",media_peso)
		escreva("\n")
	

		media_preco = media_peso * 12
		receita = media_preco * 22
		custo = receita * 14.95
		
		escreva("---------------------------------------------\n")
		escreva(" A receita obtida em 22 dias é = ",custo)
		escreva("\n")
		escreva("----------------------------------------------\n")

		
		

		
		
		
		
		
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1253; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */