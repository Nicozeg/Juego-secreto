// Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// funcion para parrao y encabezado
function asignarTextoElemento (elemento , texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// funcion para evaluar los numeros

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento ('p',`¡Acertaste el numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento ('p',"Fallaste, el numero es menor.");
        } else {
        asignarTextoElemento ('p',"Fallaste, el numero es mayor.");
        }
    }
        intentos++;
        limpiarCaja();
    return;
}

// Funcion para generar numero secreto

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles')
    }else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// funcion para limpiar la caja numerica

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales () {
    asignarTextoElemento('h1',"Juego del numero secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja ();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

condicionesIniciales();