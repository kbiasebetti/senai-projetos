class Objeto {
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenha_Objeto() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}

class Carro extends Objeto {
    dirX = 0
    dirY = 0
    desenhaCarro(){

    }

    atualizaCarro(){
        this.x += this.dirX
        this.y += this.dirY

        if (this.x <= 2) {
            this.x = 2
        }
        else if (this.x >= 420) {
            this.x = 420
        }
        if (this.y <= 1) {
            this.y = 1
        } else if (this.y >= 520) {
            this.y = 520
        }
    }
}

class Carro02 extends Objeto { 
    atualizaCarro02() {
        this.y += 3
        if (this.y >= 700) {
            this.y -= 800
            this.x = Math.floor(Math.random() * (416 - 2 + 1) + 2)
        }
    }
}


class Estrada extends Objeto {
    desenhaEstrada() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    moveEstrada() {
        this.y += 10
        if (this.y >= 790) {
            this.y = -100
        }
    }
}

class Text {
    desenhaTexto (text, x, y, cor, font) {
       des.fillStyle = cor
       des.lineWidth = '5'
       des.font = font
       des.fillText(text, x, y) 
    }
}zzzv