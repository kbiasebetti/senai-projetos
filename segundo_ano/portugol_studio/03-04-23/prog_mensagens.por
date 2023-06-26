programa
{
	funcao inicio()
	{
		real nm, total

		escreva("-----------------------------------------------------------\n")
		escreva("| Programa para calcular quanto você gastou em mensagens |\n")
		escreva("-----------------------------------------------------------\n")
		escreva("Quantas mensagens você mandou no mês?: ")
		leia(nm)


		se(nm<75){
			escreva("Você gastou R$5")
		}
		
		se((nm>75) e (nm<240)){
			total = nm * 0.5 + 5
			escreva("Você gastou R$ ", total, " ")
		}

		se(nm>240){
			total = nm * 0.10 + 5
			escreva("Você gastou R$ ", total, " ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 552; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */