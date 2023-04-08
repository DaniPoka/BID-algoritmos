// Crea la función rollOne() (“tiradaUno”) para devolver un número entero seleccionado aleatoriamente entre 1 y 6 (inclusive).
// En segundo lugar, crea una función playFives(num), que debería llamar a rollOne() varias veces - 'num' veces, de hecho, 'num' es el parámetro de entrada para playFives(num). Cada vez, debes imprimir el valor que devuelve rollOne(), y si ese valor devuelto es 5, también debes imprimir "¡Buena suerte!"
// En tercer lugar, crea una nueva función llamada playStatistics(), que debería llamar a rollOne() ocho veces (pero no imprimir nada después de cada llamada). Después de la última de estas ocho llamadas, debes imprimir los valores más bajos y más altos que recibió de rollOne, de entre esas ocho llamadas.
// Cuarto, haz una copia de playStatistics y agrega código para hacer playStatistics2(), de modo que al final (además de imprimir las tiradas más alta y más baja), también imprime la suma total de los ocho tiradas.
// En quinto lugar, copia playStatistics2 y agrégale código para hacer playStatistics3(num), de modo que se ejecute tantas veces como desees, en lugar de hacerlo siempre ocho veces.
// Finalmente, haz una copia de playStatistics3 y cámbiala para crear playStatistics4(num), de modo que al final en lugar de la suma total, imprima la tirada promedio.

function rollOne() {
    return Math.floor(Math.random() * 6) + 1;
};

function playFives(num) {
    for (let i = 0; i < num; i++) {
        let roll = rollOne();
        console.log(roll);
        if (roll === 5) {
            console.log("¡Buena suerte!");
        }
    }
};

function playStatistics() {
    let rolls = [];
    for (let i = 0; i < 8; i++) {
        rolls.push(rollOne());
    }
    console.log("Tiradas:", rolls);
    let min = Math.min(...rolls);
    let max = Math.max(...rolls);
    console.log("Tirada más baja:", min);
    console.log("Tirada más alta:", max);
};

function playStatistics2() {
    let rolls = [];
    for (let i = 0; i < 8; i++) {
        rolls.push(rollOne());
    }
    console.log("Tiradas:", rolls);
    let min = Math.min(...rolls);
    let max = Math.max(...rolls);
    console.log("Tirada más baja:", min);
    console.log("Tirada más alta:", max);
    let sum = rolls.reduce((total, num) => total + num);
    console.log("Suma total:", sum);
};

function playStatistics3(num) {
    let rolls = [];
    for (let i = 0; i < num; i++) {
        rolls.push(rollOne());
    }
    console.log("Tiradas:", rolls);
    let min = Math.min(...rolls);
    let max = Math.max(...rolls);
    console.log("Tirada más baja:", min);
    console.log("Tirada más alta:", max);
    let sum = rolls.reduce((total, num) => total + num);
    console.log("Suma total:", sum);
};

function playStatistics4(num) {
    let rolls = [];
    for (let i = 0; i < num; i++) {
        rolls.push(rollOne());
    }
    console.log("Tiradas:", rolls);
    let min = Math.min(...rolls);
    let max = Math.max(...rolls);
    console.log("Tirada más baja:", min);
    console.log("Tirada más alta:", max);
    let sum = rolls.reduce((total, num) => total + num);
    let average = sum / num;
    console.log("Tirada promedio:", average);
};

playFives(10);
playStatistics();
playStatistics2();
playStatistics3(8);
playStatistics4(12);

// Aquí tienes otro juego para nuestra fiesta de vísperas de Año Nuevo. Implementa un "dado de 20 lados" que devuelva aleatoriamente números enteros entre 1 y 20 inclusive. 
// Haz tiradas, rastreando las estadísticas hasta que obtengas un valor dos veces seguidas. Muestra el número de tiradas, mínimo, máximo y promedio.


function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

function diceGame() {
    let previousRoll = null;
    let rolls = [];
    let total = 0;
    let min = Infinity;
    let max = -Infinity;
    let numRolls = 0;

    while (true) {
        numRolls++;
        let currentRoll = rollD20();
        rolls.push(currentRoll);
        total += currentRoll;
        min = Math.min(min, currentRoll);
        max = Math.max(max, currentRoll);

        if (currentRoll === previousRoll) {
            break;
        }

        previousRoll = currentRoll;
    }

    let average = total / numRolls;

    console.log(`Número de tiradas: ${numRolls}`);
    console.log(`Mínimo: ${min}`);
    console.log(`Máximo: ${max}`);
    console.log(`Promedio: ${average.toFixed(2)}`);
    console.log(`Tiradas: ${rolls}`);
}

diceGame();

// Ayuda a Eduardo a rastrear qué día de la semana es. Crea una función weekdayName(weekdayNum) que, dado un número entre 1 y 7, console.log una cadena que contenga el día de la semana para ese número (dado 1, registra "Domingo"). Utiliza una declaración SWITCH.

function weekdayName(weekdayNum) {
    let dayName;

    switch (weekdayNum) {
        case 1:
            dayName = "Domingo";
            break;
        case 2:
            dayName = "Lunes";
            break;
        case 3:
            dayName = "Martes";
            break;
        case 4:
            dayName = "Miércoles";
            break;
        case 5:
            dayName = "Jueves";
            break;
        case 6:
            dayName = "Viernes";
            break;
        case 7:
            dayName = "Sábado";
            break;
        default:
            dayName = "Número de día inválido. Debe ser un número entre 1 y 7.";
    }

    console.log(dayName);
}


