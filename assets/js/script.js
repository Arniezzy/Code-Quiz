var intervalId = null; 
var secondsLeft = 75;
var timeLeft = document.querySelector('#timeLeft');
var startBtn = document.querySelector('#startQuiz');
// Questions
var questionIndex = [
    {
        question: "What company developed JavaScript?",
        choices: ["1. Apple", "2. Microsoft", "3. Netscape", "4. Google"],
        answer: "3. Netscape"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["1. var", "2. let", "3. const", "4. All of the above"],
        answer: "4. All of the above"
    },
    {
        question: "How do we write a comment in javascrip?",
        choices: ["1. /* */", "2. #", "3. //", "4. $ $"],
        answer: "3. //"
    },
    {
        question: "String Values must be enclosed within _____ whn being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "2. curly brackets"
    },
];

// timer starts when button is pressed when time is done Time's up displays
startBtn.addEventListener("click", function () {
    intervalId = setInterval(function() {
        timeLeft.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        var nextQuestion = loadQuestion(0);
        document.getElementById("question").innerHTML = nextQuestion;
        var nextChoices = loadChoices(0);
        console.log(nextChoices);
        for (var index = 1; index <= nextChoices.length; index++) {
            document.getElementById('answer-' + index).innerHTML = nextChoices[index-1];
        }

        if (secondsLeft < 0) {
            clearInterval(intervalId);
            timeLeft.textContent = "Time's up!";
        }
    }, 1000);
})

// Functions to load questions and choices
function loadQuestion(index) {
    var question = questionIndex[index].question;
    return question;
}

function loadChoices(index) {
    var choices = questionIndex[index].choices;
    return choices;
}
