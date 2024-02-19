let des = document.getElementById('des').getContext('2d')
let carro = new objeto(10, 10, 100, 100, 'green')

function desenha(){
    
}

function atualiza(){

}

function main(){
    des.clearRect(0, 0, 500, 700)
    desenha()
    atualiza()
}

setInterval(main, 10)
