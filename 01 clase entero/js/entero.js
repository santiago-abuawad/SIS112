class Entero {
    // Atributos
    Num;

    // Constructor = inicializa el objeto
    constructor(Numero) {
        this.Num = Numero;
    }

    // CLASS - Cargar el valor de Num desde un input HTML
    setNum() {
        const input = document.getElementById("numeroInput");
        this.Num = parseInt(input.value, 10);
    }

    // CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    // CLASS - Mostrar el valor de Num
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    IncrementarNum() {
        this.Num = this.Num + 1;
    }

    DecrementarNum() {
        this.Num = this.Num - 1;
    }

    esParImpar() {
        return (this.Num % 2 == 0);
    }

    esPositivoNegativo() {
        if (this.Num > 0) {
            return "Es positivo";
        } else if (this.Num < 0) {
            return "Es negativo";
        } else {
            return "Es cero";
        }
    }

    esPerfecto() {
        var suma = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i == 0) {
                suma += i;
            }
        }
        return suma === this.Num;
    }

    factorial() {
        var factorial = 1;
        for (let i = 1; i <= this.Num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Método para calcular los primeros n números de Fibonacci
    Fibonacci() {
        let n = this.Num; // Usa el valor de `this.Num` como el número de elementos
        if (n <= 0) {
            return [];
        }

        let fibSecuencia = [];
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            fibSecuencia.push(a);
            let temp = a;
            a = b;
            b = temp + b;
        }

        return fibSecuencia;
    }
}

// Crear el objeto
var ClaseEntero = new Entero(0);

// Las funciones = botones HTML
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

// Incrementar el valor de Num
function IncrementarValor() {
    ClaseEntero.IncrementarNum();
    ClaseEntero.showNum();
}

// Decrementar el valor de Num
function DecrementarValor() {
    ClaseEntero.DecrementarNum();
    ClaseEntero.showNum();
}

// Verifica si es par o impar
function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "El número es Par" : "El número es Impar";
    ClaseEntero.showResultado(resp);
}

// Verificar si es positivo o negativo
function esPositivoNegativoNum() {
    var respuesta = ClaseEntero.esPositivoNegativo();
    ClaseEntero.showResultado(respuesta);
}

// Verificar si es perfecto
function esPerfectoNum() {
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "El número es Perfecto" : "El número no es Perfecto";
    ClaseEntero.showResultado(resp);
}

// Calcular el factorial
function factorialNum() {
    var respuesta = ClaseEntero.factorial();
    ClaseEntero.showResultado(respuesta);
}

// Mostrar la secuencia de Fibonacci con el número de elementos especificado por el usuario
function fibonacciNum() {
    ClaseEntero.setNum(); // Asegúrate de actualizar el número límite
    var respuesta = ClaseEntero.Fibonacci();
    ClaseEntero.showResultado(respuesta.join(", ")); // Convierte el array a una cadena de texto
}
