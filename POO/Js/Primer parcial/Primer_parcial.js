class Materia {
  constructor(nombremateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadinscrito, modalidad, calificacionMinimaAprobacion, temas, UbicaionLongitudLatitud) {
      this.nombremateria = nombremateria;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidadinscrito = cantidadinscrito;
      this.modalidad = modalidad;
      this.calificacionMinimaAprobacion = calificacionMinimaAprobacion;
      this.temas = temas;
      this.UbicaionLongitudLatitud = UbicaionLongitudLatitud;
  }

  // Métodos para mostrar la información de la materia
  NombreMateria() { return "El nombre de la materia es: " + this.nombremateria; }
  Sigla() { return 'la sigla de la materia es: ' + this.sigla; }
  Docente() { return 'El docente que da la materia es: ' + this.docente; }
  Horarios() { return 'Los días de clases que pasamos la clase son: ' + this.horarios; }
  Aula() { return 'El aula donde sufrimos con la materia es: ' + this.aula; }
  Prerequisito() { return 'Los requisitos para inscribir la materia es: ' + this.prerequisito; }
  Carrera() { return 'La carrera a la que pertenece es: ' + this.carrera; }
  Universidad() { return 'En la universidad ' + this.universidad + "la mejor universidad"; }
  CantidadInscrito() { return 'El número de torturados son: ' + this.cantidadinscrito; }
  Modalidad() { return "La modalidad de la materia es: " + this.modalidad;}
  CalificacionMinimaAprobacion() { return "La nota minima para aprobar la materia es de: " + this.calificacionMinimaAprobacion + "puntos";}
  Temas() { return "Los temas que se avanza en la materia son: " + this.temas;}
  ubicaionLongitudLatitud() { return "La ubicacion exacta de la materia es: " + this.UbicaionLongitudLatitud + "(no la doxee :p)";}

  // Métodos para modificar los atributos de la materia
  modificarNombreMateria() {
      const nuevoNombre = prompt('Ingresa la otra materia:', this.nombremateria);
      if (nuevoNombre) this.nombremateria = nuevoNombre;
  }

  modificarSigla() {
      const nuevaSigla = prompt('Pone la nueva sigla, porque cambiaron de pensum:', this.sigla);
      if (nuevaSigla) this.sigla = nuevaSigla;
  }

  modificarDocente() {
      const nuevoDocente = prompt('Ingrese el nombre del docente que entro recien:', this.docente);
      const letraRegex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios
      if (nuevoDocente && letraRegex.test(nuevoDocente)) this.docente = nuevoDocente;
      else alert('Por favor, ingrese solo letras y espacios para el nombre del docente.');
  }

  modificarHorarios() {
      const nuevosHorarios = prompt('Ingrese los horarios que le cambiaron:', this.horarios);
      if (nuevosHorarios) this.horarios = nuevosHorarios;
  }

  modificarAula() {
      const nuevaAula = prompt('Ingrese las nuevas aulas designadas:', this.aula);
      if (nuevaAula) this.aula = nuevaAula;
  }

  modificarPrerequisito() {
      const nuevoPrerequisito = prompt('Ingrese los nuevos prerquisitos que puso la U:', this.prerequisito);
      if (nuevoPrerequisito) this.prerequisito = nuevoPrerequisito;
  }

  modificarCarrera() {
      const nuevaCarrera = prompt('Ingrese la otra opcion:', this.carrera);
      if (nuevaCarrera) this.carrera = nuevaCarrera;
  }

  modificarUniversidad() {
      const nuevaUniversidad = prompt('Ingrese la seguna univerisdad en tus opciones:', this.universidad);
      if (nuevaUniversidad) this.universidad = nuevaUniversidad;
  }

  modificarCantidadInscrito() {
      const nuevaCantidad = prompt('Ingrese la nueva cantidad de estudiantes:', this.cantidadinscrito);
      if (nuevaCantidad) this.cantidadinscrito = nuevaCantidad;
  }
  
  modificarModalidad() {
      const nuevaModalidad = prompt('Ingrese la nueva modalidad de clases:', this.modalidad);
      const letraRegex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios
      if (nuevaModalidad && letraRegex.test(nuevaModalidad)) this.modalidad = nuevaModalidad;
      else alert('Por favor, ingrese solo letras y espacios para la modalidad.');
  }
  
  modificarCalificaionMinimaAprobacion() {
      const nuevaCalificionMinimaAprobacion = prompt('Ingrese la nueva nota minima de aprobacion:', this.calificacionMinimaAprobacion);
      if (nuevaCalificionMinimaAprobacion) this.calificacionMinimaAprobacion = nuevaCalificionMinimaAprobacion;
  }
  
  modificarTemas() {
      const nuevaTemas = prompt('Ingrese los nuevos temas con el pensum:', this.temas);
      const letraRegex = /^[a-zA-Z\s,]+$/; // Permite letras, espacios y comas
      if (nuevaTemas && letraRegex.test(nuevaTemas)) this.temas = nuevaTemas;
      else alert('Por favor, ingrese solo letras, espacios y comas para los temas.');
  }

  modificarUbicacionLatitudLongitud() {
      const nuevaLatitudLongitud = prompt('Ingrese la nueva latitud y longitud de las aulas:', this.UbicaionLongitudLatitud);
      if (nuevaLatitudLongitud) this.UbicaionLongitudLatitud = nuevaLatitudLongitud;
  }

  // Métodos para eliminar los atributos de la materia
  EliminarNombreMateria() { this.nombremateria = undefined; }
  EliminarSigla() { this.sigla = undefined; }
  EliminarDocente() { this.docente = undefined; }
  EliminarHorarios() { this.horarios = undefined; }
  EliminarAula() { this.aula = undefined; }
  EliminarPrerequisito() { this.prerequisito = undefined; }
  EliminarCarrera() { this.carrera = undefined; }
  EliminarUniversidad() { this.universidad = undefined; }
  EliminarCantidadInscrito() { this.cantidadinscrito = undefined; }
  EliminarModalidad() { this.modalidad = undefined; }
  EliminarCalificaionMinimaAprobacion() { this.calificacionMinimaAprobacion = undefined; }
  EliminarTemas() { this.temas = undefined; }
  EliminarUbicacionLatitudLongitud() { this.UbicaionLongitudLatitud = undefined; }
}

