//  PSEUDOCODE:
/*
-User clicks button to "Start Quiz" (done)
-Intro text dissapears (done)
-Timer starts counting down from 60 (done)
-Question and answer Setup (I have an array of 5 objects). 
-Each object contains a question (string) w/ 4 possible choices 
(1 array of 4 strings) and the correctChoice (string).
-Need to figue out to iterate through the array of objects and 
write them to the HTML ONE AT A TIME to the using the 
StartButton Event Listener (which is already in place?)
-Once the user hits the button (choice) to the first question they 
are advised if the answer is right or wrong (need to validate 
by comparing the string of their choice (button)) if it equals the 
string in the "correctChoice" string of that object.). 
-If the answer is *wrong* the user is advised the answer is wrong 
and 15 seconds gets deducted from the timer and the -next question is displayed. (Validation). 
-If the answer is *correct* the user is alerted the answer is correct
and the next question is displayed (validation). 
-This cycle continues until all the questions are attempted -OR- the timeRemaining runs out.  
-The ending value of timeRemaining is the users score. 

- End game message is displayed and user is given text input to put in their initials. 
-Store their initials and score into Local Storage.
*/

// array to hold all the questions and answers.

var quizQuestionsAnswers = [
  {
    question: "The window.confirm function returns a value of _____",
    answers: [
      "true/false",
      "A Number",
      "The Browser Version",
      "Nothing at all",
    ],
    correctAnswer: "true/false",
  },
  {
    question: "Placing content between parentheses is called _____",
    answers: [
      "Parenting",
      "Object Manipulation",
      "Passing an argument into a function",
      "An Expression",
    ],
    correctAnswer: "Passing an argument into a function",
  },
  {
    question:
      "In JavaScript in order for a Function to execute it must be defined and then _____",
    answers: ["called", "executed", "fired", "enacted"],
    correctAnswer: "called",
  },
  {
    question:
      "A ______ is a named location for a value that gets stored in the browser's memory when a program is run.",
    answers: ["place-holder", "variable", "directory", "cookie"],
    correctAnswer: "variable",
  },
  {
    question:
      "The infamous 'if...else' statement is an example of a ______ statement.",
    answers: ["direct", "propietary", "boolean", "conditional"],
    correctAnswer: "conditional",
  },
];

// Variables to control the DOM
var timerEl = document.getElementById("timer");
var introContentEl = document.getElementById("intro-content");
var questionContainerEl = document.getElementById("question-container");
var quizQuestionsEl = document.getElementById("quiz-questions");
var choicesEl = document.getElementById("choices");
var answerButtonEl1 = document.getElementById("answerChoice1");
var answerButtonEl2 = document.getElementById("answerChoice2");
var answerButtonEl3 = document.getElementById("answerChoice3");
var answerButtonEl4 = document.getElementById("answerChoice4");
var feedbackEl = document.getElementById("feedback");
var userScoresEl = document.getElementById("user-scores");
var userEndGameInputEl = document.getElementById("user-endgame-input");
var userInitialsInputEl = document.getElementById("userInitialsInputTxtBox");

// Event Listeners for Start Button.

document.getElementById("start-quiz").addEventListener("click", beginQuiz);
document
  .getElementById("start-quiz")
  .addEventListener("click", displayQuestion);

// Event Listeners for Answer Buttons which trigger the validateAnswer Function.
var elements = document.getElementsByClassName("answer-btn");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", validateAnswer);
}

//Event Listners for Submit Button to capture user Initials
document
  .getElementById("userIntialSubmitBtn")
  .addEventListener("click", submitInitials);

// function to begin the timer once the "START" button is selected.
function beginQuiz() {
  timerCountDown();
  //hiding the quiz introduction text.
  introContentEl.setAttribute("class", "hide");
  questionContainerEl.removeAttribute("class", "hide");
}

//Writing Time Remaining to HTML:
document.createAttribute("timer").innerHTML = timeRemaining;
//Timer Variable;
var timeRemaining = 60;
//Timer Countdown function.
// Clear Timer Function.

function timerCountDown() {
  var countdown = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining + " Seconds Remaining.";
    if (timeRemaining === 0 || timeRemaining < 0) {
      timerEl.textContent = "Game Over!";
      stopInterval();
    }
  }, 1000);

  var stopInterval = function () {
    clearInterval(countdown);
  };
  // Need to figure out how to stop the timer when the user is done w/ the questions
  //and carry over the "timeRemaining" as the userScore to be stored locally.
}

// variables to store the "current question" and "current choices" index
var currentQuestionIndex = 0;
var currentChoicesIndex = 0;
// global userInitials variable.
var userInitials;
var timeRemaining = 60;

// Function to display the question and answer. .
function displayQuestion() {
  if (currentQuestionIndex < 5) {
    //Writes first question (index 0) to HTML of quizQuestionsAnswers
    var currentQuestion = quizQuestionsAnswers[currentQuestionIndex++];
    quizQuestionsEl.textContent = currentQuestion.question;
    // Writes the possible choices/answers of those questions to the button HTML.
    var currentChoices = quizQuestionsAnswers[currentChoicesIndex++];
    answerButtonEl1.textContent = currentChoices.answers[0];
    answerButtonEl2.textContent = currentChoices.answers[1];
    answerButtonEl3.textContent = currentChoices.answers[2];
    answerButtonEl4.textContent = currentChoices.answers[3];
    // How would I generate the next question(s) based on the click events when the user
  } else {
    endGame();
  }
  // answers the question?. . .Do I need to write "return" here so I can call currentQuestion
  //with another function?
}

// variable that holds the correct answer of the currentChoices Index.

// Function to validate the user answers.
function validateAnswer() {
  //storing button choice from user as userChoice variable.
  var userChoice = this.textContent;
  // GETTING STUCK HERE.
  if (
    userChoice === quizQuestionsAnswers[currentQuestionIndex - 1].correctAnswer
  ) {
    alert("Great Job!  You got it right!");
  } else {
    alert("You got it wrong and lost 15 Seconds!");
    timeRemaining = timeRemaining - 15;
  }
  displayQuestion();
}

//Function to End the Game.
function endGame() {
  // hides question container when endGame function is triggered.
  questionContainerEl.setAttribute("class", "hide");
  // hides timer when endGame function is triggered.
  timerEl.setAttribute("class", "hide");
  var userScore = timeRemaining;
  console.log(userScore);
  getUserInitials();
}

var getUserInitials = function () {
  userEndGameInputEl.removeAttribute("class", "hide");
};

function submitInitials() {
  // setting var of userInitials and wrote code to capture the text put into the #userInitialsInputTxtbox.
  userInitials = document.getElementById("userInitialsInputTxtBox").value;
  window.open("");
  console.log(userInitials);
  storeUserResultsLocalStorage();
}

//Created function to move user input to local storage

var storeUserResultsLocalStorage = function () {
  localStorage.setItem("userTimeScore", JSON.stringify(timeRemaining));
  localStorage.setItem("userInfo", JSON.stringify(userInitials));
};
