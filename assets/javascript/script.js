// Array filled with: Question, Answer, possible other answers, and empty one for highscores
var prompts = [
    {
        question: "Whats 2+2?",
        correctAnswer: "4"
    },
    {
        question: "Whats 3+3",
        correctAnswer: "6"
    },
    {
        question: "Whats 4+4?",
        correctAnswer: "8"
    },
];

var answers1 = [
    {
        ans1: 1,
        ans2: 2,
        ans3: 3,
        ans4: 4
    },
    {
        ans1: 1,
        ans2: 6,
        ans3: 3,
        ans4: 4
    },
    {
        ans1: 1,
        ans2: 2,
        ans3: 8,
        ans4: 4
    }
];

var highScores = [];

var buttonBox = document.getElementById("buttonBoxId");
var quizQ = document.getElementById("headerQs");
var initialText = document.getElementById('starterText');
var submitAnswers = document.getElementById('startQuiz');
var anyButton = document.querySelector(".btn");
var timer = 60;
var timerDisplay = document.getElementById('countdown');
var startButton = document.getElementById("startQuiz");

// Need a taskhandler that looks at what is clicked and gives you feedback based on what you click (right or wrong answers)


// Taskhandler function
 var taskHandler = function(event) {
    event.preventDefault;
    var clickCheck = event.target;
    if (clickCheck == startButton) {
          quizStarter();
     }
    //  if (target.matches(".btn")) {
    //      if (target.dataset.state = "answer") {
    //      // Add Feedback to bottom of question
    //      // alert to move on
    //      // return true
    //      }
    //      else {
    //          // Feedback telling you youre wrong
    //          // alert to move on
    //          // return false
};

var quizStarter = function() {
    var timeInterval = setInterval(function(){
        timerDisplay.textContent = timer + " Seconds remaining";

        if (timer == 0) {
            timerDisplay.textContent = "0";
            clearInterval(timeInterval);
            // Send to score input page
        }
        timer--;
    }, 1000);
    questionHandler();
};

var questionHandler = function() {

        var boxBuilder1 = document.createElement("button");       
        var boxBuilder2 = document.createElement("button");  
        var boxBuilder3 = document.createElement("button");  

        boxBuilder1.className = "btn";
        boxBuilder2.className = "btn";
        boxBuilder3.className = "btn";
        anyButton.className = "btn";

        buttonBox.appendChild(boxBuilder1);
        buttonBox.appendChild(boxBuilder2);
        buttonBox.appendChild(boxBuilder3);
        buttonBox.appendChild(anyButton);

    for(var i = 0; i < prompts.length; i++) {
        quizQ.innerText = prompts[i].question;  
        boxBuilder1.innerText = answers1[i].ans1;
        boxBuilder2.innerText = answers1[i].ans2;
        boxBuilder3.innerText = answers1[i].ans3;
        anyButton.innerText = answers1[i].ans4;

        if 
    }

};


anyButton.addEventListener("click", taskHandler);

// event.target
// if matches start button
// call the code that starts the quiz
// if matches correct answer (bool)
// Put the text at the bottom that says correct and add the border
// Call the function to go to the next question
// if it doesnt match the right answer
// Put text that says wrong and a border
// function that injects html into the dom
// var questionHandler = function() {
//     for (var i = 0; i < prompts.length; i++) {
//         quizQ.innerHTML = prompts[i].question;
//         // function that makes our boxes
//         boxGenerator(i);
//         // if statement that checks if task handler returns true, if 
        
//         }
// };
// var boxGenerator = function(i) {
//     // gets prompt answer and appends it to the button box
//     var answerSet = document.createElement("div");
//     var trickSet = document.createElement("div");
//     console.log("frick");
//     answerSet.setAttribute("data-state", "correct");
//     trickSet.setAttribute("data-state", "incorrect");
//     trickSet.innerHTML = ((trickAnswers[i].choice1));
//     buttonBox.appendChild(trickAnswers[i].choice1);
//     trickSet.innerHTML = ((trickAnswers[i].choice2));
//     buttonBox.appendChild(trickAnswers[i].choice2);
//     trickSet.innerHTML = ((trickAnswers[i].choice3));
//     buttonBox.appendChild(trickAnswers[i].choice3);
//     answerSet.innerHTML = prompts[i].answer;
//     buttonBox.appendChild(answerSet);
//     // gets trickAnswers and appends it to the button box
// };
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
// document.addEventListener("click", taskHandler());