// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let pregunta = prompt ("Ingrese el número correspondiente para calcular el área: 1-Círculo / 2-Triangulo / 3-Cuadrado");


const areaCirculo = (radio) => {
    let resultado = (radio**2) * Math.PI;
    return resultado;
}

const areaTriangulo = (base, altura) => {
    let resultado = (base * altura) / 2;
    return resultado;
}

const areaCuadrado = (lado) => {
    let resultado = lado * lado;
    return resultado;
}


if (pregunta == 1) {
    let radio = prompt ("Ingrese el radio del círculo:");
    let aCirculo = areaCirculo (radio);
    console.log (aCirculo);

} else if (pregunta == 2) {
    let base = prompt ("Ingrese la base del triángulo:");
    let altura = prompt ("Ingrese la altura del triángulo:");
    let aTriangulo = areaTriangulo (base, altura);
    console.log (aTriangulo);

} else if (pregunta == 3) {
    let lado = prompt ("Ingrese la longitud del lado del cuadrado:");
    let aCuadrado = areaCuadrado (lado);
    console.log (aCuadrado);

} else {
    alert ("Ingrese una opción válida.")
}
