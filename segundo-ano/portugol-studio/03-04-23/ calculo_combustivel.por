programa
{
	funcao inicio()
	{
		
		real q, v, d, desconto
		caracter c
		real gasolina=5.3
		real alcool=4.8

		escreva("-------------------------------------------------------------------\n")
		escreva("| Programas para calcular o valor final a ser cobrado do cliente\n")
		escreva("-------------------------------------------------------------------\n")

		escreva("Siga as instruções:\n")
		escreva("Digite 'g' para gasolina ou 'a' para álcool: ")
		leia(c)

		se((c=='g')ou(c=='G')){
		escreva("Digite a quantidade de combustível que o consumidor comprou: \n")
		leia(q)
		se(q<=20){
		d= (gasolina*q)
		desconto= 0.03*d
		v= d - desconto
		escreva("O valor a ser cobrado é de R$", v, " para ", q, " litros de gasolina\n")
		}
		se(q>20){
		d= (gasolina*q)
		desconto= 0.05*d
		v= d - desconto
		escreva("O valor a ser cobrado é de R$", v, " para ", q, " litros de gasolina\n")
		}
		}

		se((c=='a')ou(c=='A')){
		escreva("Digite a quantidade de combustível que o consumidor comprou: \n")
		leia(q)
		se(q<=20){
		d= (alcool*q)
		desconto= 0.02*d
		v= d - desconto
		escreva("O valor a ser cobrado é de R$", v, " para", q, "litros de álcool\n")
		}
		
		se(q>20){
		d= (alcool*q)
		desconto= 0.04*d
		v= d - desconto
		escreva("O valor a ser cobrado é de R$", v, " para", q, "litros de álcool\n")
		}
	}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1300; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */