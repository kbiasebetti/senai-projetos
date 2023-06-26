programa
{
funcao inicio()
{
		inteiro n1, n2, n3

		escreva("-----------------------------------------------------\n")
		escreva("| Programa para analisar o maior e o menos número\n")
		escreva("------------------------------------------------------\n")
		escreva("Insira o primeiro valor: ")
		leia(n1)

		escreva("Insira o segundo valor: ")
		leia(n2)

		escreva("Insira o terceiro valor: ")
		leia(n3)

		se((n1 > n2) e (n1 > n3)){
		escreva(n1, " É o maior valor")
		}

		se((n2 > n1) e (n2 > n3)){
		escreva(n2, " É o maior valor")
		}

		se((n3 > n2) e (n3 > n1)){
		escreva(n3, " É o maior valor")
		}
		escreva("\n")
		 se((n1 < n2) e (n1 < n3)){
		escreva(n1, " É o menor valor")
		}

		se((n2 < n1) e (n2 < n3)){
		escreva(n2, " É o menor valor")
		}


		se((n3 < n2) e (n3 < n1)){
		escreva(n3, " É menor valor")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 824; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */