// Pon myNumber en 42. Deja myName con tu nombre. Ahora intercambia myNumber por myName y viceversa.

var MyNumber = 42;
var MyName = "Daniel";
MyName = MyNumber;
MyNumber = MyName;

// Imprime números enteros de -52 a 1066 usando un bucle FOR.

for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

// Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.

function beCheerful() {
    for (let i = 1; i <= 98; i++) {
        console.log("¡buenos días!");
    }
};

beCheerful();

// Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6. 

for (let i = -300; i <= 0; i += 3) {
    if (i == -3 || i == -6) {
        continue;
    }
    console.log(i);
}

// Imprime números enteros de 2000 a 5280, utilizando un WHILE.

let i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

// Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, registra "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".

let num1 = 28;
let num2 = 7;

if ((num1 === 28 && num2 === 7) || (num1 === 7 && num2 === 28)) {
    console.log("¿Cómo lo supiste?");
} else {
    console.log("Un día cualquiera...");
}

// Escribe una función que determine si un año determinado es bisiesto. Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. Sin embargo, si es divisible por 400, entonces lo es.

function esBisiesto(anho) {
    if ((anho % 4 == 0 && anho % 100 != 0) || anho % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esBisiesto(2020));
console.log(esBisiesto(2023));

// Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.

let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++;
    }
};
console.log(`Hay ${count} múltiplos enteros de 5 entre 512 y 4096.`);

// Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.

let x = 6;
while (x <= 60000) {
    console.log(x);
    x += 6;
};

// Imprime los números enteros del 1 al 100. Si es divisible por 5, imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".

for (let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Dojo");
    } else if (i % 5 === 0) {
        console.log("Codificando");
    } else {
        console.log(i);
    }
};

// Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.

function logIncoming(incoming) {
    console.log(incoming);
};

logIncoming("Hola profe");

// Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?

let suma = 0;

for (let i = -299999; i <= 299999; i += 2) {
    suma += i;
}

console.log(suma);

// Registra números positivos a partir de 2016, contando hacia atrás cada cuatro números (excluye 0), sin un bucle FOR.

let num = 2016;
while (num > 0) {
    console.log(num);
    num -= 4;
}

// Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, dado lowNum, highNum, mult, print múltiplos de mult desde highNum hasta lowNum, usando un FOR. Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).

let highNum = 9;
let lowNum = 2;
let mult = 3;

for (let i = highNum; i >= lowNum; i--) {
    if (i % mult == 0) {
        console.log(i);
    }
};

// Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, pero el problema es esencialmente idéntico; ¡no te dejes engañar! Dados 4 parámetros (param1, param2, param3, param4), imprime los múltiplos de param1, comenzando en param2 y extendiéndose hasta param3. Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).

let param1 = 3;
let param2 = 5;
let param3 = 17;
let param4 = 9;


let numero = param2;
while (numero <= param3) {
    if (numero % param1 == 0 && numero != param4) {
        console.log(numero);
    }
    numero++;
};