let playerName = prompt("¡Hola! ¿Cómo te llamas?");
let correctAnswers = 0;
let totalQuestions = 0;
let quizQuestions = [
    "¿Cuál es el color del caballo blanco de Santiago? ____",
    "El ____ es el órgano encargado de la respiración.",
    "El río Amazonas desemboca en el _____.",
    "La capital de Argentina es _____.",
    "Los tres estados de la materia son sólido, líquido y _____."
];

let quizAnswers = ["blanco", "pulmon", "oceano Atlantico", "Buenos Aires", "gaseoso"];

for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(playerName + ": " + quizQuestions[i]);
    if (userAnswer.toLowerCase() === quizAnswers[i]) {
        alert("¡Correcto!");
        correctAnswers++;
    } else if (userAnswer.toLowerCase() === "q" || userAnswer === null) {
        break;
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + quizAnswers[i]);
    }
    totalQuestions++;
}

console.log(playerName + ", has respondido " + correctAnswers + " de " + totalQuestions + " preguntas correctamente.");