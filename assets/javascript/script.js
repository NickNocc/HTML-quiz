// Array filled with: Question, Answer, possible other answers, and empty one for highscores
var prompts = [
    {
        question: "Whats 2+2",
        answer: 4,
    },
    {
        question: "3+3",
        answer: 6,
    }
];

var trickAnswers = [
    {
        choice1: 3,
        choice2: 2,
        choice3: 1,
    },
];

var buttonBox = document.querySelector(".buttonBox");
var quizQ = document.querySelector("#headerQs");

var highScores = [];

// Need a taskhandler that looks at what is clicked and gives you feedback based on what you click (right or wrong answers)

// Taskhandler function
var taskHandler = function(event) {
    var target = event.target;

    if (target.matches(".btn")) {
        if (target.dataset.state = "answer") {
        // Add Feedback to bottom of question
        // alert to move on
        // return true
        }
        else {
            // Feedback telling you youre wrong
            // alert to move on
            // return false
        }
    }
}
// event.target
// if matches start button
// call the code that starts the quiz
// if matches correct answer (bool)
// Put the text at the bottom that says correct and add the border
// Call the function to go to the next question
// if it doesnt match the right answer
// Put text that says wrong and a border

// function that injects html into the dom
var questionHandler = function() {
    for (var i = 0; i < prompts.length; i++) {
        quizQ.innerHTML = prompts[i].question;
        // function that makes our boxes
        boxGenerator(i);
        // if statement that checks if task handler returns true, if 
        
        }
};

var boxGenerator = function(i) {
    // gets prompt answer and appends it to the button box
    var answerSet = document.createElement("div");
    var trickSet = document.createElement("div");
    console.log("frick");
    answerSet.setAttribute("data-state", "correct");
    trickSet.setAttribute("data-state", "incorrect");

    trickSet.innerHTML = ((trickAnswers[i].choice1));
    buttonBox.appendChild(trickAnswers[i].choice1);

    trickSet.innerHTML = ((trickAnswers[i].choice2));
    buttonBox.appendChild(trickAnswers[i].choice2);

    trickSet.innerHTML = ((trickAnswers[i].choice3));
    buttonBox.appendChild(trickAnswers[i].choice3);

    answerSet.innerHTML = prompts[i].answer;
    buttonBox.appendChild(answerSet);
    // gets trickAnswers and appends it to the button box
};

// For loop that checks against prompts.length, generates question and answers for each pass
// Section that changes the h1 element into the question
// adds boxes with potential answers
// Pop up box that proceedes you to the next question
// Also needs to inject a div for the possible answers to go into can use this later for highscore entry

// Section that saves highscores to local memory
// Function for saving a task
// localStorage.setItem("highScores", JSON.stingify(variable))

// Function that loads highscores


// Timer that counts down from 1 minute for the timed portion of the quiz
// Countdown function from 1 minute
// var containing set time
// setInterval function
// Change text content of timer to the amount of time left
// Remember to clearInterval at some point
// time-- at the end of the function

document.addEventListener("click", questionHandler());