// array to hold all the questions and answers. 

let quizQuestions = [
    {
      question: "The window.confirm function returns a value of _____",
      answers: {
        a: "true/false",
        b: "A Number",
        c: "The Browser Version",
        d: "Nothing at all"
      },
      correctAnswer: "a"
    },
    {
        question: "Placing conten between parentheses is called _____",
        answers: {
          a: "Parenting",
          b: "Object Manipulation",
          c: "Passing an argument into a function",
          d: "An Expression"
        },
        correctAnswer: "c"
    },
    {
        question: "In JavaScript in order for a Function to execute it must be defined and then _____",
        answers: {
          a: "called",
          b: "executed",
          c: "fired",
          d: "enacted"
        },
        correctAnswer: "a"
    },
    {
        question: "A ______ is a named location for a value that gets stored in the browser's memory when a program is run.",
        answers: {
          a: "place-holder",
          b: "variable",
          c: "directory",
          d: "cookie"
        },
        correctAnswer: "b"
    },
    {
        question: "The infamous 'if...else' statement is an example of a ______ statement.",
        answers: {
          a: "direct",
          b: "propietary",
          c: "boolean",
          d: "conditional"
        },
        correctAnswer: "d"
    }
  ];

// Event Listeners
document.addEventListener("click", beginQuiz);

// function to begin the timer once the "START" button is selected. 
function beginQuiz() {

    window.alert("The quiz has begun!");

}



  // Function to Generate the QuizQuestions.

function generateQuiz() {
    // display the first question from the quizQuestions array and possible answers to that question.
};


//generateQuiz ();

//beginQuiz();













