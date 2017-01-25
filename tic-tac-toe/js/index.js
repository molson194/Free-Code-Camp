var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var openElements = [0,1,2,3,4,5,6,7,8];
var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
var myLetter = "X";
var compLetter = "O";
var myTurn = true;

$( '.gameboard' ).on( 'click', '.square', function() {
  if(board[$(this).attr('id')] == " " && myTurn) {
    board[$(this).attr('id')] = myLetter;
    $($(this)).text(myLetter);
    openElements.splice(openElements.indexOf($(this).attr('id')), 1);
    myTurn = false;
    gameOver();
    computerTurn();
  }
});

function computerTurn() {
  var compElement = Math.floor(Math.random() * openElements.length);
  board[openElements[compElement]] = compLetter;
  $($("#"+openElements[compElement])).text(compLetter);
  openElements.splice(compElement, 1);
  gameOver();
  myTurn = true;
}

function gameOver() {
  winCombinations.forEach(function(element) {
    if ((board[ element[0] ] === board[ element[1] ] ) && ( board[ element[0] ] === board[ element[2] ] ) && ( board[ element[0] ] !== " " ) ) {
      board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      openElements = [0,1,2,3,4,5,6,7,8];
      var i;
      for (i=0; i<9; i++) {
        $($("#"+i)).text("");
      }
      return;
    }
  });
}