// Desde que llegaste al Dojo, querías una de esas geniales sudaderas de Coding Dojo, tal vez más de una. Digamos que cuestan $20 (impuestos incluidos), pero el amigable Josh ofrece un descuento del 9% si compras dos, un buen descuento del 19% si compras tres o un descuento del 35% si compras cuatro o más.
// Solo acepta efectivo y dice que no tiene monedas, por lo que debes redondear al dólar más cercano. Construye la función sweatshirtPricing(num) que, dado un número de sudaderas, devuelve el costo.

function sweatshirtPricing(num) {
    const price = 20;
    let total = num * price;


    if (num === 2) {
        total *= 0.91;
    } else if (num === 3) {
        total *= 0.81;
    } else if (num >= 4) {
        total *= 0.65;
    }

    return Math.round(total);
};

console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4)); // una locura comprar solo 3...


// Regresa a tu solución clockHandAngles anterior. Permite valores fraccionarios para los segundos de entrada, pero cambia tu implementación para imprimir solo valores enteros para los ángulos (en grados) de las distintas manecillas.

function clockHandAngles(seconds) {
    // Calcular los grados de cada manecilla con valores fraccionarios
    const secDegrees = seconds / 60 * 360;
    const minDegrees = secDegrees / 60 + (seconds % 60) / 60 * 30;
    const hourDegrees = minDegrees / 12 + (seconds % 3600) / 3600 * 30;

    // Redondear los grados a números enteros
    const secAngle = Math.round(secDegrees);
    const minAngle = Math.round(minDegrees);
    const hourAngle = Math.round(hourDegrees);

    // Imprimir los ángulos de las manecillas
    console.log(`Manecilla de la hora: ${hourAngle} grados.`);
    console.log(`Manecilla de los minutos: ${minAngle} grados.`);
    console.log(`Manecilla de los segundos: ${secAngle} grados.`);
};

clockHandAngles(3600);