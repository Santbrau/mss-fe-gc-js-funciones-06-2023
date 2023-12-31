// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba


let numeroDecimal = prompt ("Ingrese un número decimal para convertirlo a binario:");

const decimalABinario = (numero) => {
    if (numero == 0) {
        return "0";
    }

    let resultado = "";

    while (numero > 0) {
        resultado = (numero % 2) + resultado;
        numero = Math.floor(numero / 2);
    }

    return resultado;
};

let resultadoBinario = decimalABinario (numeroDecimal);

console.log (resultadoBinario);