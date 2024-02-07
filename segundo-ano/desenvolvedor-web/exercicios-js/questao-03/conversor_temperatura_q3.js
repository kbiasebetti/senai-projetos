function fare(){
    let temp = Number(document.getElementById('temp').value)
    let res_fare = 0
    res_fare = (temp * 9/5) + 32

    document.getElementById("res").innerHTML = 'A temperatura em graus Farenheit é = ' + res_fare
}

function celsius(){
    let temp = Number(document.getElementById('temp').value)
    let res_cel = 0
    res_cel = (temp - 32) * 5/9

    document.getElementById("res").innerHTML = 'A temperatura em graus Celsius é = ' + res_cel
}