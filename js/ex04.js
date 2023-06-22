// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
// si introducimos un 5, realizará esta operación 5*4*3*2*1=120.


let numero = prompt("Ingrese un número para calcular el factorial:");

const calcularFactorial = (numero) => {
    if (numero < 0) {
        return "Ingrese un número positivo.";

    } else if (numero == 0) {
        return 1;

    } else {
        let factorial = 1;
        for (let i = numero; i >= 1; i--) {
        factorial *= i;
        }
        return factorial;
    }
};

let resultado = calcularFactorial(numero);

console.log(resultado);