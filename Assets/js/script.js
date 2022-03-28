// Questions/ Answers
var currentQ = 0;
var score = 0;



let quiz = [
    {
        question: "On what Platform did the original Kingdom Hearts game come out on?",
        answers: [ 
            {option:"PlayStation", answer:true},
            {option:"GameBoy", answer:false},
            {option:"Super Nintendo", answer:false},
            {option:"Nintendo 64", answer:false},
    ]
        
      },
    {
        question: "What video game company made Kingdom Hearts?",
        answers: [ 
            {option:"Sega", answer:false},
            {option:"Bandai/Namco", answer:false},
            {option:"Konami", answer:false},
            {option:"Square Enix", answer:true},
    ]
        
      },
    {
        question: "Who is Sora's nobody?",
        answers: [ 
            {option:"Roxas", answer:true},
            {option:"Riku", answer:false},
            {option:"Kairi", answer:false},
            {option:"Xehanort", answer:false},
    ]
        
      },
    {
        question: "What does Riku want to name the boat in the first game?",
        answers: [ 
            {option:"Thundara", answer:false},
            {option:"Papou", answer:false},
            {option:"High Wind", answer:true},
            {option:"Aeroga", answer:false},
    ]
        
      },
    {
        question: "In what world does Sora meet Donald and Goofy the first time?",
        answers: [ 
            {option:"Traverse Town", answer:true},
            {option:"Twilight Town", answer:false},
            {option:"Hollow Bastion", answer:false},
            {option:"Castle", answer:false},
    ]
        
      },
    {
        question: "Who is NOT one of the playable characters in Birth by Sleep?",
        answers: [ 
            {option:"Terra", answer:false},
            {option:"Aqua", answer:false},
            {option:"Ventus", answer:false},
            {option:"Eraqus", answer:true},
    ]
        
      },
    {
        question: "What is Hollow Bastion's original name?",
        answers: [ 
            {option:"Midgar", answer:false},
            {option:"Magic Kingdom", answer:false},
            {option:"Radiant Garden", answer:true},
            {option:"Deep Jungle", answer:false},
    ]
        
      },
    {
        question: "Who turns into a heartless in the first game?",
        answers: [ 
            {option:"Riku", answer:false},
            {option:"Kairi", answer:false},
            {option:"Sora", answer:true},
            {option:"Goofy", answer:false},
    ]
        
      },
    {
        question: "On what platform did the second game, Chain of Memories, come out?",
        answers: [ 
            {option:"PlayStation", answer:false},
            {option:"GameBoy", answer:true},
            {option:"Nintendo DS", answer:false},
            {option:"Sega Dreamcast", answer:false},
    ]
        
      },
    {
        question: "Who is the main villain in Kingdom Hearts?",
        answers: [ 
            {option:"Xigbar", answer:false},
            {option:"Xemnas", answer:false},
            {option:"Axel", answer:false},
            {option:"Xehanort", answer:true},
    ]
        
      },
      ];
  
  
  
  
  
//   Initial screen
var firstScreen = document.querySelector("#first")
var startBtn = document.querySelector("#start");
var playAgainBtn = document.querySelector("#play-again");
var gameOverScrn = document.querySelector("#GameOver");
var clock = document.querySelector("#countdown")
var info_box = document.querySelector(".info_box");
var youLost = document.querySelector("#youlost");
var timerEl = document.querySelector("#timer");
var youWin = document.querySelector("#youWin");
  
// Question screen 

var nextBtn = document.querySelector("#next")
var aBtn = document.querySelector("#A")
var bBtn = document.querySelector("#B")
var cBtn = document.querySelector("#C")
var dBtn = document.querySelector("#D")
var userScore = document.querySelector("#user-score")
var questionText = document.querySelector("#question-text")
var questionScreen = document.querySelector("#game-quiz")

// Events






  
  
  
function gameOver() {
    playAgainBtn.style.display="block";
    timerEl.style.display="none";
    info_box.style.display="none";
    youLost.style.display="block";
    clock.style.display="none";
    startBtn.style.display="none";  
    questionScreen.style.display="none";
    firstScreen.style.display="block";
    gameOverScrn.style.display="block";

  
document.querySelector('#play-again').addEventListener('click', function(){
    window.location.reload();
    return false;
});
  
  }
  
  // function youWin() {
  
  // }
  
function countdownTimer() {
      var timeLeft = 5;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
    } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        gameOver();
        
        
        // Use `clearInterval()` to stop the timer
        // Call the `displayMessage()` function
    }
    }, 1000);
  
  }
  
function readySet() {
    countdownTimer();
    firstScreen.style.display="none";
    questionScreen.style.display="block";
    startQuiz();
};

function startQuiz() {
    currentQ = 0;
    questionText.innerHTML = quiz[currentQ].question;
    aBtn.innerHTML = quiz[currentQ].answers[0].option;
    aBtn.addEventListener("click", function() {
        let a = 0;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    }) 


    bBtn.innerHTML = quiz[currentQ].answers[1].option;
    bBtn.addEventListener("click", function() {
        let a = 1;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })
    cBtn.innerHTML = quiz[currentQ].answers[2].option;
    cBtn.addEventListener("click", function() {
        let a = 2;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })
    dBtn.innerHTML = quiz[currentQ].answers[3].option;
    dBtn.addEventListener("click", function() {
        let a = 3;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        }
        else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })



}


function starting() {
    countdownTimer();
    firstScreen.style.display="none";
    questionScreen.style.display="block";
    startQuiz();
  
      
  }
  
  
  
  startBtn.addEventListener("click", function() {
    starting();
   
  }
  )



function next() {
    currentQ++;
    if (currentQ>=11){
        nextBtn.style.display="none";
    }
    questionText.innerHTML = quiz[currentQ].question;
    aBtn.innerHTML = quiz[currentQ].answers[0].option;
    aBtn.addEventListener("click", function() {
        let a = 10;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })


    bBtn.innerHTML = quiz[currentQ].answers[1].option;
    bBtn.addEventListener("click", function() {
        let a = 10;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";

        }
    })
    cBtn.innerHTML = quiz[currentQ].answers[2].option;
    cBtn.addEventListener("click", function() {
        let a = 10;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })
    dBtn.innerHTML = quiz[currentQ].answers[3].option;
    dBtn.addEventListener("click", function() {
        let a = 10;
        if (quiz[currentQ].answers[a].answer) {
            if (score<10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQ<10){
            next();
        } else if (currentQ >= 10 && score >= 7) {
            youWin.style.display="block";
            firstScreen.style.display="none";
        }
    })

}

startQuiz();