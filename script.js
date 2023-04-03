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
// Blocks invalid inputs by running the loop again
function xOrCircle() {
  let teamChoice;
  while (teamChoice !== 'x' && teamChoice !== 'o') {
    teamChoice = prompt('Do you want to play as "o" or "x"?');
  }
  return teamChoice;
}

// Ask player to pick a spot
function pickSpot() {
  let row = prompt('Select the row:');
  let column = prompt('Select the column:');
  row--;
  column--;
  return { row: row, column: column };
}

// Populates the board spot chosen by the player, refuses to do so if the spot
// is already taken
function populateBoard(row, column) {
  if (board[row][column] !== '-') {
    alert('Spot already taken! Choose again!');
  } else {
    board[row][column] = teamChoice;
  }
}

// Play round, by asking the player what will be their team selection and then
// selecting the row/column that they would like to put their symbol at
function playRound() {
  teamChoice = xOrCircle();
  let { row, column } = pickSpot();
  populateBoard(row, column);
  displayBoard();
}

// Runs the playRound function on a loop
// TODO put this to run inside a function
while (gameOver === false) {
  playRound();
}
