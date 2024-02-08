function calcular(){
    let bol_basquete = Number(document.getElementById('bol_basquete').value)
    let tenis_basquete = Number(document.getElementById('tenis_basquete').value)
    let bermuda_basquete = Number(document.getElementById('bermuda_basquete').value)

    let res_bola = 0
    let res_tenis = 0 
    let res_bermuda = 0
    let resposta_final = 0
    
    res_bola = bol_basquete * 31.59
    res_tenis = tenis_basquete * 89.99
    res_bermuda = bermuda_basquete * 59.49  
    
    resposta_final = res_bola + res_tenis + res_bermuda

    if(resposta_final > 250){
        resposta_final = resposta_final - (250 / 100) * 7
    }

    document.getElementById('res').innerHTML = 'O preço total do seu carrinho é = ' + resposta_final
}