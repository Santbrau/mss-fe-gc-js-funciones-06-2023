// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
// para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.


let tamañoArray = prompt("Ingrese el tamaño del array:");

const rellenarArray = (tamaño, min, max) => {
    const array = [];

    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(numero);
    }

    return array;
};

const mostrarArrayYSuma = (array) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        console.log("Posición " + i + " | Valor " + array[i]);
        suma += array[i];
    }

    console.log("La suma es:" + suma);
};

let miArray = rellenarArray(tamañoArray, 0, 9);
mostrarArrayYSuma(miArray);