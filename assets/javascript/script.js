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
var $secondaryInput = $(".secondaryInput")
var quizQ = document.getElementById("headerQs");
var initialText = document.getElementById('starterText');
var submitAnswers = document.getElementById('startQuiz');
var anyButton = document.querySelector(".btn");
var timer = 60;
var timerDisplay = document.getElementById('countdown');
var startButton = document.getElementById("startQuiz");
let questionTracker = 0;
var timerStop = false;

// Need a taskhandler that looks at what is clicked and gives you feedback based on what you click (right or wrong answers)


// Taskhandler function
 var quizOver = function() {
    timerStop = true;
    $(".btn2").remove();
    quizQ.innerHTML = "<h1 id=headerQs>All Done</h1> <p class=endText>Your final score is: "
     + timer +
    "</p></br><label for=hsSub>Enter your name: </label> <input type=text id=hsSub name=name> <button class=btn>Submit</button>";
};

var highScores = function() {
    let loadedScores = JSON.parse(localStorage.getItem("highScores"));
    quizQ.innerHTML = "<h1 id=headerQs>High Scores</h1>";
    $buttonBox.append("<ol id=highScoreList></ol>")
    console.log("loaded scores: " + loadedScores);
    loadedScores.forEach(element => {
        $("#highScoreList").append("<li>" + element + "</li>")
    });
    $secondaryInput.append("<button>Go back</button> <button class=btn id=clearIt>Clear highscores</button>");
    $("#clearIt").addClass("clearIt");
}

var quizStarter = function() {
    var timeInterval = setInterval(function(){
        timerDisplay.textContent = timer + " Seconds remaining";

        if (timer == 0) {
            timerDisplay.textContent = "0";
            clearInterval(timeInterval);
            quizOver();
        } else if (timerStop){
            clearInterval(timeInterval);
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
            quizOver();
        };
    // count that indicates what question we're on, iterates after putting the correct info on the page
    // Grab the question with our increment[i], then append divs for the potential answers
};


$(document).on("click", ".btn", function(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('startQuiz')) {
        questionHandler();
        quizStarter();
    } else if (e.target.classList.contains('clearIt')) {
        localStorage.clear();
    } else {
        let highName = $("#hsSub").val();
        var highScoreHolder = [];
        highScoreHolder.push(highName + " " + timer);
        let addToLocal = JSON.parse(localStorage.getItem("highScores"));
        if (addToLocal) {    
            addToLocal.forEach(element => {
                highScoreHolder.push(element);
            })
        } else if (!addToLocal) {
            addToLocal = [];
        }
        localStorage.setItem("highScores", JSON.stringify(highScoreHolder));
        // go to high scores
        highScores();
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
        timer = timer - 10;
        questionHandler();
    }
});