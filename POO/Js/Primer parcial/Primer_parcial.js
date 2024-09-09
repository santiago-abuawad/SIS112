class Materia {
    constructor(nombremateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadInscritos) {
      this.nombremateria = nombremateria;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidadInscritos = cantidadInscritos;
    }
  
    nombreDemateria() { 
      return 'Esta es la materia: ' + this.nombremateria;
    }
  
    Sigla() {
      return 'La sigla de '+ this.nombremateira + 'es: ' + this.sigla;
    }
  
    Docente() {
      return 'El docente de '+ this.nombremateria + 'es' + this.docente;
    }
    
    Horario() {
        return 'La hora de la que pasa la materia de '+ this.nombremateria + 'es' + this.horarios;
    }
    
    Aula() {
        return 'La aula de '+ this.nombremateria + 'es' + this.aula;
    }
    
    Prerequisito() {
        return 'El prerequisito de '+ this.nombremateria + 'es' + this.prerequisito;
    }

    CantidadDeInscritos() {
        return 'La cantidad inscritos de '+ this.nombremateria + 'es' + this.cantidadInscritos;
    }

    Universidad(){
      return 'Estoy en la ' + this.universidad + ', la universidad con mayor prestigio. ';
    }
   
   //Elminiar atributos
    EliminarNombreMateria(){
      this.nombremateria = undefined;
    }
    EliminarSigla(){
      this.sigla = undefined;
    }
    EliminarDocente(){
      this.docente = undefined;
    }

    EliminarHorario(){
        this.horarios = undefined;
    }

    EliminarAula(){
        this.aula = undefined;
    }

    EliminarPrequisitos(){
        this.prerequisito = undefined;
    }

    EliminarCantidadDeInscritos(){
        this.cantidadInscritos = undefined;
    }

    EliminarUniversidad(){
      this.universidad = undefined;
    }
  }
  
  // Crear una instancia de la clase Materia
  const materia1 = new Materia('Victor Hugo Aspiazu', 'Calculo 1', '[Lunes 7:30-9:00, Miercoles 7:30-9:00]','10 A-N4', 'MAT-030', 'Ingeneria Industrial', 'UCB', 34);
  const materia2 = new Materia('Eddy Escalante', 'Programacion 1', '[Lunes 10:50-12:20, Viernes 10:50-11:35]', ' [C 2-2 (LAB. CÓMPUTO 5)]', 'SIS-112', 'Ingeniería Industrial', 'UCB', 16);
  const materia3 = new Materia('Victor Hugo Lobo', 'Fisica 1', '[Lunes 9:10-10:40, Miercoles 9:10-10:40]', '[E 2-5]', 'FIS-111', 'Ingeniería Industrial', 'UCB', 45);
  const materia4 = new Materia('Jorge Salvatierra','Manufactura y mecanizado', '[Martes 7:30-9:00- Jueves 7:30-9:00, Viernes 7:30-9:00]', '[12 AULA A-N4], [F 1-2 (LAB. PROCESOS)]', 'Ingeniería Industrial', 'UCB', 15);
  const materia5 = new Materia('Gabriela Exalta de la Barra','Antropologia Y valores', '[Martes 9:10-10:40, Jueves 9:10-10:40]', '[4 AULA A-N3], B 2-1', 'FHC-101','Ingeniería Industrial', 'UCB', 61);
  const materia6 = new Materia('Carmen Silvia Barca', 'Probabilidad y estadistica 1','[Martes 10:50-12:20, Jueves 10:50-12:20]','[D 2-1 (LAB. CÓMPUTO 2)]', 'Ingeniería Industrial', 'UCB', 33);
  const materia7 = new Materia('Roberto Carlos Alvarez', 'Laboratorio Fisica 1','[Miercoles 12:30- 13:15]', 'Ingeniería Industrial', 'UCB');
  
  // Inicializar los elementos HTML
  const Nombre_De_Materia = document.getElementById('Nombre De Materia');
  const Sigla = document.getElementById('Sigla');
  const Docente = document.getElementById('Docente');
  const Horario = document.getElementById('Horarios');
  const Aula = document.getElementById('Aula');
  const Cantidad_De_Inscritos = document.getElementById('Cantidad de Inscritos');
  const universidad = document.getElementById('Universidad');
  
  //Creacion de botones
  function botonNombreMateria() {
    nombreMateria.textContent = persona.nombreMateria();
  }
  
  function botonSigla() {
    sigla.textContent = persona.Sigla();
  }
  
  function botonDocente() {
    docente.textContent = persona.Docente();
  }
  function botonHorario() {
    horario.textContent = persona.Horario();
  }

  function botonAula() {
    aula.textContent = persona.Aula();
  }

  function botonCantidadDeInscritos() {
    cantidadInscritos.textContent = persona.CantidadDeInscritos();
  }

  function botonUniverdad() {
    Universidad.textContent = persona.universidad();
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