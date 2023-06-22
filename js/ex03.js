// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si
// es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí
// mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si
// es primo.

let numero = prompt ("Ingrese un número para saber si es un número primo:")
let esprimo = true;

const esPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
        return false;
        }
    }

    return true;
};

if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}