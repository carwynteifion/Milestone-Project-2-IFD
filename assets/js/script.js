// quiz variables
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score");
const highScoreContainer = document.getElementById("high-score")
const headers = document.getElementById("header-container")
let randomisedQuestions, currentQuestion;
let currentScore = 0;
let highScore = 0;

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
    startButton.classList.add("hidden");
    headers.classList.add("hidden");
    randomisedQuestions = allQuestions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove("hidden")
    scoreContainer.innerHTML = `Score so far: ${currentScore}`
    highScoreContainer.innerHTML = `High score: ${highScore}`
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

//clears correct and wrong classes, hides next button, removes default answer buttons
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
    
    // set the colors of the button wrong or right
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });

    // if selected button is correct, increments the score
    if (correct) {
        currentScore++;
        scoreContainer.innerHTML = `Score so far: ${currentScore}`;
    };

    //displays next button if number of questions is greater than the current question's number
    if(randomisedQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hidden");

    //else, changes start button text to restart and displays this button instead
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove ("hidden");
        scoreContainer.innerHTML = `You got ${currentScore} questions right!`
        if (currentScore > highScore) {
            highScore = currentScore;
            highScoreContainer.innerHTML = `High score: ${highScore}`;
        };
    };
};

//runs clearStatusClass then adds either "correct" or "wrong" class to an element
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
}

//removes any "correct" or "wrong" classes from elements
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong");
}

