const buttonStart = document.getElementById('start-button');
const sectionQuiz = document.getElementById('quiz-section');
const sectionLanding = document.getElementById('landing');
const sectionTimer = document.getElementById('timer-section');
const spanTime = document.getElementById('span-time');
const sectionInitials = document.getElementById('initials');
const sectionSummary = document.getElementById('summary-section')
const spanScore = document.getElementById('span-score')
const questionTitle = document.getElementById('question-title')
const questionChoice = document.getElementById('question-choices')
const sectionHighScore = document.getElementById('section-highscore')
const buttonYourScore = document.getElementById('your-score')

let = timerId = null;
let = timeRemaining = 60;

let = currentQuestion = 0;

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
// TIMER

function startTimer() {
    // Show section-timer
    sectionTimer.classList.remove('hide');
    // countdown span-time as seconds pass
    timerId = setInterval(function () {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

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
        button.addEventListener('click', checkAnswer);
        li.appendChild(button);

        questionChoice.appendChild(li)
    }
};
// showQuestion(0)
// SELECTION OPTIONS
// when user clicks correct answer show success and add point
// title - string
// choices
// title
// correct answer y/n?
// when user clicks incorrect answer show wrong and deduct 5 seconds

// if user does not click any answer, timer will run out and game over screen appears


// after incorrect or correct message shows, show next question

// when timer runs out, end game



// END GAME (summary page)
function endGame() {

    // timer stops
    clearInterval(timerId);

    // Hide question
    sectionQuiz.classList.add('hide');
    // show their score (number of questions correctly answered)

    // prompt user to enter their intials
    sectionSummary.classList.remove('hide');
    // 3. user press submit

    // save initials and score to local storage
    // go to high score page
    // buttonYourScore.addEventListener('click', function (event) {
    // sectionHighScore.classList.remove('hide');
    // })
}
// HIGHSCORE Page
// Show list of high scores

// User clicks on Back button
// Redirect user to Landing Page

// User clicks on Clear button
// Clear local storage
// Clear DOM 