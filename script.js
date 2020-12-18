// variables to keep track of time and question state//
var currentQuestionIndex = 0;
var timerId;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questions = [
  {
    title: "What do the Jenners actually do?:",
    choices: ["I don't know", "Astronauting", "nothing", "banking"],
    answer: "I don't know"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
]

var time = questions.length * 10; // also keep track of state

function timeInterval() {
  // update time
  time--;
  timerEl.textContent = time;
  // if user ran out of time end quiz
  if (time <= 0) {
    // quiz end - fix comment
   quizEnd();
  }
}


function start() {
  //hide start screen, show questions screen
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide"); // reapply below code quiz end 
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(timeInterval, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  var title = document.getElementById("question-title");
  title.textContent = currentQuestion.title;


  choicesEl.innerHTML = "";

  // loop over choices - first choice is css and second is argument 
  currentQuestion.choices.forEach((choice, index) => {
    var answerOption = document.createElement("button");
    answerOption.setAttribute("class", "choice");
    answerOption.setAttribute("value", choice);
    answerOption.textContent = index + 1 + " " +  choice;

    answerOption.onclick = questionClick;
    choicesEl.appendChild(answerOption);
  })

  // attach click event listener to each choice

  // display on the page

}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time = time -15; 
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time; 


  // display new time on page



    feedbackEl.textContent = "Wrong!";
  } else {

    feedbackEl.textContent = "Correct!";
  }


  // move to next question
  currentQuestionIndex++;

  // run through length of all questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // clearinterval ie stop timer
  clearInterval(timerId);

  // hide questions, display end screen
  alert("QUIZ IS OVA")

  // show final score
  var final = document.getElementById("final-score");
  final.textContent = time;




}



// save score function - grab value (var initals = grab value) (value.trim) and push new score to local storage and create getScore from local storage
// 
var userScore = {
  score: time, 
  initials: initials,
}
// user clicks button to submit initials
// submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = start;

// initialsEl.onkeyup = checkForEnter;
// Collapse