weekdayName(1);
weekdayName(4);
weekdayName(8);

// Expande weekdayName() para crear weekdayName2(dayNum) aceptando números hasta 365. Devuelve el día de la semana como antes, dado el número total de días. "Domingo" todavía corresponde a 1.

function weekdayName2(dayNum) {
    if (dayNum < 1 || dayNum > 365) {
        return "Número de día inválido. Debe ser un número entre 1 y 365.";
    }

    const weekdayNum = ((dayNum - 1) % 7) + 1;

    let weekdayName;
    switch (weekdayNum) {
        case 1:
            weekdayName = "Domingo";
            break;
        case 2:
            weekdayName = "Lunes";
            break;
        case 3:
            weekdayName = "Martes";
            break;
        case 4:
            weekdayName = "Miércoles";
            break;
        case 5:
            weekdayName = "Jueves";
            break;
        case 6:
            weekdayName = "Viernes";
            break;
        case 7:
            weekdayName = "Sábado";
            break;
        default:
            weekdayName = "Número de día inválido. Debe ser un número entre 1 y 365.";
    }

    return weekdayName;
}


weekdayName2(1);
weekdayName2(4);
weekdayName2(365);
weekdayName2(367);

// Crea una nueva función someDays() que llame a weekDayName2() diecisiete veces, con enteros generados aleatoriamente hasta 365. Registra cada cadena de resultado. Si es un día de entresemana, agrega la frase "¡Trabaja duro!", y si es un día de fin de semana, agrega "¡Disfruta tu día libre!".

function someDays() {
    for (let i = 1; i <= 17; i++) {
        const dayNum = Math.floor(Math.random() * 365) + 1;
        let result = weekdayName2(dayNum);

        if (result === "Sábado") {
            console.log(result + " - ¡Disfruta tu día libre!");
        } else if (result === "Domingo") {
            console.log(result + " - ¡Disfruta tu día libre!");
        } else {
            console.log(result + " - ¡Trabaja duro!");
        }
    }
};

someDays();

// Genera la función monthName(monthNum) que, dado un número del 1 al 12, devuelve una cadena que contiene el mes para ese número ("mayo" corresponde a 5). Utiliza una matriz, sin bucles.

function monthName(monthNum) {
    const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];
    return months[monthNum - 1];
};

// Ahora expande monthName() para crear monthToDays(monthNum), devolviendo el número de días de ese mes, en el año 2017. Sugerencia: usa una instrucción SWITCH para los días de cada mes.

function monthToDays(monthNum) {
    switch (monthNum) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
};

//A pesar de utilizar su experiencia en Ember para crear un SOS brillante visible desde el espacio, los días pasan y, lamentablemente, Eduardo todavía no ha sido rescatado. ¿Ya es primavera? Bien podría ser. Construye sobre monthName() para crear dayToMonth(dayNum). 
// Si, dado un número de día desde que comenzó el año, devuelve el mes actual (supón que no es un año bisiesto). Dado 75, devuelve "marzo".

function dayToMonth(dayNum) {
    let month = 1;

    while (dayNum > monthToDays(month)) {
        dayNum -= monthToDays(month);
        month++;
    }

    return monthName(month);
};

console.log(dayToMonth(75));

// Construye fullDate(dayNum) para aceptar el número de días hasta ahora en 2017 y devuelve una cadena de fecha completa. 
// Eduardo apenas recuerda aquella fatídica fiesta de Nochevieja, pero sabe que era sábado. Dado 142, devuelve "lunes, 22 de mayo de 2017".

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month, year) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else {
        return 31;
    }
}

function fullDate(dayNum) {
    const weekdays = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    let dayCount = dayNum;
    let month = 1;
    let year = 2017;

    while (dayCount > daysInMonth(month, year)) {
        dayCount -= daysInMonth(month, year);
        month++;
    }

    const day = dayCount;
    const weekday = weekdays[(dayNum + 5) % 7];
    const monthName = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ][month - 1];

    return `${weekday}, ${day} de ${monthName} de ${year}`;
}
console.log(fullDate(142));

// Construye fullDate2(dayNum) que recibirá un número entero de 4 dígitos: los días que han pasado desde el 31 de diciembre de 2016. ¡Este número puede extenderse a años futuros! Puedes suponer que cualquier número de año divisible por cuatro es un año bisiesto y tiene un febrero de 29 días. Dado 8475, devuelve "jueves, 15 de marzo de 2040".

function fullDate2(dayNum) {
    // Se define una fecha inicial: 31 de diciembre de 2016.
    var date = new Date('2016-12-31');

    // Se agrega la cantidad de días indicada en el argumento de la función.
    date.setDate(date.getDate() + dayNum);

    // Se obtienen las partes de la fecha: día de la semana, día de mes y año.
    var dayOfWeek = ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"][date.getDay()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();

    // Se devuelve la fecha completa en el formato deseado.
    return dayOfWeek + ', ' + dayOfMonth + ' de ' + getMonthName(date) + ' de ' + year;
}

function getMonthName(date) {
    // Se obtiene el nombre del mes a partir del número de mes obtenido de la fecha.
    var monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return monthNames[date.getMonth()];
};

console.log(fullDate2(8475));

//

function fullDate3(dayNum) {
    const dayOfWeek = weekdayName2(dayNum);
    const monthName = dayToMonth(dayNum);
    const dayOfMonth = dayNum - dayToMonth(monthName) + 1;
    const year = 2017;

    return `${dayOfWeek}, ${dayOfMonth} de ${monthName} de ${year}`;
}

console.log(fullDate3(13947));

//








