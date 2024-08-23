class persona {
    constructor(nombre, edad, carrera) {
        this.nombre= nombre;
        this.edad = edad;
        this.carrera = carrera;

    }

    saludar() {
        console.log('Hola, me llamo '  + this.nombre  + ' y tengo '  + this.edad  +  ' años');
    }
    
    cumpleaños() { 
        this.edad = this.edad + 1;
        console.log('Feliz cum ahora tengo '  + this.edad + ' años.');
    }

    estudiar(){
        console.log('estoy estudiando ' + thia.carrera +  ' la mejor carrera.')
    }
  }

 function SaludarPersona(){
  //crear una instancia de la clase Persona
  const persona1 = new persona(' Ana ', 22, ' Ingenieria informatica ');

  //Llamar a los metodos
  persona1.saludar();

}