// Lista de materias
let materias = [
  new Materia('Calulo 1', 'MAT-030', 'Victor Hugo Aspiazu Melgar', '[Lunes 7:30-9:00, Miercoles 7:30-9:00]', '10 A-N4', 'Matematica básica', 'Ingeniería Industrial', 'UCB', 34, "presencial", 60, "Funciones, limites de funciones, derivadas, integrales", "-17.694128964064742, -63.151576974546586"),
  new Materia('Física 1', 'FIS-111', 'Victor Hugo Lobp', '[Lunes 9:10-10:40, Miercoles 9:10-10:40]', '[E 2-5]', 'Ninguno', 'Ingeniería Industrial', 'UCB', 45, "Presencial", 60, "Magnitudes, unidades, fisicas; cinematica, Dinamica y estatica, fundamentos de la energia mecanica", "-17.694128964064742, -63.151576974546586"),
  new Materia('Manufactura y Mecanizado', 'IND-112', 'Jorge Salvatierra', '[Martes 7:30-9:00- Jueves 7:30-9:00, Viernes 7:30-9:00]', '[12 AULA A-N4], [F 1-2 (LAB. PROCESOS)]', 'Introducción a Diseño industrial', 'Ingeniería Industrial', 'UCB', 15, "Presencial", 60, "Procesos de manufactura avanzados, Maquinado de precisión, Metrología y control de calidad,Gestión de procesos de manufatcura", "-17.694128964064742, -63.151576974546586"),
  new Materia('Antropología Cultural', 'ANT-201', 'Margarita de la Barra', '[Martes 9:10-10:40, Jueves 9:10-10:40]', '[4 AULA A-N3], B 2-1', 'Ninguno', 'Ingenieria Industrial', 'UCB', 61, "presencial", 60, "Antropología cultural, Teorías antropológicas, Antropología aplicada, Valores y ética en la antropología", "-17.694128964064742, -63.151576974546586"),
  new Materia('Probabilidad Y Estadistica 1', 'MAT142', 'Carmen Silvia Barca', '[Martes 10:50-12:20, Jueves 10:50-12:20]', '[D 2-1 (LAB. CÓMPUTO 2)]', 'Ninguno', 'Ingienria Industrial', 'UCB', 33, "presencial", 60, "Distribuciones de probabilidad, Teoremas fundamentales, Inferencia estadística, Regresión y correlación", "-17.694128964064742, -63.151576974546586"),
  new Materia('Laboratorio Fisica 1', 'FIS-111', 'Roberto Carlos Alvarez', '[Miercoles 12:30- 13:15]', 'LAB. DE PROCESOS F1-2', 'Ninguno', 'Ingenieria Industrial', 'Universidad XYZ', 17, "presencial", 60, "Experimentos básicos de mecánica, Cinemática y dinámica, Trabajo y energía, Otros temas según el enfoque del curso", "-17.694128964064742, -63.151576974546586"),
  new Materia('Programación 1', 'SIS-112', 'Eddy Escalante', '[Lunes 10:50-12:20, Viernes 10:50-11:35]', '[C 2-2 (LAB. CÓMPUTO 5)]', 'Ninguno', 'Introduccion a la programación', 'UCB', 16, "presencial", 60, "Estructuras de datos básicas, Algoritmos de ordenación y búsqueda, Programación orientada a objetos, Manejo de errores y excepciones", "-17.694128964064742, -63.151576974546586")
];

