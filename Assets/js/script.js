var timer; 
var timeLeft = 2; // seconds


// What to do when the timer runs out
function gameOver() {
    $('#GameOver').show();
    $('#play-again').show();
    $('#countdown').hide();
    $('#youlost').show();

}



function youWin() {

}


function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    $('#timer').html(timeLeft);
  else {
      gameOver();

    ;
  }
}

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);
  
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();
  
  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
   $('#start').hide()


}
$('#play-again').on("click", function() {
    $('#GameOver').hide();
    $('#play-again').hide();
    $('#countdown').show();
    $('#youlost').hide();
    start(); }




