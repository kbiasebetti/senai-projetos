function converter(){
    let valor = Number(document.getElementById('valor').value)
    let resposta = valor * 14.2233

    document.getElementById('res').innerHTML = 'A pressao em PSI é = ' + resposta

}