// Cargar el selector con las materias
const materiaSelect = document.getElementById('materiaSelect');
materias.forEach((materia, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = materia.nombremateria;
  materiaSelect.appendChild(option);
});

// Mostrar la materia seleccionada
function mostrarMateria() {
  const selectedIndex = materiaSelect.value;
  const materia = materias[selectedIndex];

  document.getElementById('NombreMateria').textContent = materia.NombreMateria();
  document.getElementById('Sigla').textContent = materia.Sigla();
  document.getElementById('Docente').textContent = materia.Docente();
  document.getElementById('Horarios').textContent = materia.Horarios();
  document.getElementById('Aula').textContent = materia.Aula();
  document.getElementById('Prerequisito').textContent = materia.Prerequisito();
  document.getElementById('Carrera').textContent = materia.Carrera();
  document.getElementById('Universidad').textContent = materia.Universidad();
  document.getElementById('CantidadInscrito').textContent = materia.CantidadInscrito();
  document.getElementById('Modalidad').textContent = materia.Modalidad();
  document.getElementById('CalificacionMinimaAprobacion').textContent = materia.calificacionMinimaAprobacion();
  document.getElementById('Temas').textContent = materia.Temas();
  document.getElementById('UbicaionLatitudLongitud').textContent = materia.ubicaionLongitudLatitud();
}

// Modificar la materia seleccionada
function modificarMateria() {
  const selectedIndex = materiaSelect.value;
  const materia = materias[selectedIndex];

  materia.modificarNombreMateria();
  materia.modificarSigla();
  materia.modificarDocente();
  materia.modificarHorarios();
  materia.modificarAula();
  materia.modificarPrerequisito();
  materia.modificarCarrera();
  materia.modificarUniversidad();
  materia.modificarCantidadInscrito();
  materia.modificarModalidad();
  materia.modificarCalificaionMinimaAprobacion();
  materia.modificarTemas();
  materia.modificarUbicacionLatitudLongitud();

  // Actualizar el selector después de la modificación
  materiaSelect.options[selectedIndex].textContent = materia.nombremateria;
  mostrarMateria();
}

// Eliminar la materia seleccionada
function eliminarMateria() {
  const selectedIndex = materiaSelect.value;
  materias.splice(selectedIndex, 1);  // Elimina la materia de la lista

  // Actualizar el selector después de la eliminación
  materiaSelect.remove(selectedIndex);
  limpiarMostrar();
}

// Limpiar la sección de mostrar materia
function limpiarMostrar() {
  document.getElementById('NombreMateria').textContent = '';
  document.getElementById('Sigla').textContent = '';
  document.getElementById('Docente').textContent = '';
  document.getElementById('Horarios').textContent = '';
  document.getElementById('Aula').textContent = '';
  document.getElementById('Prerequisito').textContent = '';
  document.getElementById('Carrera').textContent = '';
  document.getElementById('Universidad').textContent = '';
  document.getElementById('CantidadInscrito').textContent = '';
  document.getElementById('Modalidad').textContent = '';
  document.getElementById('CalificacionMinimaAprobacion').textContent = '';
  document.getElementById('Temas').textContent = '';
  document.getElementById('UbicacionLatitudLongitud').textContent = '';
}
