function somar(){
    let q_cami = Number(document.getElementById('q_cami').value)
    console.log(q_cami)
    let q_berm = Number(document.getElementById('q_berm').value)
    console.log(q_berm)
    let q_cal = Number(document.getElementById('q_cal').value)
    console.log(q_cal)

    let preco_cam = 29.95
    let preco_berm = 34.87
    let preco_cal = 92.39
    let total = 0.0
    total = (q_cami * preco_cam) + (q_berm * preco_berm) + (q_cal * preco_cal)
    console.log(total.toFixed(2))

    document.getElementById("res").innerHTML = "O valor total é = " + total.toFixed(2)
}