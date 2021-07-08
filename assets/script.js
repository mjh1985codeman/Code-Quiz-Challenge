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
    question: "Placing conten between parentheses is called _____",
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

console.log(quizQuestionsAnswers);
// Variables to control the DOM
var timerEl = document.getElementById("timer");
var quizContainerEl = document.getElementById("quiz-content");
var questionContainerEl = document.getElementById("question-container");
var quoteEl = document.getElementById("quote");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
// Event Listeners

document.getElementById("start-quiz").addEventListener("click", beginQuiz);

// function to begin the timer once the "START" button is selected.
function beginQuiz() {
  timerCountDown();
  //hiding the quiz container.
  quizContainerEl.setAttribute("class", "hide");
}
//Writing Time Remaining to HTML:
document.createAttribute("timer").innerHTML = timeRemaining;
//Timer Variable;
var timeRemaining = 60;
//Timer Countdown function.
function timerCountDown() {
  //var timeRemaining = 60;
  var countdown = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if (timeRemaining <= 0) {
      stopInterval();
    }
  }, 1000);

  var stopInterval = function () {
    clearInterval(countdown);
  };
  // Need to figure out how to stop the timer when the user is done w/ the questions
  //and carry over the "timeRemaining" as the userScore to be stored locally.
}

// Function to Generate the QuizQuestions.

function generateQuiz() {
  // display the first question from the quizQuestions array and possible answers to that question.
}

function saveUserScore() {
  // this function will save the user Score as a variable to be used for the "displayHighScores" function
}
function displayhighScores() {
  // this function will display the stored scores on the highscores.html page.
}

//generateQuiz ();

//beginQuiz();
