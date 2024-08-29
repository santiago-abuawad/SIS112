class Persona {
  constructor(nombre, edad, carrera, universidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.universidad = universidad;
  }

  saludar() {
    return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
  }

  cumpleanios() {
    return '¡Felicidades! tienes ' + this.edad + ' años.';
  }

  estudiar() {
    return 'Estoy estudiando ' + this.carrera;
  }
  Universidad(){
    return 'Estoy en la ' + this.universidad + ' la universidad con convenio con mas de 300 paises. ';
  }
  EliminarSaludo(){
    this.nombre = undefined;
  }
  EliminarEdad(){
    this.edad = undefined;
  }
  EliminarCarrera(){
    this.carrera = undefined;
  }
  EliminarUniversidad(){
    this.universidad = undefined;
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona('Mateo', 18, 'Ingeniería Industrial', 'UCB');

// Inicializar los elementos HTML
const saludar = document.getElementById('saludar');
const edad = document.getElementById('edad');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');

//Crear saludos, edad, carrera, univerisdad
function botonSaludar() {
  saludar.textContent = persona.saludar();
}

function botonCumpleanios() {
  edad.textContent = persona.cumpleanios();
}

function botonEstudiar() {
  carrera.textContent = persona.estudiar();
}
function botonUniversidad() {
  universidad.textContent = persona.Universidad();
}
//Modificar saludo, edad, carrera, universidad
