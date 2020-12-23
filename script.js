// variables below have been assigned to keep track of time and question state//
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
    title: "How do you call a function?:",
    choices: ["Using the function name followed by parentheses", "On the phone", "Line one needs to read 'function&&'", "Functions are not called in JavaScript"],
    answer: "Using the function name followed by parentheses"
  },
  {
    title: "What does Boolean refer to?:",
    choices: ["A Dolly Parton song", "True/False data type used in JavaScript", "Nintendo character", "Exclusive with Bootstrap"],
    answer: "True/False data type used in JavaScript"
  },
  {
    title: "What does MDN stand for?:",
    choices: ["Must Drive North", "MTV Disney Netflix", "Mozilla Developer Network", "Mars Defeats Neptune"],
    answer: "Mozilla Developer Network"
  },
  {
    title: "If I need to check the datatype of a variables value, what operator would I use?:",
    choices: ["typeof", "===", ".dataValue", "[ ]"],
    answer: "typeof"
  },
  {
    title: "Using Emmet, you are able to code with speed when a document is saved properly, how do I use it to start an HTML doc?:",
    choices: ["Type 'HTML' twice", "! - tab", "You cannot use Emmet to do this", "Who is Emmet?"],
    answer: "! - tab"
  },
]

var time = questions.length * 10; // also keep track of state

// the function below was created to keep time of the quiz, I used the time var created above in the function to start the timer and update it

function timeInterval() {
  // update time
  time--;
  timerEl.textContent = time;
  // if user ran out of time end quiz
  if (time <= 0) {
    // quiz end var is being called, I created quiz end function on 130 as a global function to be accessed numerous times
    quizEnd();
  }
}

// start function created to begin quiz and welcome users 
function start() {
  //hide start screen, show questions screen
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide"); // reapplied this below code quiz end 
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(timeInterval, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

// getQuestion is how quiz questions are presented to the user
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
    answerOption.textContent = index + 1 + " " + choice;  // this is telling the computer to start with a question labeled 1, without this it would start at 0
    answerOption.onclick = questionClick;
    choicesEl.appendChild(answerOption);

  });


}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time = time - 15;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;


    // display new time on page



    feedbackEl.textContent = "Wrong!";
  } else {

    feedbackEl.textContent = "Correct!";
  }

  feedbackEl.setAttribute("class", "feedback");
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
  alert("The quiz has ended, lets see how you Stacked up!")

  // show final score
  var final = document.getElementById("final-score");
  final.textContent = time;

  var end = document.getElementById("end-screen");
  end.removeAttribute("class");


  questionsEl.setAttribute("class", "hide");


}



// save score function - grab value (var initals = grab value) (value.trim) and push new score to local storage and create getScore from local storage
// 

// below functions all involve saving the users highscore, I also created a highscore html doc to support this script 

function saveHighscore() {
  var initials = initialsEl.value.trim();
  console.log(initials);
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []


  var userScore = {
    score: time,
    initials: initials,

  }
  highScores.push(userScore);
  window.localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.href = "./highscore.html";

};


// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = start;


