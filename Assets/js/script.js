// Questions/ Answers

let quiz = [
    {
    question: "On what Platform did the original Kingdom Hearts game come out on?",
    answer: "PlayStation",
    optionA:"GameBoy",
    optionB:"PlayStation",
    optionC:"Super Nintendo",
    optionD:"Nintendo 64"
    
  },
    {
    question: "What video game company made Kingdom Hearts?",
    answer: "Square Enix",
    optionA: "Sega",
    optionB: "Bandai/Namco",
    optionC: "Konami",
    optionD: "Square Enix"
    
  },
    {
    question: "Who is Sora's nobody?",
    answer: "Roxas",
    
    optionA:"Roxas",
    optionB:"Riku",
    optionC:"Kairi",
    optionD:"Xehanort"
    
  },
    {
    question: "What does Riku want to name the boat in the first game?",
    answer: "High Wind",
    optionA: "Stylish Question Language",
    optionB:"Stylesheet Query Language",
    optionC:"High Wind",
    optionD:"Structured Query Language"
    
  },
  {
    question: "In what world does Sora meet Donald and Goofy the first time?",
    answer: "Traverse Town",
    optionA:"Twilight Town",
    optionB:"Hollow Bastion",
    optionC:"Castle Oblivion",
    optionD:"Land of Departures"
    
  },
    {
    question: "Who is 'the king?'",
    answer: "Mickey",
    optionA:"Mickey",
    optionB:"Sora",
    optionC:"Xemnas",
    optionD:"Pete"
    
  },
  {
    question: "What is Hollow Bastion's original name?",
    answer: "Radiant Garden",
    optionA:"Pride Lands",
    optionB:"Deep Jungle",
    optionC:"Disney Springs",
    optionD:"Magic Kingdom"
    
  },
  {
    question: "Who turns into a heartless in the first game?",
    answer: "Sora",
    optionA:"Riku",
    optionB:"Kairi",
    optionC:"Sora",
    optionD:"Goofy"
    
  },
  {
    question: "On what platform did the second game, Chain of Memories, come out?",
    answer: "Game Boy", 
    optionA:"Nintendo DS",
    optionB:"PlayStation",
    optionC:"Game Boy",
    optionD:"Sega Dreamcast"
    
  },
  {
    question: "Who is the main villain in Kingdom Hearts?",
    answer: "Xehanort",
    optionA:"Xigbar",
    optionB:"Xemnas",
    optionC:"Axel",
    optionD:"Xehanort"
    
    },
  ];
  
  
  
  
  
//   Initial screen
  firstScreen = document.querySelector("#first")
  startBtn = document.querySelector("#start");
  playAgainBtn = document.querySelector("#play-again");
  gameOverScrn = document.querySelector("#GameOver");
  clock = document.querySelector("#countdown")
  info_box = document.querySelector(".info_box");
  youLost = document.querySelector("#youlost");
  timerEl = document.querySelector("#timer");
  
// Question screen 



  
  
  
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
  
  function starting() {
    countdownTimer();
    firstScreen.style.display="none";
    questionScreen.style.display="block";
    // startQuiz();


  
      
  }
  
  
  
  startBtn.addEventListener("click", function() {
    starting();
   
  }
  )




//   nextBtn.addEventListener("click", function() {

//  


const next = document.getElementsByClassName('next')[0];
var id = 0;
  

  




// Populating questions into html

// Variables
questionScreen = document.querySelector("#game-quiz")
questionNum = document.querySelector("#question-number");
score = document.querySelector("#player-score");
question = document.querySelector(".question")
A = document.querySelector("#A-label")
B = document.querySelector("#B-label")
C = document.querySelector("#C-label")
D = document.querySelector("#D-label")

aInput = document.querySelector("#A")
bInput = document.querySelector("#B")
cInput = document.querySelector("#C")
dInput = document.querySelector("#D")
nextBtn = document.querySelector(".next")





for (var i = 0; i < quiz.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
      question.innerHTML =
        quiz[i]['question']

        A.innerText = quiz[i]['optionA'];
        B.innerText = quiz[i]['optionB'];
        C.innerText = quiz[i]['optionC'];
        D.innerText = quiz[i]['optionD'];





        // if (aInput.checked.innerHTML == quiz[i]['answer']) {
        //     console.log("right answer")
        
        // } else {
        //     console.log("wrong")
        // }
        

    
};

nextBtn.addEventListener("click", function() {

})


function submit() {

}






  
  
// Setting the question text
