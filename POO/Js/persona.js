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
    return 'Estoy en la ' + this.universidad + ', la universidad con mayor prestigio. ';
  }
  EliminarSaludar(){
    this.nombre = undefined;
  }
  Eliminarcumpleanios(){
    this.edad = undefined;
  }
  EliminarEstudiar(){
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

//Creacion de botones
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

//Modificar botones 
function validarTexto(input) {
  return /^[A-Za-z\s]+$/.test(input);
}
function validarEdad(input) {
  const numero = Number(input);
  return !isNaN(numero) && numero >= 0;
}
function botonModificarSaludar() {
  let nuevoNombre = prompt('Ingresa tu nueva identidad:');
  if (nuevoNombre !== null && validarTexto(nuevoNombre)) {
    persona.nombre = nuevoNombre;
    saludar.textContent = persona.saludar();
  } else {
    alert('Por favor, no existen nombres en numeros');
  }
}

function validarTexto(input) {
  return /^[A-Za-z\s]+$/.test(input);
}

function botonModificarCumpleanios() {
  let nuevaEdad = prompt('Pone tu nueva edad guap@:');
  if (nuevaEdad !== null && validarEdad(nuevaEdad)) {
    persona.edad = nuevaEdad;
    edad.textContent = persona.cumpleanios();
  } else {
    alert('Esa edad no existe, tontito.');
  }
}
function botonModificarEstudiar() {
  let nuevaCarrera = prompt('Ingresa a la carrera de segunda opcion:');
  if (nuevaCarrera !== null && validarTexto(nuevaCarrera)) {
    persona.carrera = nuevaCarrera;
    carrera.textContent = persona.estudiar();
  } else {
    alert('Por favor, ingresa una carrera real.');
  }
}
function botonModificarUniversidad() {
  let nuevaUniversidad = prompt('Ingresa la nueva universidad y porque la gabriel:');
  if (nuevaUniversidad !== null && validarTexto(nuevaUniversidad)) {
    persona.universidad = nuevaUniversidad;
    universidad.textContent = persona.Universidad();
  } else {
    alert('Por favor, no te hagas y pone la gabriel yo se que si.');
  }
}

//Eliminar botones
function BotonEliminarSaludar(){
  saludar.textContent = ''
}
function BotonEliminarCumpleanios(){
  edad.textContent = ''
}
function BotonEliminarEstudiar(){
  carrera.textContent = ''
}
function BotonEliminarUniversidad(){
  universidad.textContent = ''
}