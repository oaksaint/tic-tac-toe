let board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
];

let gameOver = false;
let gameBoard = { matrix: board };

function displayBoard() {
  console.log(board[0].join(' '));
  console.log(board[1].join(' '));
  console.log(board[2].join(' '));
  console.log('\n');
}

function xOrCircle() {
  let teamChoice = prompt('Do you want to play as O or X?');
  return teamChoice;
}

function playRound() {
  teamChoice = xOrCircle();
  let row = prompt('Select the row:');
  let column = prompt('Select the column:');
  row--;
  column--;
  board[row][column] = teamChoice;
  displayBoard();
}

while (gameOver === false) {
  playRound();
}
