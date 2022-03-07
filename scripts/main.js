const buttonStart = document.getElementById('start-button');
const sectionQuiz = document.getElementById('quiz-section');
const sectionLanding = document.getElementById('landing');


// When user clicks on button quiz starts - first question appears
buttonStart.addEventListener('click', function(event) {
    // first question appears
    sectionQuiz.classList.remove('hide');
    // hide landing page
    sectionLanding.classList.add('hide')})

    // timer starts



// SELECTION OPTIONS
// when user clicks correct answer show success and add point

// when user clicks incorrect answer show wrong and deduct 5 seconds

// if user does not click any answer, timer will run out and game over screen appears


// after incorrect or correct message shows, show next question

// when timer runs out, end game



// END GAME (summary page)
// show end game screen 
// timer stops
// 1. show their score (number of questions correctly answered)
// 2. prompt user to enter their intials 
// 3. user press submit

// save initials and score to local storage
// go to high score page

// HIGHSCORE Page
// Show list of high scores

// User clicks on Back button
// Redirect user to Landing Page

// User clicks on Clear button
// Clear local storage
// Clear DOM)))