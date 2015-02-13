//Declare global vars



//Instanciate arrays upon doc opening
$(document).ready(function() { //probably need to change this to onclick something i.e. for when player 2 joins.
  marked = new Array ();
  content = new Array ();

  // specify combinations that mean a user wins
  winningCombinations = [[0,1,2,], [3,4,5], [6,7,8], [0.3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  // create loop to automate the assignment of values to the marked and content arrays

  for (var 1 = 0; 1 <= 8, 1++) {
  marked[1] = false;
  content[1] = '';
  }
});

//Game methods

function canvasClicked(canvas_id){
  theCanvas = "canvas"+canvas_id
  c = document.getElementById(theCanvas)
  cxt = c.getContext("2d")
}

function checkForWinner(marker){
}



