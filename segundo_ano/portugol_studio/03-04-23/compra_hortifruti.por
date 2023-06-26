programa
{
	funcao inicio()
	{
		real p_tomate=5.35, tomate, t_tomate
		real pcebola=3.32, cebola, tcebola
		real paipim=2.87, aipim, taipim
		real pbatata= 4.43, batata, tbatata
		real pcenoura=3.59, cenoura, tcenoura
		real pchuchu=1.79, chuchu, tchuchu
		real qtd

		escreva("-----------------------------------------------------------\n")
		escreva("| Programa para verificar o valor gasto em um hortifruti |\n")
		escreva("-----------------------------------------------------------\n")
		escreva("Quantos tomates você quer levar?\n")
		leia(tomate)

		t_tomate = tomate * p_tomate

		escreva("Quantas cebolas você quer levar?\n")
		leia(cebola)

		tcebola = cebola * pcebola

		escreva("Quantos aipins você quer levar?\n")
		leia(aipim)

		taipim = aipim * paipim

		escreva("Quantas batatas você quer levar?\n")
		leia(batata)

		tbatata = batata * pbatata

		escreva("Quantas cenouras você quer levar?\n")
		leia(cenoura)

		tcenoura = cenoura * pcenoura

		escreva("Quantos chuchus você quer levar?\n")
		leia(chuchu)

		tchuchu = chuchu * pchuchu

		qtd = t_tomate + tcebola + taipim + tbatata + tcenoura + tchuchu

		escreva("Ao todo, você vai gastar um total de: R$", qtd, " para comprar tudo.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1177; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */