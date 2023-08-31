const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById(
    "answer-buttons-container"
);


const loadAllQuiz = async () => {
    const response = await fetch("./quizzes.json");
    const quizzes = await response.json();

    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.innerText = "Quiz " + (index + 1);
        quizCard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizCard);
    });
};

loadAllQuiz();