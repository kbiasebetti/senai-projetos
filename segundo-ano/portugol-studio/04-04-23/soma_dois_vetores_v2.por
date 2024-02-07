programa
{
	funcao inicio()
	{
		inteiro vetor1[7] = {1, 2, 3, 4, 5, 6, 7}
		inteiro vetor2[7] = {2, 4, 6, 8, 10, 12, 14}
		inteiro vetor3[7] = {0, 0, 0, 0, 0, 0, 0}

		escreva("Programa para soma de 2 vetores\n")
		para(inteiro i=0; i<7; i++){
			vetor3[i] = vetor1[i] + vetor2[i]
		}
		para(inteiro i=0; i<7; i++){
			escreva("O resultado do vetor[",i,"] = ",vetor3[i],"\n")
		}
		

		escreva("fim do programa\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 340; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor1, 5, 10, 6}-{vetor2, 6, 10, 6}-{vetor3, 7, 10, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */