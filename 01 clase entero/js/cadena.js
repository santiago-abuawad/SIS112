class Cadena{
    constructor(cadena) {
        this.cadena = cadena;
    }

    getCadena() {
        return this.cadena;
    }

    //Manipulacion de cadenas
    concaternar(otraCadena){ //Unir una cadena con otra cadena
        this.cadena += otraCadena 
    }

    invertir(){ //Invertir kis caracteres de la cadena
        let cadenaInvertida = "";
        for (let i = this.cadena.leght - 1 >= 0; i--;) {
            cadenaInvertida += this.cadena[i];
        }
        this.cadena = cadenaInvertida;
    }

    //Comparaciones
    esVacia() { //Compara si la cadena no tiene caracteres
        return thi.cadena.leght === 0;
    }

    contiene(subcadena) { //Compara si la subcadena existe dentro de la cadena
        return this.cadena.includes(subcadena);
    }

    comienzaCon(prefijo) { // compara si la cadena comienza con el prefijo "caracter"
        return this.cadena.startWith(prefijo);
    }

    terminaCon(sufijo) { //Compara si la cadena termina con el sufijo "caracter"
        return this.cadena.endWith(sufijo);
    }
    
    //Otras operaciones
    longitud(){ //Obtiene la cantidad de caracteres que tiene la cadena
        return this.cadena.length;
    }

    aMayuscula(){ // Obtiene la cadena transfromada a Mayusculas
        return this.cadena.toUpperCase();
    }

    aMinusculuas(){ // Obtiene la cadena transfromada a Minusculas
        return this.cadena.toLowerCase();
    }
}