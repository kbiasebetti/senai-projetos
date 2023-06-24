function maior(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var num3 = parseFloat(document.getElementById('num3').value)
    var num4 = parseFloat(document.getElementById('num4').value)
    var num5 = parseFloat(document.getElementById('num5').value)

    var maior = num1

    if(num2 > maior){
        maior = num2 
    }
    if(num3 > maior){
        maior = num3 
    }
    if(num4 > maior){
        maior = num4 
    }
    if(num5 > maior){
        maior = num5 
    }

    document.getElementById("res1").innerHTML = "O maior valor desses 5 números é = " + maior
    
}

function menor(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var num3 = parseFloat(document.getElementById('num3').value)
    var num4 = parseFloat(document.getElementById('num4').value)
    var num5 = parseFloat(document.getElementById('num5').value)

    var menor = num1

    if(num2 < menor){
        menor = num2
    }
    if(num3 < menor){
        menor = num3
    }
    if(num4 < menor){
        menor = num4
    }
    if(num5 < menor){
        menor = num5
    }

    document.getElementById("res2").innerHTML = "O menor valor desses 5 números é = " + menor

}