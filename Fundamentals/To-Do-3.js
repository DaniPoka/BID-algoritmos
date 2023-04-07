// Dado un arreglo, escribe una función que cambie todos los números positivos del arreglo a "grande". Ejemplo: makeItBig([- 1,3,5, -5]) devuelve el mismo arreglo, cambiado a [-1, "big", "big", - 5].

function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(makeItBig([-1, 3, 5, -5]));

// Crea una función que tome un arreglo de números. La función debe imprimir el valor más bajo del arreglo y devolver el valor más alto del arreglo.

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log("El valor más bajo del arreglo es: " + min);
    return max;
};

let arr = [10, 5, 20, 2, 8];
console.log(minMax(arr));

// Crea una función que tome un arreglo de números. La función debe imprimir el penúltimo valor del arreglo y devolver el primer valor impar del arreglo.

function printPenultimateAndGetFirstOdd(arr) {
    let penultimate = arr[arr.length - 2];
    let firstOdd = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(penultimate);
    return firstOdd;
};

let newArr = [2, 4, 6, 7, 8, 9];
let result = printPenultimateAndGetFirstOdd(newArr);
console.log(result);

// Dado un arreglo, crea una función para devolver un nuevo arreglo donde cada valor en el original se ha duplicado. Llamar a doble([1,2,3]) debería devolver [2,4,6] sin cambiar el original.

function doble(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado;
}

let original = [1, 2, 3];
let duplicado = doble(original);

console.log("Arreglo original:", original);
console.log("Arreglo duplicado:", duplicado);

// Dado un arreglo de números, crea una función para reemplazar el último valor con el número de valores positivos. Por ejemplo, countPositives([- 1,1,1,1]) cambia el arreglo a [-1,1,1,3] y lo devuelve.

function countPositives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));

// Crea una función que acepte un arreglo. Cada vez que el arreglo tenga tres valores impares seguidos, imprime "¡Eso es extraño!" Cada vez que el arreglo tenga tres pares seguidos, imprime "¡Aún más!".

function parejaDispareja(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
            oddCount = 0;
            if (evenCount === 3) {
                console.log("¡Aún más!");
                evenCount = 0;
            }
        } else {
            oddCount++;
            evenCount = 0;
            if (oddCount === 3) {
                console.log("¡Eso es extraño!");
                oddCount = 0;
            }
        }
    }
};

console.log(parejaDispareja([3, 4, 2, 6, 5, 3, 7, 2]));

// Dado arr, agrega 1 a los elementos impares ([1], [3], etc.), console.log todos los valores y devuelve arr.

function agregarUnoAImpares(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
};

let myArr = [1, 2, 3, 4, 5];
agregarUnoAImpares(myArr);

// Se te entrega un arreglo que contiene cadenas. Trabajando dentro de ese mismo arreglo, reemplaza cada cadena con un número (la longitud de la cadena en el índice del arreglo anterior) y devuelve el arreglo.

function replaceWithLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }
    return arr;
};

console.log(replaceWithLength(["hola", "mundo", "de", "Javascript"]));

// Crea una función que acepte un arreglo. Devuelve un nuevo arreglo con todos los valores excepto el primero, agregando 7 a cada uno. No alteres el arreglo original.

function agregarSiete(arr) {
    var anArr = [];
    for (var i = 1; i < arr.length; i++) {
        anArr.push(arr[i] + 7);
    }
    return anArr;
};

var anArr = [1, 2, 3, 4, 5];
var resultArr = agregarSiete(anArr);
console.log(resultArr);
console.log(anArr);

// Dado un arreglo , escribe una función para invertir los valores, en el lugar. Ejemplo: reverse([3,1,6,4,2]) devuelve el mismo arreglo, que contenga [2,4,6,1,3].

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
};

const arreglo = [3, 1, 6, 4, 2];
reverse(arreglo);
console.log(arreglo);

// Dado un arreglo, crea y devuelve uno nuevo que contenga todos los valores del arreglo  proporcionado en negativo (no simplemente multiplicada por -1). Dado [1, -3, 5], devuelve [-1, -3, -5].

function negativos(arr) {
    let negArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            negArr.push(-arr[i]);
        } else {
            negArr.push(arr[i]);
        }
    }
    return negArr;
};

console.log(negativos([1, -3, 5]));

// Crea una función que acepte un arreglo  e imprime "delicioso" cada vez que uno de los valores sea igual a "comida". Si no hay elementos "comida" en el arreglo, entonces escribe "Tengo hambre" una vez.

function comidaEnArreglo(arr) {
    let hayComida = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
            console.log("delicioso");
            hayComida = true;
        }
    }
    if (!hayComida) {
        console.log("Tengo hambre");
    }
};

console.log(comidaEnArreglo(["comida", "bebida", "salida"]));
console.log(comidaEnArreglo(["bebida", 2, 5, "salida"]));

// Dado un arreglo, intercambia el primero y el último, el tercero y el antepenúltimo, etc. La entrada [true, 42, "Ada", 2, "pizza"] se convierte en ["pizza", 42, "Ada", 2, true]. Cambia [1,2,3,4,5,6] por [6,2,4,3,5,1].

function cambiarElementos(arr) {
    for (let i = 0; i < arr.length / 2; i += 2) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

console.log(cambiarElementos([true, 42, "Ada", 2, "pizza"]));

// Dado el arreglo arr y el número num, multiplica cada valor de arr por num y devuelve el arr cambiado.

function multiplicadorDeArrays(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
};

console.log(multiplicadorDeArrays([1, 2, 3, "gato"], 2));