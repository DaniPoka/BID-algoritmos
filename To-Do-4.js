//  Stan aprendió algo hoy: que la disminución directa de la longitud de un arreglo (.length) lo acorta inmediatamente en esa cantidad. Dado el arreglo arr y el número X, elimina todos excepto los últimos elementos X, y devuelve arr (modificado y más corto). Dado ([2,4,6,8,10], 3), cambia el arreglo dado a [6,8,10] y devuélvelo.

function losUltimosSeranLosPrimeros(arr, X) {
    arr.splice(0, arr.length - X);
    return arr;
};

console.log(losUltimosSeranLosPrimeros([2, 4, 6, 8, 10], 2));

// A Cartman no le gustan mucho las matemáticas; él necesita ayuda. Se te dan dos números: los coeficientes M y B en la ecuación Y = MX + B. Construye una función para devolver la intersección en X (su primo mayor Fiaz le recuerda sabiamente que la intersección en X es el valor de X donde Y es igual a cero; Cartman solo resopla en su dirección).

function encontrarInterseccionEnX(m, b) {
    return -b / m;
}


console.log(encontrarInterseccionEnX(3, -4))

// Kenny intenta mantenerse a salvo, pero de alguna manera todos los días sucede algo. De los últimos 100 días, hubo 10 días con volcanes, otros 15 con tsunamis, 20 terremotos, 25 ventiscas y 30 meteoros (para un total de 100 días). Si estas probabilidades continúan, escriba whatHappensToday() “QuéPasaráHoy” para imprimir el resultado de un día.

function whatHappensToday() {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum <= 10) {
        console.log("¡Hoy hay un volcán!");
    } else if (randomNum <= 25) {
        console.log("¡Hoy hay un tsunami!");
    } else if (randomNum <= 45) {
        console.log("¡Hoy hay un terremoto!");
    } else if (randomNum <= 70) {
        console.log("¡Hoy hay una ventisca!");
    } else {
        console.log("¡Hoy hay un meteorito!");
    }
};

whatHappensToday();

// Kyle (más inteligente que Kenny) señala que la posibilidad de un desastre no debe estar relacionada con la posibilidad de otro. Cambia la función whatHappensToday() para crear whatReallyHappensToday() “QuéPasaráRealmenteHoy”. En esta nueva función, prueba cada desastre de forma independiente, en lugar de asumir que ocurrirá un desastre. En otras palabras, con esta nueva función, los cinco podrían ocurrir hoy, o ninguno. ¡Quizás Kenny sobreviva!

function whatReallyHappensToday() {
    const disasters = ['volcán', 'tsunami', 'terremoto', 'ventisca', 'meteorito'];
    const probabilities = [0.1, 0.15, 0.2, 0.25, 0.3];
    const events = [];
    for (let i = 0; i < disasters.length; i++) {
        if (Math.random() < probabilities[i]) {
            events.push(disasters[i]);
        }
    }
    if (events.length === 0) {
        console.log('¡Hoy es un día seguro!');
    } else {
        console.log('Hoy habrá:', events.join(', '));
    }
};

whatReallyHappensToday();

// ¡Tu tiempo en el Dojo definitivamente te hará más inteligente! Digamos que un nuevo estudiante de Dojo, Bogdan, ingresó con un coeficiente intelectual modesto de 101. Digamos que durante un bootcamp de 14 semanas, su coeficiente intelectual aumentó en .01 el primer día, luego aumentó en .02 adicional el segundo día, luego aumentó en .03 más el tercer día, etc. hasta aumentar en .98 el día 98 (al final de 14 semanas completas). ¿Cuál es el coeficiente intelectual final de Bogdan?

function coeficienteIntelectual() {
    let coeficiente = 101;
    let aumento = 0.01;
    for (let dia = 1; dia <= 98; dia++) {
        coeficiente += aumento;
        aumento += 0.01;
    }
    return coeficiente;
}


console.log(coeficienteIntelectual());

// El Sr. Cerise enseña matemáticas en la escuela secundaria. Escribe una función que asigne e imprima una calificación en letra, dado un número entero que represente una puntuación de 0 a 100. Aquellos que obtienen 90+ obtienen una "A", 80-89 obtienen una "B", 70-79 es una "C", 60-69 deben obtener una "D" y menos de 60 reciben una "F". Por ejemplo, con 88, deberías registrar "Puntuación: 88. Calificación: B.” Con el puntaje 61, registra la cadena "Puntaje: 61. Calificación: D".

function asignarCalificacion(puntuacion) {
    let calificacion = "";

    if (puntuacion >= 90) {
        calificacion = "A";
    } else if (puntuacion >= 80) {
        calificacion = "B";
    } else if (puntuacion >= 70) {
        calificacion = "C";
    } else if (puntuacion >= 60) {
        calificacion = "D";
    } else {
        calificacion = "F";
    }

    console.log(`Puntuación: ${puntuacion}. Calificación: ${calificacion}.`);
};

asignarCalificacion(88);
asignarCalificacion(61);

// Para un desafío adicional, agrega los signos "-" a las puntuaciones en el dos por ciento inferior de las puntuaciones A, B, C y D, y los signos "+" al dos por ciento superior de las puntuaciones B, C y D (lo siento, el Sr. Cerise nunca da una A+). Dado 88, console.log "Puntuación: 88. Calificación: B+". Dado 61, registra "Puntuación: 61. Calificación: D-".

function obtenerCalificacion(puntuacion) {
    let calificacion = "";
    let signo = "";

    if (puntuacion >= 90) {
        calificacion = "A";
    } else if (puntuacion >= 80) {
        calificacion = "B";
    } else if (puntuacion >= 70) {
        calificacion = "C";
    } else if (puntuacion >= 60) {
        calificacion = "D";
    } else {
        calificacion = "F";
    }

    if (puntuacion >= 98 && puntuacion <= 100) {
        signo = "+";
    } else if (puntuacion >= 80 && puntuacion <= 97 && puntuacion % 10 >= 8) {
        signo = "+";
    } else if (puntuacion >= 60 && puntuacion <= 63) {
        signo = "-";
    } else if (puntuacion >= 0 && puntuacion <= 59 && puntuacion % 10 <= 2) {
        signo = "-";
    }

    return "Puntuación: " + puntuacion + ". Calificación: " + calificacion + signo;
};

console.log(obtenerCalificacion(61));
console.log(obtenerCalificacion(88));