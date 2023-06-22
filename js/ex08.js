// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar.

const rellenarArray = () => {

    let array = [];

    for (let i = 0; i < 10; i++) {
        const valor = prompt ("Ingrese el valor para la posición " + i );
        array.push(valor);
    }

    return array;
};

const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("Índice " + i + " | Valor " + array[i]);
    }
};

const miArray = rellenarArray();
mostrarArray(miArray);