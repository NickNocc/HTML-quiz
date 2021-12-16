// Array filled with: Question, Answer, possible other answers
var prompts = [
    {
        question: "What does HTML stand for?",
        answers: {
            1: "Hyper Test Making Language",
            2: "Hyper Test Maker Loca",
            3: "Hotties Text Me Lots",
            4: "Hyper Text Markup Language",
        },
        correctAnswer: "ans4"
    },
    {
        question: "How many tags are in a regular element",
        answers: {
            1: 4,
            2: 2,
            3: 1,
            4: "none",
        },
        correctAnswer: "ans2"
    },
    {
        question: "< br  / > What type of tag is this?",
        answers: {
            1: "Break tag",
            2: "Broken tag",
            3: "Broke tag",
            4: "A tag",
        },
        correctAnswer: "ans1"
    },
    {
        question: "What is the HTML element used to display an image?",
        answers: {
            1: " < img > ",
            2: " < pics > ",
            3: " < pic > ",
            4: " < image > "
        },
        correctAnswer: "ans1"
    },
    {
        question: "How do you write an HTML comment?",
        answers: {
            1: "// Like this",
            2: "/* No its this way! */",
            3: "< !-- Y'all are crazy, this is how its done! -->",
            4: "(Don't listen to them this is how you comment)"
        },
        correctAnswer: "ans3"
    }
];
// Selectors that are used throughout the quiz
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


// Called when quiz finishes
 var quizOver = function() {
    //  removes any content we dont want on the page anymore
    $(".secondary").remove("p", "span");
    $(".btn2").remove();
    // stops the timer so your score doesnt change after the quiz
    timerStop = true;
    // Setting the page up for score submission
    quizQ.innerHTML = "<h1 id=headerQs>All Done</h1> <p class=endText>Your final score is: "
     + timer +
    "</p></br><label for=hsSub>Enter your name: </label> <input type=text id=hsSub name=name> <button class=btn>Submit</button>";
};
// Deals with our high score table, as well as getting info from local storage
var highScores = function() {
    let loadedScores = JSON.parse(localStorage.getItem("highScores"));
    quizQ.innerHTML = "<h1 id=headerQs>High Scores</h1>";
    $buttonBox.append("<ol class=listy id=highScoreList></ol>")
    loadedScores.forEach(element => {
        $("#highScoreList").append("<li>" + element + "</li>")
    });
    $secondaryInput.append("<button class=reset>Go back</button> <button class=btn id=clearIt>Clear highscores</button>");
    // I dont know how to add more than one class when adding html like this so here we are
    $("#clearIt").addClass("clearIt");
    $(".reset").addClass("btn");
}
// Sets up our timer, also checks for when timer hits 0 or the user finishes the quiz
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
// Makes sure that our quiz is only as long as our question promprs
    if (questionTracker < prompts.length){
        let promptAnswers = prompts[questionTracker].answers;
        // gets potential answers so we can add them to our buttons
        let ans1 = promptAnswers[1];
        let ans2 = promptAnswers[2];
        let ans3 = promptAnswers[3];
        let ans4 = promptAnswers[4];
        // Sets the h1 to be the question text
        quizQ.innerHTML = prompts[questionTracker].question;
        // gets rid of content we dont want on the page
        $("#startQuiz").remove();
        $(".btn2").remove();
        initialText.remove();
        // appends our buttons to the page along with the corresponding answers
        $buttonBox.append(
            "<button id=quizButton class=btn2 value=ans1>"
            + ans1 +
            "</button> <button id=quizButton class=btn2 value=ans2>"
            + ans2 +
            "</button> <button id=quizButton class=btn2 value=ans3>"
            + ans3 +
            "</button> <button id=quizButton class=btn2 value=ans4>"
            + ans4 +
            "</button> ");
        } else {
            // once we get through all of our questions, the quiz ends
            quizOver();
        };
};

// First click function because I needed two for some reason
$(document).on("click", ".btn", function(e) {
    // checks if the start button is clicked
    if (e.target.classList.contains('startQuiz')) {
        questionHandler();
        quizStarter();
    } else if (e.target.classList.contains('clearIt')) {
        // checks if the clear high score button is clicked, clears on click
        localStorage.clear();
    } else if (e.target.classList.contains('reset')) {
        // checks if the go back button is clicked, once it is the page refreshes
        location.reload();
    } else if (e.target.classList.contains("highScorePage")) {
        // For when we go straight to the high score page, removes content we dont want then runs highscore
        $(".btn2").remove();
        $("#startQuiz").remove();
        $("#starterText").remove();
        $(".secondary").remove("p", "span");
        highScores();
    } else {
        // For the end of the quiz, as that is the only button without another class
        // Gets the name value from our submit button/box
        let highName = $("#hsSub").val();
        // an array to hold the high scores
        var highScoreHolder = [];
        highScoreHolder.push(highName + " " + timer);
        // Before we add to our local storage we add them to this middleman array
        let addToLocal = JSON.parse(localStorage.getItem("highScores"));
        // adds each element to our array
        if (addToLocal) {    
            addToLocal.forEach(element => {
                highScoreHolder.push(element);
            })
            // if we dont dont have our middleman array
        } else if (!addToLocal) {
            addToLocal = [];
        }
        // sets all of our info to local storage
        localStorage.setItem("highScores", JSON.stringify(highScoreHolder));
        // go to high scores
        highScores();
    }
});

// exclusively for quiz buttons
$(document).on("click", ".btn2", function(e) {
    // checks the value of our button, which should match the answer
    var clickedButton = e.target
    console.log(e.target);
    var clickedValue = clickedButton.value;
    console.log(clickedValue);
    // checks if the answer is correct
    if (clickedValue == prompts[questionTracker].correctAnswer) {
        // increment questionTracker to move on to the next question
        questionTracker++;
        // adds an indicator to tell you if you got the last question wrong or right, also removes previous responses
        $(".secondary").remove("p", "span");
        $secondaryInput.append("<p class=secondary><span>Correct!</span></p>");
        // Now questionhandler will load the next question
        questionHandler();
    } else {
        // increment questionTracker to move on to the next question
        questionTracker++;
        // Penalty for missing a question
        timer = timer - 10;
        // adds an indicator to tell you if you got the last question wrong or right, also removes previous responses
        $(".secondary").remove("p", "span");
                // Now questionhandler will load the next question

        $secondaryInput.append("<p class=secondary><span>Wrong!</span></p>")
        questionHandler();
    }
});