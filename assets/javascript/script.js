// Array filled with: Question, Answer, possible other answers, and empty one for highscores
var prompts = [
    {
        question: "Whats 2+2?",
        answers: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
        },
        correctAnswer: 4
    },
    {
        question: "Whats 3+3?",
        answers: {
            1: 4,
            2: 5,
            3: 6,
            4: 7,
        },
        correctAnswer: 6
    },
    {
        question: "Whats 4+4?",
        answers: {
            1: 7,
            2: 8,
            3: 9,
            4: 10,
        },
        correctAnswer: 8
    },
];

var highScores = [];
var $buttonBox = $("#buttonBoxId");
var quizQ = document.getElementById("headerQs");
var initialText = document.getElementById('starterText');
var submitAnswers = document.getElementById('startQuiz');
var anyButton = document.querySelector(".btn");
var timer = 10;
var timerDisplay = document.getElementById('countdown');
var startButton = document.getElementById("startQuiz");
let questionTracker = 0;

// Need a taskhandler that looks at what is clicked and gives you feedback based on what you click (right or wrong answers)


// Taskhandler function
 var taskHandler = function() {
    // add to event listener checking for other type of button, then checks the answer for the count we're on

};

var quizStarter = function() {
    var timeInterval = setInterval(function(){
        timerDisplay.textContent = timer + " Seconds remaining";

        if (timer == 0) {
            timerDisplay.textContent = "0";
            clearInterval(timeInterval);
            console.log("damn");
        }
        timer--;
    }, 1000);
};

var questionHandler = function() {
    // once called, hides other info on the page and loads questions
    if (questionTracker < 3){
        console.log(prompts[questionTracker].answers);
        let promptAnswers = prompts[questionTracker].answers;
        console.log(promptAnswers);
        let ans1 = promptAnswers[1]
        let ans2 = promptAnswers[2]
        let ans3 = promptAnswers[3]
        let ans4 = promptAnswers[4]    
        quizQ.innerHTML = prompts[questionTracker].question;
        $("#startQuiz").remove();
        $(".btn2").remove();
        initialText.remove();
        $buttonBox.append(
            "<button id=quizButton class=btn2 value="+ ans1 + "><p>"
            + ans1 +
            "</p></button> </br><button id=quizButton class=btn2 value="+ ans2 + "><p>"
            + ans2 +
            "</p></button> </br><button id=quizButton class=btn2 value="+ ans3 + "><p>"
            + ans3 +
            "</p></button> </br><button id=quizButton class=btn2 value="+ ans4 + "><p>"
            + ans4 +
            "</p></button> </br>");
        } else {
            console.log("end the test you fool");
        };
    // count that indicates what question we're on, iterates after putting the correct info on the page
    // Grab the question with our increment[i], then append divs for the potential answers
};


$(".btn").on("click", function(e) {
    console.log(e.target);
    console.log(e.target.value);
    if (e.target.classList.contains('startQuiz')) {
        questionHandler();
        quizStarter();
    }
});

$(document).on("click", ".btn2", function(e) {
    let clickedButton = e.target
    let clickedValue = clickedButton.value;
    console.log("clicked Button value: " + clickedValue);
    console.log("correct Answer: " + prompts[questionTracker].correctAnswer);
    if (clickedButton.value == prompts[questionTracker].correctAnswer) {
        console.log("You dun it!");
        questionTracker++;
        questionHandler();
    } else {
        console.log("frick dude try again");
        questionTracker++;
        questionHandler();
    }
});


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
//     $buttonBox.appendChild(trickAnswers[i].choice1);
//     trickSet.innerHTML = ((trickAnswers[i].choice2));
//     $buttonBox.appendChild(trickAnswers[i].choice2);
//     trickSet.innerHTML = ((trickAnswers[i].choice3));
//     $buttonBox.appendChild(trickAnswers[i].choice3);
//     answerSet.innerHTML = prompts[i].answer;
//     $buttonBox.appendChild(answerSet);
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