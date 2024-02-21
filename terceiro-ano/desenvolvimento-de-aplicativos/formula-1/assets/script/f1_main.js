let des = document.getElementById('des').getContext('2d')

let carro = new Carro (200,400,80,80,'red')
let carro02 = new Carro02 (400,500,80,80,'blue')
let carro03 = new Carro02 (132,10,80,80,'green')
let estradaEsquerda = new Estrada (10,0,10,696,'white')
let estradaDireita = new Estrada (480,0,10,696,'white')
let estradaCentral01 = new Estrada (240,50,10,150,'white')
let estradaCentral02 = new Estrada (240,330,10,150,'white')
let estradaCentral03 = new Estrada (240,650,10,150,'white')
let texto01 = new Text
let texto02 = new Text

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dirX -= 10
    }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dirX += 10
    }
    else if(e.key === 'w' || e.key === 'ArrowUp') {
        carro.dirY -= 10
    }
    else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dirY += 10
    }
    })

    document.addEventListener('keyup', (e) => {
        if (e.key === 'a' || e.key === 'ArrowLeft') {
            carro.dirX = 0
        }
        else if (e.key === 'd' || e.key === 'ArrowRight') {
            carro.dirX = 0
        }
        else if (e.key === 'w' || e.key === 'ArrowUp') {
            carro.dirY = 0
        } 
        else if (e.key === 's' || e.key === 'ArrowDown') {
            carro.dirY = 0
        }
        })

        
function desenha() {
    texto01.desenhaTexto("Pontos:", 360, 40, 'white', '20px Arial')
    texto02.desenhaTexto("Vidas:", 40, 40, 'white', '20px Arial')
    estradaEsquerda.desenhaEstrada()
    estradaDireita.desenhaEstrada()
    estradaCentral01.desenhaEstrada()
    estradaCentral02.desenhaEstrada()
    estradaCentral03.desenhaEstrada()
    carro.desenha_Objeto()
    carro02.desenha_Objeto()
    carro03.desenha_Objeto()
}

function atualiza() {
    estradaCentral01.moveEstrada()
    estradaCentral02.moveEstrada()
    estradaCentral03.moveEstrada()
    carro03.atualizaCarro02()
    carro02.atualizaCarro02()
    carro.atualizaCarro()
}

function main(){
    des.clearRect(0,0,500,600)
    desenha()
    atualiza()
}

setInterval(main,15)