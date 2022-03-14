const buttonStart = document.getElementById('start-button');
const sectionQuiz = document.getElementById('quiz-section');
const sectionLanding = document.getElementById('landing');
const sectionTimer = document.getElementById('timer-section');
const spanTime = document.getElementById('span-time');
const sectionSummary = document.getElementById('summary-section')
const spanScore = document.getElementById('span-score')
const questionTitle = document.getElementById('question-title')
const questionChoice = document.getElementById('question-choices')
const sectionHighScore = document.getElementById('section-highscore')
const buttonYourScore = document.getElementById('your-score')
const spanDeduction = document.getElementById('span-deduction-notice')
const questionFeedback = document.getElementById('answer-feedback-section')
const formHighscore = document.getElementById('form-highscore')
const inputName = document.getElementById('input-initials')
const listHighscores = document.getElementById('list-highscores')

const buttonPlayAgain = document.getElementById('play-again-button')
const buttonClearHighscore = document.getElementById('clear-highscore-button')

let = timerId = null;
let = timeRemaining = 60;

let = currentQuestion = 0;
let = nextQuestion = currentQuestion + 1;

spanTime.textContent = timeRemaining;

// When user clicks on button quiz starts - first question appears
buttonStart.addEventListener('click', function (event) {
    // first question appears
    sectionQuiz.classList.remove('hide');
    // hide landing page
    sectionLanding.classList.add('hide');

    // timer starts
    startTimer();

    showQuestion(currentQuestion);
})


// Question Feedback
function showFeedback(message, timeout = 1000) {
    questionFeedback.textContent = message;
    questionFeedback.classList.remove('hide')

    setTimeout(function () {
        questionFeedback.classList.add('hide')
    }, timeout);
}


// TIMER
function startTimer() {
    // Show section-timer
    sectionTimer.classList.remove('hide');
    // countdown span-time as seconds pass
    timerId = setInterval(function () {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

        // if user does not click any answer, timer will run out and game over screen appears
        // if time remaining < 0
        if (timeRemaining <= 0) {
            // end game
            endGame()
        }
        // end game
    }, 1000);

}

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const title = question.title;
    const choices = question.choices;

    // Show question title
    questionTitle.textContent = title;
    // clear question choices 
    questionChoice.textContent = "";

    // loop through choices
    // generate li for each choice
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        const li = document.createElement('li');
        const button = document.createElement('button');


        button.classList.add('answer-button')
        button.textContent = choice.title;
        button.setAttribute('answer-is-right', choice.correctAnswer);


        button.addEventListener("click", function (event) {
            // user clicked on correct answer
            const correctAnswer = event.target.getAttribute('answer-is-right') === 'true';
            console.log(correctAnswer);
            if (correctAnswer) {
                // Add 1 Point to score count
                // Show feedback
                showFeedback('Answer is right! Well done')
                // // go to next question
                // showQuestion(nextQuestion);

            } else {
                // deduct time by 10 sec
                timeRemaining = timeRemaining - 10;

                // show feedback
                showFeedback('Answer is wrong! Good try. Minus 10 seconds')
            }
            // after incorrect or correct message shows, show next question
            // end game if completed last question
            if (currentQuestion === questions.length-1) {
                console.log(currentQuestion)
                endGame();
            } else {
                currentQuestion++
                showQuestion(currentQuestion);
                console.log(currentQuestion)
                console.log(questions.length)
            }
        });
        li.appendChild(button);

        questionChoice.appendChild(li)
    }

}
// END GAME (summary page)
function endGame() {

    // timer stops
    clearInterval(timerId);
    spanTime.textContent = "0"
    spanDeduction.classList.add('hide');

    // Hide question
    sectionQuiz.classList.add('hide');
    
    // hide timer {
        sectionTimer.classList.add('hide')
    

    // show summary page
    sectionSummary.classList.remove('hide');

    // show their score (time remaining)
    spanScore.textContent = timeRemaining;

    // user enter intials, press submit or press enter on keyboard
    formHighscore.addEventListener('submit', function (event) {
        event.preventDefault();


        // on submit, add user initials to local storage
        const userInput = inputName.value;
        const highScore = {
            name: userInput,
            highscore: timeRemaining
        }

        /**
         * @type {Array} existingHighscore
         */
        const existingHighscore = JSON.parse(localStorage.getItem('highscores') || '[]')

        // add in new questions
        existingHighscore.push(highScore)

        // save to local storage
        localStorage.setItem('highscores', JSON.stringify(existingHighscore));

        // after submit, redirect user to hs page
        console.log('done', existingHighscore);
        showHighScorePage()
    })


}
function showHighScorePage() {
// Hide end game screen
sectionSummary.classList.add('hide')

// show high score section
sectionHighScore.classList.remove('hide')
}




// function renderHighscoreList() 
// HIGHSCORE Page
// Show list of high scores

// create li for each item

// put it in the list




// User clicks on Play Again button
// Redirect user to Landing Page

buttonPlayAgain.addEventListener('click', function(event){
    window.location.reload();
})

// User clicks on Clear button
buttonClearHighscore.addEventListener('click', function(event){
   // Clear local storage
    localStorage.setItem('highscore', "[]");

// Clear DOM
listHighscores.textContent = ""; 
})
