// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros = prompt("Ingrese la cantidad de euros:");
let moneda = prompt("Ingrese la moneda a la que quiere convertir (dolares, yenes, libras):");


const convertirMoneda = (euros, moneda) => {

    let cambio;

    switch (moneda) {
        case "dolares":
        cambio = euros * 1.28611;
        console.log (cambio);
        break;

        case "yenes":
        cambio = euros * 129.852;
        console.log(cambio);
        break;

        case "libras":
        cambio = euros * 0.86;
        console.log(cambio);
        break;

        default:
        console.log("Solo dolares, yenes o libras");
    }
};

convertirMoneda (euros, moneda);