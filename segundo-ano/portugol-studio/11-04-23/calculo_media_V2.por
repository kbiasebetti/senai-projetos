programa
{
	funcao inicio()
	{
		real media = 0.0, nota1 = 0.0, nota2 = 0.0, nota3 = 0.0

		escreva("----------------------------------------\n")
		escreva("  | Cálculo da média dos exercicíos |   \n")
		escreva("----------------------------------------\n")
		escreva("Digite a primeira nota do exercicío: \n")
		leia(nota1)
		escreva("Digite a segunda nota do exercicío: \n")
		leia(nota2)
		escreva("Digite a terceira nota do exercicío: \n")
		leia(nota3)
		media = (nota1 + nota2 + nota3) / 3
	
		se(media >= 7.0){
			escreva("Parabéns! Você teve sucesso no exercicío.\n")
			escreva("A sua média é = ",media,"\n")
		}

		se((media >= 5.0) e (media < 7.0)){
			escreva("Sinto muito, você não atingiu a média suficiente\n")
			escreva("Você precisa fazer uma recuperação\n")
			escreva("A sua média é = ",media,"\n")
		}
		se(media < 5.0){
			escreva("Problema! Você precisa refazer o exercicío.\n")
			escreva("A sua média é = ",media,"\n")
	}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 588; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */