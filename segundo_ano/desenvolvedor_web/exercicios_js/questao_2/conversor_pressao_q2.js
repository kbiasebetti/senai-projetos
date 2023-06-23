function psi(){
    let valor = Number(document.getElementById('valor').value)
    let valor_psi = valor * 0.0193367801

    document.getElementById("res").innerHTML = "O valor convertido em Pounds per Square inch é = " + valor_psi
}

function mmhg(){
    let valor = Number(document.getElementById('valor').value)
    let valor_mmhg = valor / 0.0193367801

    document.getElementById("res").innerHTML = "O valor convertido em Milímetros de Mercúrio é = " + valor_mmhg
}