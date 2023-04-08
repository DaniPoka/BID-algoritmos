// Crea threesFives() que agrega valores de 100 y 4000000 (inclusive) si ese valor es divisible por 3 o 5, pero no ambos. Muestra la suma final en la consola.
// Segundo: Crea betterThreesFives(start, end) que te permite ingresar valores iniciales y finales arbitrarios para tu rango. Piensa en threesFives() como betterThreesFives(100,4000000).

function threesFives() {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log(sum);
};

function betterThreesFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    console.log(sum);
};

threesFives();
betterThreesFives(57, 503);
betterThreesFives(1, 20);

// El cambio es inevitable (especialmente al usar un billete de veinte). Crea generateCoinChange(cents). Acepta una serie de centavos estadounidenses, calcula e imprime cómo representar esa cantidad con la menor cantidad de monedas. 
// La moneda común estadounidense son los centavos, los nickels (5 centavos), dimes (10 centavos) y quarters (25 centavos).

function generateCoinChange(cents) {
    let monedas = { 25: 0, 10: 0, 5: 0, 1: 0, 50: 0, 100: 0 }; // objeto con valores iniciales de monedas

    [100, 50, 25, 10, 5, 1].forEach(function (moneda) {
        let cantidad = Math.floor(cents / moneda); // redondear hacia abajo
        cents -= cantidad * moneda; // restar la cantidad de monedas del valor en centavos
        monedas[moneda] = cantidad; // actualizar la cantidad de monedas
    });

    console.log(`Dollars: ${monedas[100]}`);
    console.log(`Half dollars: ${monedas[50]}`);
    console.log(`Quarters: ${monedas[25]}`);
    console.log(`Dimes: ${monedas[10]}`);
    console.log(`Nickels: ${monedas[5]}`);
    console.log(`Pennies: ${monedas[1]}`);
};

generateCoinChange(105);

// Escribe una función que console.log el número 1, luego "chick", luego "boom", luego "chick", luego 2, luego "chick", "boom", "chick", continuando el mismo ciclo para cada número hasta (incluido) 12.

function chickBoom() {
    for (let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
};

chickBoom();

// Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de los dos anteriores, comenzando con los valores 0 y 1. Tu función debe aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponde al valor cuatro más tarde, etc.).
// Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1)+fib(2), o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

function fibonacci(index) {
    if (index === 0) {
        return 0;
    } else if (index === 1) {
        return 1;
    } else {
        let fibArray = [0, 1];
        for (let i = 2; i <= index; i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
        return fibArray[index];
    }
};

console.log(fibonacci(6));

// Kaitlin ve la belleza en los números, pero también cree que menos es más. Implementa sumToOne(num) que sume los dígitos de un entero dado repetidamente hasta que la suma sea solo un dígito. Devuelve ese resultado de un dígito.
// Ejemplo: sumToOne(928) devuelve 1, porque 9 + 2 + 8 = 19, luego 1 + 9 = 10, luego 1 + 0 = 1

function sumToOne(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
};

console.log(sumToOne(12345));


// Crea clockHandAngles(seconds) que, dado un número de segundos desde las 12:00:00, imprima los ángulos (en grados) de las manecillas de las horas, los minutos y los segundos. Como revisión, 360 grados forman una rotación completa. Para la entrada de 3600 segundos (equivalente a 1:00:00), escribe "Manecilla de la hora: 30 grados. Manecilla de los minutos: 0 grados. Manecilla de los segundos: 0 grados". 
// Para un parámetro de entrada de segundos de 119730 (que equivale a 9:15:30 más 24 horas), debes registrar "Manecilla de la hora: 277.745 grados. Manecilla de los minutos: 93 grados. Manecilla de los segundos: 180 grados".
// Segundo: también calcula e imprime grados para una "manecilla de la semana" adicional que gira una vez por semana.

function clockHandAngles(seconds) {
    let hours = Math.floor(seconds / 3600) % 12;
    let minutes = Math.floor(seconds % 3600 / 60);
    seconds = seconds % 60;

    let hourAngle = (hours * 30) + (minutes / 2) + (seconds / 120);
    let minuteAngle = (minutes * 6) + (seconds / 10);
    let secondAngle = seconds * 6;
    let weekAngle = seconds / 604800 * 360;

    console.log(`Manecilla de la hora: ${hourAngle.toFixed(3)} grados.`);
    console.log(`Manecilla de los minutos: ${minuteAngle.toFixed(3)} grados.`);
    console.log(`Manecilla de los segundos: ${secondAngle.toFixed(3)} grados.`);
    console.log(`Manecilla de la semana: ${weekAngle.toFixed(3)} grados.`);
}

clockHandAngles(119730);

// Devuelve si un número entero dado es primo. Los números primos solo se pueden dividir uniformemente por sí mismos y por 1. 
// Existen muchas soluciones altamente optimizadas, pero por ahora, solo crea una que sea fácil de entender y depurar.

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(esPrimo(73));