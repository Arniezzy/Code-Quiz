var questions = [
    {
        questions: "What company developed JavaScript?",
        choices: ["1. Apple", "2. Microsoft", "3. Netscape", "4. Google"],
        answer: "3. Netscape"
    },
    {
        questions: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["1. var", "2. let", "3. const", "4. All of the above"],
        answer: "4. All of the above"
    },
    {
        questions: "How do we write a comment in javascrip?",
        choices: ["1. /* */", "2. #", "3. //", "4. $ $"],
        answer: "3. //"
    },
    {
        questions: "String Values must be enclosed within _____ whn being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "2. curly brackets"
    },
];

// timer starts when button is pressed when time is done Time's up displays
var intervalId = null; 
var secondsLeft = 5;
var timeLeft = document.querySelector('#timeLeft');
console.log(timeLeft);
var timer = document.querySelector('#startQuiz');
console.log(timer);

timer.addEventListener("click", function () {
    intervalId = setInterval(function() {
        timeLeft.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        
        if (secondsLeft <= 0) {
            clearInterval(intervalId);
            timeLeft.textContent = "Time's up!";
        }
    }, 1000);
})