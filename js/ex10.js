// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites


let tamañoArray = prompt("Ingrese el tamaño del array:");

const esPrimo = (numero) => {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
        return false;
        }
    }

    return true;
};

const numerosPrimosAleatorios = (tamaño, min, max) => {
    let array = [];

    while (array.length < tamaño) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        if (esPrimo(numeroAleatorio)) {
        array.push(numeroAleatorio);
        }
    }

    return array;
};

const encontrarMayor = (array) => {
    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
        mayor = array[i];
        }
    }

    return mayor;
};

let miArray = numerosPrimosAleatorios(tamañoArray, 1, 100);
let mayor = encontrarMayor(miArray);

console.log("Array de números primos:", miArray);
console.log("El mayor número es:", mayor);