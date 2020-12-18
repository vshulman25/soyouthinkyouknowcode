/ variables to keep track of time and question state
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;
​
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
​
​
function timeInterval() {
  // update time
  
  // if user ran out of time end quiz
  
}
​
​
function start() {
 	//hide start screen, show questions screen
	
​
  // start timer
 
​
  // show starting time
 
​
  //getQuestion();
}
​
function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
​
  // update title with current question
  
  
  // loop over choices
 
    // attach click event listener to each choice
​
    // display on the page
   
  });
}
​
function questionClick() {
  // check if user guessed wrong
  //if(...)
​
    // display new time on page
​
   
​
    feedbackEl.textContent = "Wrong!";
  } else {
    
    feedbackEl.textContent = "Correct!";
  }
​
  
  // move to next question
  currentQuestionIndex++;
​
  // run through length of all questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
​
function quizEnd() {
  // clearinterval ie stop timer
 
​
  // hide questions, display end screen
  
​
  // show final score
  
​
  
 
}
​
​
​
// user clicks button to submit initials
submitBtn.onclick = saveHighscore;
​
// user clicks button to start quiz
startBtn.onclick = startQuiz;
​
initialsEl.onkeyup = checkForEnter;
Collapse



