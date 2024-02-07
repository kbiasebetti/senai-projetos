programa
{
	funcao inicio()
	{
		real nota1 = 0.0, nota2 = 0.0, nota3 = 0.0, nota4 = 0.0
		real media = 0.0

		escreva("------------------------------------------\n")
		escreva("  Cálculo da média das 4 notas            \n")
		escreva("------------------------------------------\n")
		escreva("Digite a primeira nota\n")
		leia(nota1)
		escreva("Digite a segunda nota\n")
		leia(nota2)
		escreva("Digite a tericeira nota\n")
		leia(nota3)
		escreva("Digite a quarta nota\n")
		leia(nota4)
		media = (nota1+nota2+nota3+nota4)/4
		se(media >= 7.0){
			escreva("Você está aprovado. Parabéns!\n")
			escreva("A sua média é = ",media,"\n")
		}
		se((media<7.0)e(media>=5.0)){
			escreva("Você precisa fazer uma atividade de recuperação!\n")
			escreva("A sua média é = ",media,"\n")
		}
		se(media<5.0){
			escreva("você está reprovado. Estude mais!\n")
			escreva("A sua média é = ",media,"\n")
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 890; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota1, 5, 7, 5}-{nota2, 5, 20, 5}-{nota3, 5, 33, 5}-{nota4, 5, 46, 5}-{media, 6, 7, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */