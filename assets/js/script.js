// quiz variables
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score");
let randomisedQuestions, currentQuestion;
let currentScore = 0;

// Event Listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener('click', () => {	
    currentQuestion++;	
    nextQuestion();
});

// QUIZ FUNCTIONS
// shuffles quiz questions, sets buttons up
function startQuiz() {
    if (startButton.innerText = "Restart") {
        currentScore = 0;
    };
    startButton.classList.add("hidden")
    randomisedQuestions = allQuestions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove("hidden")
    scoreContainer.innerHTML = `Score so far: ${currentScore}`
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
        //creates a button for each answer
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}

//
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hidden");
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    //displays next button if number of questions is greater than the current question's number
    if(randomisedQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hidden");
    //else, changes start button text to restart and displays this button instead
    } else {
        startButton.innerText = "Restart";
        nextButton.classList.remove ("hidden");
        scoreContainer.innerHTML = `You got ${currentScore} questions right!`
    }
};

//runs clearStatusClass then adds either "correct" or "wrong" class to an element
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
        currentScore++;
        console.log(currentScore);
    } else {
        element.classList.add("wrong")
    }
}

//removes any "correct" or "wrong" classes from elements
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong");
}

