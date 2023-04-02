// Crea una función que acepte un número como entrada. Devuelve un nuevo arreglo que cuenta de uno en uno, desde el número (como elemento "cero" del arreglo) hasta 0 (como último elemento). ¿Cuánto mide este arreglo?

function countDownArray(num) {
    let arr = [num];
    while (num > 0) {
        num--;
        arr.push(num);
    }
    return arr;
}

let newArray = countDownArray(23);
console.log(newArray.length);

// Tu función recibirá un arreglo con dos números. Imprime el primer valor y devuelve el segundo.



function printFirstReturnSecond(newArr) {

    console.log(newArr[0]);
    return newArr[1];
}

console.log(printFirstReturnSecond([2, 3]));

// Dado un arreglo, devuelve la suma del primer valor del arreglo, más la longitud del arreglo. ¿Qué sucede si el primer valor del arreglo no es un número, sino una cadena (como “what?”) o un booleano (como false).

function sumaPrimerElemento(arr) {
    if (typeof arr[0] !== 'number') {
        return "El primer elemento no es un número";
    }

    return arr[0] + arr.length;
};

const arr = [3, 23, 16, 57];
console.log(sumaPrimerElemento(arr));

const arr2 = ["xD", 23, 16, 57];
console.log(sumaPrimerElemento(arr2));

// Para [1,3,5,7,9,13], imprime valores que sean mayores que su segundo valor. Devuelve cuántos valores son

function mayoresQueElSegundo(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

const arreglo = [1, 3, 5, 7, 9, 13];
const numMayores = mayoresQueElSegundo(arreglo);
console.log(`Hay ${numMayores} valores mayores que el segundo valor del arreglo.`);

function jinx(num1, num2) {
    var arr = [];
    if (num1 == num2) {
        console.log("¡Jinx!");
    } else {
        for (var i = 0; i < num1; i++) {
            arr.push(num2);
        }
    }
    return arr;
};

console.log(jinx(5, 8));
console.log(jinx(3, 3));

// Tu función debería aceptar un arreglo. Si el valor en [0] es mayor que la longitud de; arreglo, imprime "¡Demasiado grande!"; si el valor en [0] es menor que la longitud del arreglo, imprime "¡Demasiado pequeño!"; de lo contrario, imprime "¡Perfecto!".

function verificadorDeTamanho(arr) {
    if (arr[0] > arr.length) {
        console.log("¡Demasiado grande!");
    } else if (arr[0] < arr.length) {
        console.log("¡Demasiado pequeño!");
    } else {
        console.log("¡Perfecto!");
    }
};

verificadorDeTamanho([1, 2, 3]);
verificadorDeTamanho([100, 20, 30, 40, 50]);
verificadorDeTamanho([3, "Hola", true,]);

// Kelvin quiere convertir entre escalas de temperatura. Crea fahrenheitToCelsius(fDegrees) que acepte un número de grados en Fahrenheit y devuelva la temperatura equivalente expresada en grados Celsius. Para revisar, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = (fDegrees - 32) * 5 / 9;
    return cDegrees;
};

var cDegrees = fahrenheitToCelsius(160);
console.log(cDegrees);

// Crea celsiusToFahrenheit(cDegrees) que acepte el número de grados Celsius y devuelva la temperatura equivalente expresada en grados Fahrenheit.

function celsiusToFahrenheit(cDegrees) {
    var fahrenheit = cDegrees * (9 / 5) + 32;
    return fahrenheit;
};

var fDegrees= celsiusToFahrenheit(30);
console.log(fDegrees);

// (Opcional): ¿Los valores Fahrenheit y Celsius son iguales en un cierto número? El cálculo científico puede ser complejo, por lo que para este desafío solo prueba una serie de valores enteros Celsius comenzando en 200, yendo hacia abajo (descendente), verificando si es igual al valor Fahrenheit correspondiente.

for (var celsius = 200; celsius >= -273; celsius--) {
    var fahrenheit = celsiusToFahrenheit(celsius);
    if (fahrenheit === celsius) {
        console.log("Los valores Fahrenheit y Celsius son iguales a " + celsius + " grados");
    }
};
