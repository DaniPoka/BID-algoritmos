// Implementar la función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos hasta el número (inclusive). Ejemplo: sigma(3) = 6 (o 1 + 2 + 3); sigma (5) = 15 (o 1 + 2 + 3 + 4 + 5).

function sigma(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

console.log(sigma(5));

// Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos desde 1 hasta número (inclusive). Por ejemplo, factorial (3) = 6 (o 1 * 2 * 3); factorial (5) = 120 (o 1 * 2 * 3 * 4 * 5).

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial(5));

// Supón que tienes un campo de texto de exactamente 75 caracteres. Quieres llenarlo con espacios y asteriscos ('*'), a veces llamados estrellas. Debes imprimir el número de asteriscos indicado de forma consecutiva.
// Dependiendo de la función que se llame, esas estrellas deben estar justificadas a la izquierda (la primera estrella sería el primer carácter en el campo de texto), o justificadas a la derecha (la última estrella sería el último carácter en el campo de texto, con potencialmente algunos espacios al comienzo del campo de texto antes de que comience el  bloque de estrellas), o centrado en el campo de texto de 75 caracteres (con el mismo número de espacios a cada lado del bloque de estrellas, más/menos uno).
// Escribe una función drawLeftStars(num) que acepte un número e imprima esa cantidad de asteriscos.
// Escribe una función drawRightStars(num) que imprima 75 caracteres en total. Las estrellas deben formarse desde el lado derecho. Los últimos caracteres num deben ser asteriscos; los otros 75 deben ser espacios.
// Escribe función drawCenteredStars(num) que imprima 75 caracteres en total. Las estrellas deben estar centradas en el 75. Los num del medio deben ser asteriscos; el resto de los 75 espacios.



function drawLeftStars(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "*";
    }
    console.log(result);
};

function drawRightStars(num) {
    let result = "";
    for (let i = 0; i < 75; i++) {
        if (i < 75 - num) {
            result += " ";
        } else {
            result += "*";
        }
    }
    console.log(result);
};

function drawCenteredStars(num) {
    let result = "";
    let spaces = Math.floor((75 - num) / 2);
    for (let i = 0; i < 75; i++) {
        if (i < spaces || i >= spaces + num) {
            result += " ";
        } else {
            result += "*";
        }
    }
    console.log(result);
};

drawLeftStars(10);
drawCenteredStars(7);
drawRightStars(23);


function drawBattleScene() {
    const empireShip = "(=*=)";
    const rebelShip = "(>o<)";
    const empireLabel = "Imperio";
    const rebelLabel = "Rebelión";
    const labelSpace = 15;


    console.log("*".repeat(75));


    let empireLine = empireShip.padStart(labelSpace) + empireLabel;
    console.log(empireLine.padEnd(75, " "));


    let rebelLine = rebelLabel.padStart(labelSpace) + rebelShip;
    console.log(rebelLine.padEnd(75, " "));


    console.log("*".repeat(75));
};


drawBattleScene();

// De lo anterior, deriva las siguientes para que acepten y dibujen los caracteres dados, no solo asteriscos: 
// drawLeftChars(num,char)
// drawRightChars(num,char)
// drawCenteredChars(num,char)
// Para las tres, puedes asumir con seguridad que 'char' es una cadena con longitud 1.

function drawLeftChars(num, char) {
    let output = "";
    for (let i = 0; i < num; i++) {
        output += char;
    }
    console.log(output);
};

function drawRightChars(num, char) {
    let output = "";
    for (let i = 0; i < 75 - num; i++) {
        output += " ";
    }
    for (let i = 0; i < num; i++) {
        output += char;
    }
    console.log(output);
};

function drawCenteredChars(num, char) {
    let output = "";
    let spaces = Math.floor((75 - num) / 2);
    for (let i = 0; i < spaces; i++) {
        output += " ";
    }
    for (let i = 0; i < num; i++) {
        output += char;
    }
    for (let i = 0; i < spaces; i++) {
        output += " ";
    }
    console.log(output);
};

drawLeftChars(5, "?");
drawCenteredChars(12, "&");
drawRightChars(6, "$");




