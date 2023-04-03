// TODO get rid of global variables and shove them into functions/modules
let board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
];
let gameOver = false;
let gameBoard = { matrix: board };

// Display the matrix grid row by row with a new line afterwards
function displayBoard() {
  console.log(board[0].join(' '));
  console.log(board[1].join(' '));
  console.log(board[2].join(' '));
  console.log('\n');
}

// Ask if the player will be X or circle
// TODO implement an automatic selection afterwards for player 2
function xOrCircle() {
  let teamChoice = prompt('Do you want to play as O or X?');
  return teamChoice;
}

// Play round, by asking the player what will be their team selection and then
// selecting the row/column that they would like to put their symbol at
function playRound() {
  teamChoice = xOrCircle();
  let row = prompt('Select the row:');
  let column = prompt('Select the column:');
  row--;
  column--;

  if (board[row][column] !== '-') {
    alert('Spot already taken! Choose again!');
  } else {
    board[row][column] = teamChoice;
  }

  displayBoard();
}

// Runs the playRound function on a loop
// TODO put this to run inside a function
while (gameOver === false) {
  playRound();
}
