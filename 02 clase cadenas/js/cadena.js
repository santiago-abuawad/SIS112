class Cadena {
  constructor(cadena) {
    this.cadena = cadena;
  }

  getCadena() {
    // Obtiene el valor asignado a la cadena
    return this.cadena;
  }

  // Manipulación de cadenas
  concatenar(otraCadena) {
    // Une una cadena con otra
    this.cadena += otraCadena;
  }

  invertir() {
    // Invierte los caracteres de la cadena
    let cadenaInvertida = '';
    for (let i = this.cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += this.cadena[i];
    }
    this.cadena = cadenaInvertida;
  }

  // Comparaciones
  esVacia() {
    // Compara si la cadena no tiene caracteres
    return this.cadena.length === 0;
  }

  contiene(subcadena) {
    // Compara si la subcadena existe dentro de la cadena
    return this.cadena.includes(subcadena);
  }

  comienzaCon(prefijo) {
    // Compara si la cadena comienza con el prefijo
    return this.cadena.startsWith(prefijo);
  }

  terminaCon(sufijo) {
    // Compara si la cadena termina con el sufijo
    return this.cadena.endsWith(sufijo);
  }

  // Otras operaciones
  longitud() {
    // Obtiene la cantidad de caracteres que tiene la cadena
    return this.cadena.length;
  }

  aMayusculas() {
    // Obtiene la cadena transformada en MAYÚSCULA
    return this.cadena.toUpperCase();
  }

  aMinusculas() {
    // Obtiene la cadena transformada en minúscula
    return this.cadena.toLowerCase();
  }

  // Transformación de números a números romanos
  static numeroARomano(numero) {
    const romanos = [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    let resultado = '';
    for (const [letra, valor] of romanos) {
      while (numero >= valor) {
        resultado += letra;
        numero -= valor;
      }
    }
    return resultado;
  }

  // Generación de Texto Aleatorio
  static generarTextoAleatorio(cantidad) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
    let resultado = '';
    for (let i = 0; i < cantidad; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
  }

  // Transformación de ASCII a Texto
  static asciiATexto(ascii) {
    return String.fromCharCode(ascii);
  }
}

let cadena = new Cadena('');

// Función para manejar la ejecución desde la interfaz
function ejecutar(metodo) {
  const input = document.getElementById('inputCadena');
  const resultadoDiv = document.getElementById('resultado');
  const valorInput = input.value;

  switch (metodo) {
    case 'getCadena':
      resultadoDiv.innerHTML = `Cadena: ${cadena.getCadena()}`;
      break;
    case 'concatenar':
      cadena.concatenar(valorInput);
      resultadoDiv.innerHTML = `Cadena actual: ${cadena.getCadena()}`;
      break;
    case 'invertir':
      cadena.invertir();
      resultadoDiv.innerHTML = `Cadena invertida: ${cadena.getCadena()}`;
      break;
    case 'esVacia':
      resultadoDiv.innerHTML = `¿Es vacía?: ${cadena.esVacia()}`;
      break;
    case 'contiene':
      resultadoDiv.innerHTML = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
      break;
    case 'comienzaCon':
      resultadoDiv.innerHTML = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
      break;
    case 'terminaCon':
      resultadoDiv.innerHTML = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
      break;
    case 'longitud':
      resultadoDiv.innerHTML = `Longitud: ${cadena.longitud()}`;
      break;
    case 'aMayusculas':
      resultadoDiv.innerHTML = `A mayúsculas: ${cadena.aMayusculas()}`;
      break;
    case 'aMinusculas':
      resultadoDiv.innerHTML = `A minúsculas: ${cadena.aMinusculas()}`;
      break;
    case 'numeroARomano':
      resultadoDiv.innerHTML = `Número a romano: ${Cadena.numeroARomano(parseInt(valorInput))}`;
      break;
    case 'generarTextoAleatorio':
      resultadoDiv.innerHTML = `Texto aleatorio: ${Cadena.generarTextoAleatorio(parseInt(valorInput))}`;
      break;
    case 'asciiATexto':
      resultadoDiv.innerHTML = `ASCII a texto: ${Cadena.asciiATexto(parseInt(valorInput))}`;
      break;
    default:
      resultadoDiv.innerHTML = 'Método no reconocido.';
  }
}