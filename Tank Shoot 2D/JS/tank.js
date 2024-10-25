//clase del tanque del jugador, donde esta, como se moveria y todo eso
class Tank{
    posX;
    posY;
    direccionDisparo;
    vidas;
    velocidad;
    anchoMapa;
    altoMapa;

    constructor(_posX, _posY, _direccionDisparo, _vidas, _anchoMapa, _altoMapa) {
        this.posX = _posX;
        this.posY = _posY;
        this.direccionDisparo = _direccionDisparo;
        this.vidas = _vidas;
        this.velocidad = 50; //velocidad de moviemiento del tanque
        this.anchoMapa = _anchoMapa;
        this.altoMapa = _altoMapa;
    }


    moveLeft(){
        if (this.posX - this.velocidad >= 0) //verificamos el limite izquierdo
            this.posX =  this.posX - this.velocidad;

    }
 
    moveRight(){
        if (this.posX + this.velocidad <= this.anchoMapa - 50) {
            this.posX =  this.posX + this.velocidad;
            }
    }

    moveUp(){
        if (this.posY - this.velocidad >= 0) //verificamos el limite arriba
        this.posY =  this.posY - this.velocidad;
    }

    moveDown(){
        if (this.posY + this.velocidad <= this.altoMapa - 50) {
        this.posY =  this.posY + this.velocidad;
        }
    }

    rotarTank(_direccionDisparo){
        this.direcciónDisparo = _direccionDisparo;
    }
    

}