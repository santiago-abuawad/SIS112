class Utils {
    
    Redondear(valor) {
        return Math.round(valor);
    }
    
    
    //Antes
    //canvas.heigh =Math.round(canvas.height/50) * 50;

    //Ahora
    //canvas.height = Utils.RoundTablero(canvas.height);

    //redondeo
    RoundTablero(lado) {
        return Math.round(lado/50) * 50;
    }
} 