// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.



let numero = prompt("Ingrese un número entero positivo:");

const cuentaCifras = (numero) => {
    if (numero < 0 || !Number.isInteger(numero)) {
        return "Ingrese un número entero positivo.";
    }

    if (numero == 0) {
        return 1;
    }

    let contador = 0;

    while (numero !== 0) {
        contador++;
        numero = Math.floor (numero / 10);
    }

    return contador;
};

const resultado = cuentaCifras (Number(numero));

console.log(`El número ${numero} tiene ${resultado} cifras.`);