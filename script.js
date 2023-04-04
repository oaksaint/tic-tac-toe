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
// Block invalid inputs by running the loop again
function xOrCircle() {
  let teamChoice;
  while (teamChoice !== 'x' && teamChoice !== 'o') {
    teamChoice = prompt('Do you want to play as "o" or "x"?');
  }
  return teamChoice;
}

// Ask player to pick a spot
// Block invalid inputs by running the loop again
function pickSpot() {
  let row = 0;
  let column = 0;

  while (row < 1 || row > 3) {
    row = prompt('Select the row:');
  }

  while (column < 1 || column > 3) {
    column = prompt('Select the column:');
  }

  row--;
  column--;
  return { row: row, column: column };
}

// Populate the board spot chosen by the player, refuse to do so if the spot
// is already taken
function populateBoard(row, column) {
  if (board[row][column] !== '-') {
    alert('Spot already taken! Choose again!');
  } else {
    board[row][column] = teamChoice;
  }
}

// Check for the winner depending on the 8 possible victory conditions, end the
// game if victory is met for either side
// So much for DRY
// TODO check for draw conditions
function checkWin() {
  switch (true) {
    case board[0][0] === board[0][1] && board[0][1] === board[0][2]:
      if (board[0][0] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][0] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[1][0] === board[1][1] && board[1][1] === board[1][2]:
      if (board[1][0] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[1][0] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[2][0] === board[2][1] && board[2][1] === board[2][2]:
      if (board[2][0] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[2][0] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[0][0] === board[1][0] && board[1][0] === board[2][0]:
      if (board[0][0] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][0] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[0][1] === board[1][1] && board[1][1] === board[2][1]:
      if (board[0][1] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][1] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[0][2] === board[1][2] && board[1][2] === board[2][2]:
      if (board[0][2] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][2] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[0][0] === board[1][1] && board[1][1] === board[2][2]:
      if (board[0][0] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][0] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    case board[0][2] === board[1][1] && board[1][1] === board[2][0]:
      if (board[0][2] === 'o') {
        console.log('Circle wins!');
        gameOver = true;
      } else if (board[0][2] === 'x') {
        console.log('X wins!');
        gameOver = true;
      }
      break;

    default:
      break;
  }
}

// Play round, by asking the player what will be their team selection and then
// selecting the row/column that they would like to put their symbol at
function playRound() {
  teamChoice = xOrCircle();
  let { row, column } = pickSpot();
  populateBoard(row, column);
  displayBoard();
  checkWin();
}

// Runs the playRound function on a loop
// TODO put this to run inside a function
while (gameOver === false) {
  playRound();
}
