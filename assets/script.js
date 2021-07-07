// array to hold all the questions and answers.

var quizQuestions = [
  {
    question: "The window.confirm function returns a value of _____", //do it like this!!!
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
    answers: {
      a: "Parenting",
      b: "Object Manipulation",
      c: "Passing an argument into a function",
      d: "An Expression",
    },
    correctAnswer: "c",
  },
  {
    question:
      "In JavaScript in order for a Function to execute it must be defined and then _____",
    answers: {
      a: "called",
      b: "executed",
      c: "fired",
      d: "enacted",
    },
    correctAnswer: "a",
  },
  {
    question:
      "A ______ is a named location for a value that gets stored in the browser's memory when a program is run.",
    answers: {
      a: "place-holder",
      b: "variable",
      c: "directory",
      d: "cookie",
    },
    correctAnswer: "b",
  },
  {
    question:
      "The infamous 'if...else' statement is an example of a ______ statement.",
    answers: {
      a: "direct",
      b: "propietary",
      c: "boolean",
      d: "conditional",
    },
    correctAnswer: "d",
  },
];
// Variables to control the DOM
var timerEl = document.getElementById("timer");
// Event Listeners

document.getElementById("start-quiz").addEventListener("click", beginQuiz);

// function to begin the timer once the "START" button is selected.
function beginQuiz() {
  timerCountDown();
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
  // starts the timer.
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
