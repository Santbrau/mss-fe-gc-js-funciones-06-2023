// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array.


let tamañoArray = prompt ("Ingrese el tamaño de los arrays:");


const generarArrayAleatorio = (tamaño) => {
    let array = [];

    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * 10); 
        array.push(numero);
    }

    return array;
};

const reasignarValoresArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 10); 
    }
};

const multiplicarArrays = (array1, array2) => {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i] * array2[i]); 
    }

    return resultado;
};

let array1 = generarArrayAleatorio(tamañoArray);
let array2 = [...array1]; 

reasignarValoresArray(array2);

let arrayResultado = multiplicarArrays(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array multiplicada:", arrayResultado);