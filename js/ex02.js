// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.


const generarNumeroAleatorio = (min, max) => {
    min = Math.ceil (min); 
    max = Math.floor (max); 
    return Math.round (Math.random() * (max - min) + min);
}

let rangoMin = (prompt("Ingrese el número mínimo del rango:"));
let rangoMax = (prompt("Ingrese el número máximo del rango:"));
let numeros = (prompt ("Ingresa la cantidad de números a generar:") );

console.log ("Números aleatorios generados:");

for (let i = 0; i < numeros; i++) {
    let numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
    console.log(numeroAleatorio);
}