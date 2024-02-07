programa
{
	
	funcao inicio()
	{
		inteiro temp_fare = 0.0, temp_cel = 0.0

		escreva("------------------------------------------")
		escreva("\n")
		escreva("Digite a temperatura em graus Fahrenheit: ")
		escreva("\n")
		escreva("------------------------------------------")
		escreva("\n")
		leia(temp_fare)

		temp_cel = (temp_fare - 32) * 5/9
		
		escreva("------------------------------------------")
		escreva("\n")
		escreva("A temperatura em graus Celsius é: ",temp_cel, "°C")
		escreva("\n")
		escreva("------------------------------------------")
		escreva("\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 580; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */