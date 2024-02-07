programa
{
	funcao inicio()
	{
		real cam_peq = 19.0, cam_med = 22.0, cam_g = 17.0
		inteiro qtde_p = 0, qtde_m = 0, qtde_g = 0
		real preco = 0.0

		escreva("-----------------------------------------\n")
		escreva("| Cáculo do preço de venda das camisas | \n")
		escreva("-----------------------------------------\n")
		escreva("Quantas camisetas pequenas você vai comprar? \n")
		leia(qtde_p)
		escreva("Quantas camisetas médias você vai comprar? \n")
		leia(qtde_m)
		escreva("Quantas camisetas grandes você vai comprar? \n")
		leia(qtde_g)
		preco = (qtde_p*cam_peq)+(qtde_m*cam_med)+(qtde_g*cam_g)
		escreva("----------------------------\n")
		escreva("| O preço final é = ",preco," |\n")
		escreva("----------------------------\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 636; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */