// quiz variables
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

// undefined variables for shuffling and tracking questions
let randomisedQuestions, currentQuestion;

// Event Listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener('click', () => {	
    currentQuestion++;	
    nextQuestion();
});

// QUIZ FUNCTIONS
// shuffles quiz, sets buttons up
function startQuiz() {
    startButton.classList.add("hidden")
    randomisedQuestions = allQuestions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove("hidden")
    nextQuestion()
};

//displays next question from array
function nextQuestion() {
    resetState()
    displayQuestion(randomisedQuestions[currentQuestion])
};

// handles displaying current question and sets parameters for correct answer button
function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hidden");
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer() {

}