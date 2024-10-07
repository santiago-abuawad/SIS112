class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.mostrarLista();
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
        this.mostrarLista();
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
        this.mostrarLista();
    }

    mostrarLista() {
        const listaElement = document.getElementById('listaCadenas');
        listaElement.innerHTML = '';
        this.lista.forEach(cadena => {
            const li = document.createElement('li');
            li.textContent = cadena;
            listaElement.appendChild(li);
        });
    }
}

const listaCadenas = new ListaCadenas();
listaCadenas.agregar('Hola');
listaCadenas.agregar('Mundo');
listaCadenas.agregar('UCB');

//Retornar la cadena con mayor caracteres
/*
//var = let
//------------------------------------Hola
var a = listaCadenas.lista[0]
console.log(a);
var aCent = a.length;
console.log(aCent);
//------------------------------------Mundo
var b = listaCadenas.lista[1]
console.log(b);
var bCent = b.length
console.log(bCent);
//------------------------------------UCB
var c = listaCadenas.lista[2]
console.log(c);
var cCent = c.length
console.log(cCent);
//-------------------------------------Busca el mayor

var mayor = 0;
var posicion = -1
if(aCent > mayor) {
    mayor =aCent;
    posicion = 0;
}
//-------

if(bCent > mayor) {
    mayor = bCent;
    posicion = 1;
}
//-------
if(cCent > mayor) {
    mayor = cCent;
    posicion = 2;
}
//-------
console.log("La mayor cantidad de caracteres tiene: " + mayor);
console.log("La cadena con mayor cantidad de caracteres es: " + listaCadenas.lista[posicion])
*/

//realizar el mismo ejercicio utilizando un for 
// var = let
//------------------------------------
let mayor = 0;
let posicion = -1;

// Iteramos sobre listaCadenas.lista
for (let i = 0; i < listaCadenas.lista.length; i++) {
    let cadena = listaCadenas.lista[i];
    let longitud = cadena.length;
    
    console.log(cadena);
    console.log(longitud);

    // Verificamos si es la mayor longitud
    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}

// Mostramos el resultado
console.log("La mayor cantidad de caracteres tiene: " + mayor);
console.log("La cadena con mayor cantidad de caracteres es: " + listaCadenas.lista[posicion]);


console.log(listaCadenas.lista); // Imprime: ['Hola', 'Mundo', 'UCB']










document.getElementById('btnAgregar').onclick = () => {
    const valor = document.getElementById('inputValor').value.trim();
    if (valor) {
        listaCadenas.agregar(valor);
        document.getElementById('inputValor').value = '';
    }
};

document.getElementById('btnEliminar').onclick = () => {
    const valor = document.getElementById('inputEliminar').value.trim();
    if (valor) {
        listaCadenas.eliminar(valor);
        document.getElementById('inputEliminar').value = '';
    }
};

document.getElementById('btnBuscar').onclick = () => {
    const valor = document.getElementById('inputBuscar').value.trim();
    const index = listaCadenas.buscar(valor);
    if (index !== -1) {
        alert(`Cadena encontrada en el índice: ${index}`);
    } else {
        alert('Cadena no encontrada.');
    }
};

document.getElementById('btnOrdenar').onclick = () => {
    listaCadenas.ordenar();
};