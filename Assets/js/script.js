// Questions/ Answers
var currentQ = 0;
var score = 0;
var timeLeft = 30;
var timeStop;
var names = [];
var scores = [];

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
var youWin = document.querySelector("#you-win");
var youWon = document.querySelector("#youwon")
var rightAns = document.querySelector("#right-answercontainer");
var wrongAns = document.querySelector("#wrong-answercontainer");
hScoreBtn = document.querySelector("#high-score")
  
// Question screen 

var nextBtn = document.querySelector("#next")
var aBtn = document.querySelector("#A")
var bBtn = document.querySelector("#B")
var cBtn = document.querySelector("#C")
var dBtn = document.querySelector("#D")
var userScore = document.querySelector("#user-score")
var questionText = document.querySelector("#question-text")
var questionScreen = document.querySelector("#game-quiz")

// Saving score
var enterName = document.querySelector("#entername-card");
var nameList = document.querySelector("#scoreList");
var nameInput = document.querySelector("#name");
var nameForm = document.querySelector("#user-name")
var highScore = document.querySelector("#saved-scores")
var scoreHolder = document.querySelector("score-holder");



function renderName() {
    nameList.innerHTML="";
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent= name + " Score: " + score;
        li.setAttribute("data-index", i)

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";



        nameList.appendChild(li);
    }

}


function init() {
    enterName.style.display="block";
    var storedNames = JSON.parse(localStorage.getItem("names"));
    var storedScores = JSON.parse(localStorage.getItem("scores"))

    if (storedNames !== null) {
        names = storedNames
    } else if (storedScores !== null) {
        scores = storedScores
    }

    renderName();
}

function storeNames() {
    localStorage.setItem("names", JSON.stringify(names));
}


function storeScore() {
    localStorage.setItem("scores", JSON.stringify(userScore.innerHTML));

}


nameForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    var nameText = nameInput.value.trim();
    var finalScore = userScore.innerHTML;

    if (nameText === ""){
        return;
    } else if (finalScore ==="") {
        return;
    }

    names.push(nameText);
    scores.push(finalScore)
    nameInput.value = "";



    storeScore();
    storeNames();
    renderName();
    highScore.style.display="block";

})



nameList.addEventListener("click", function(event) {
    var element = event.target;
  
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      names.splice(index, 1);
      scores.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeScore();
      storeNames();
      renderName();
    }
  });
  
  
  
function gameOver() {
    playAgainBtn.style.display="block";
    timerEl.style.display="none";
    info_box.style.display="none";
    youLost.style.display="block";
    clock.style.display="none";
    startBtn.style.display="none";  
    questionScreen.style.display="none";
    firstScreen.style.display="block";
    wrongAns.style.display="none";
    rightAns.style.display="none";
    gameOverScrn.style.display="block";
    init();

  
document.querySelector('#play-again').addEventListener('click', function(){
    window.location.reload();
    return false;
});
  
  }
  
  // function youWin() {
  
  // }
  
function countdownTimer() {

  timeStop = setInterval(function(){
        timeTest()}, 1000); 
};
  
 


function startQuiz() {
    
    currentQ = 0;
    questionText.innerHTML = quiz[currentQ].question;
    aBtn.innerHTML = quiz[currentQ].answers[0].option;
    aBtn.addEventListener("click", function(){populate(0)});

    bBtn.innerHTML = quiz[currentQ].answers[1].option;
    bBtn.addEventListener("click", function(){populate(1)});
      
    cBtn.innerHTML = quiz[currentQ].answers[2].option;
    cBtn.addEventListener("click", function(){populate(2)});

    dBtn.innerHTML = quiz[currentQ].answers[3].option;
    dBtn.addEventListener("click", function() {populate(3)});

}


function populate(num) {
    let a = num;
    if (quiz[currentQ].answers[a].answer) {
        rightAnswer();
}
    else  {
    wrongAnswer();         

}
    userScore.innerHTML = score;
    if(currentQ <9){
        next();
    } else {
        winning();
        
    }
   
}




function timeTest() {
    if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
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
}


function starting() {
    highScore.style.display="none";
    firstScreen.style.display="none";
    questionScreen.style.display="block";
    startQuiz();
      
  };


hScoreBtn.addEventListener("click", function() {
    highScore.style.display="block";


})
  
  
  
startBtn.addEventListener("click", function() {
    countdownTimer();
    starting();
   
  })



function next() {
    currentQ++;
    questionText.innerHTML = quiz[currentQ].question;
    aBtn.innerHTML = quiz[currentQ].answers[0].option;
    bBtn.innerHTML = quiz[currentQ].answers[1].option;
    cBtn.innerHTML = quiz[currentQ].answers[2].option;
    dBtn.innerHTML = quiz[currentQ].answers[3].option;


}


function rightAnswer() {
    wrongAns.style.display="none";
    score++;
    rightAns.style.display="block";

}

function wrongAnswer() {
    rightAns.style.display="none";
    timeLeft = timeLeft-5;
    wrongAns.style.display="block";
}

function winning() {

    playAgainBtn.style.display="block";
    timerEl.style.display="none";
    info_box.style.display="none";
    youLost.style.display="block";
    clock.style.display="none";
    startBtn.style.display="none";  
    questionScreen.style.display="none";
    firstScreen.style.display="block";
    wrongAns.style.display="none";
    rightAns.style.display="none";
    youLost.style.display="none";
    youWin.style.display="block";
    youWon.style.display="block";
    clearInterval(timeStop);
    init();
    document.querySelector('#play-again').addEventListener('click', function(){
        window.location.reload();
        return false;})
        


}