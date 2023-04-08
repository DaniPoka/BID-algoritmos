// Crea la función extractDigit(num, digitNum) que, dado un número y un número de dígito, devuelve el valor numérico de ese dígito. 0 representa el dígito de las unidades, 1 representa el dígito de las decenas, etc. Dado (1824,2), devuelve 8. Dado (1824,0), devuelve 4. Dado (1824,7), devuelve 0.
// Segundo: maneja valores de digitNum negativos, donde -1 represente al dígito de las décimas (0.x), -2 represente el dígito de las centésimas (0.0x), etc. Dado (123.45, -1), devuelve 4.
// Tercero: maneja también los valores num negativos, haciendo lo que creas apropiado.

function extractDigit(num, digitNum) {

    const isNegative = num < 0;
    if (isNegative) num = Math.abs(num);
    const isFractional = digitNum < 0;
    if (isFractional) {
        const multiplier = Math.pow(10, -digitNum);
        num = Math.floor(num * multiplier) % 10;
    } else {
        const numString = num.toString();
        const length = numString.length;
        const targetIndex = length - digitNum - 1;
        if (targetIndex < 0 || targetIndex >= length) return 0;
        const targetChar = numString.charAt(targetIndex);
        num = parseInt(targetChar);
    }
    if (isNegative) num *= -1;
    return num;
};

console.log(extractDigit(-123.45, -1));
console.log(extractDigit(1824, 2));

// Dado un número de cualquier tamaño, devuelve el dígito más significativo. Si ya sabes qué son las strings (cadenas), ¡es genial! Sin embargo, no las uses aquí :-).
// Sugerencia: usa WHILE para traer el dígito más significativo a un rango en el que puedas usar el amigable operador de módulo (%). El dígito más significativo es el dígito distinto de cero situado más a la izquierda de un número. Dado 12345, devuelve 1. Dado 67,89, devuelve 6. Dado 0,00987, devuelve 9.
// Segundo: maneja también los valores num negativos, haciendo lo que creas apropiado.

function mostSignificantDigit(num) {
    num = Math.abs(num);
    if (num < 10) {
        return num;
    }
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    return num;
};

console.log(mostSignificantDigit(-12345));
console.log(mostSignificantDigit(67.89));
