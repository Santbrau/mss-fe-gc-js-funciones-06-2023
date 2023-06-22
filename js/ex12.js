// 12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.


let tamañoArray = prompt("Ingrese el tamaño del array:");

let digito = prompt("Ingrese el dígito para filtrar la array");


const generarArrayAleatorio = (tamaño) => {
    let array = [];

    for (let i = 0; i < tamaño; i++) {
        let numero = Math.floor(Math.random() * 300) + 1;
        array.push(numero);
    }

    return array;
};

const filtrarArray = (array, digito) => {
    const numerosFiltrados = [];

    for (let i = 0; i < array.length; i++) {
        let ultimoDigito = array[i] % 10; 

    if (ultimoDigito == digito) {
        numerosFiltrados.push(array[i]);
        }
    }

    return numerosFiltrados;
};

const arrayNumeros = generarArrayAleatorio(tamañoArray);

if (!isNaN(digito) && digito >= 0 && digito <= 9) {
    const numerosFiltrados = filtrarArray(arrayNumeros, digito);

    console.log("Array original:", arrayNumeros);
    console.log(`Números terminados en ${digito}:`, numerosFiltrados);
} else {
    console.log("El dígito no es válido.");
}