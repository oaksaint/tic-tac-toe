// TODO get rid of global variables and shove them into functions/modules
let board = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
];
let gameOver = false;
let gameBoard = { matrix: board };
let playerOne;
let playerTwo;
let playerTurn;

// Display the matrix grid row by row with a new line afterwards
function displayBoard() {
  console.log(board[0].join(' '));
  console.log(board[1].join(' '));
  console.log(board[2].join(' '));
  console.log('\n');
}

// Ask if the player 1 will be X or circle
// Block invalid inputs by running the loop again
function playerOneChoose() {
  while (playerOne !== 'x' && playerOne !== 'o') {
    playerOne = prompt('Player 1, do you want to play as "o" or "x"?');
  }
}

// Automatically assign the player 2 selection based on player 1 choice
function playerTwoAssign() {
  if (playerOne === 'x') {
    playerTwo = 'o';
  } else {
    playerTwo = 'x';
  }
}

// Switches turn depending on the playerTurn variable, if "x" then it'll switch
// to "o"
function switchTurn() {
  playerTurn === playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
}

// Ask player to pick a spot
// Block invalid inputs by running the loop again
function pickSpot() {
  let row = 0;
  let column = 0;

  while (row < 1 || row > 3) {
    row = prompt(`Player "${playerTurn}", select the row:`);
  }

  while (column < 1 || column > 3) {
    column = prompt(`Player "${playerTurn}", select the column:`);
  }

  row--;
  column--;
  return { row: row, column: column };
}

// Populate the board spot chosen by the current player, refuse to do so if the
// spot is already taken
function populateBoard(row, column) {
  if (board[row][column] !== '-') {
    alert('Spot already taken! Choose again!');
  } else {
    board[row][column] = playerTurn;
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

    case board[0].includes('-') === false && board[1].includes('-') === false && board[2].includes('-') === false:
      console.log("It's a draw!");
      gameOver = true;
      break;

    default:
      break;
  }
}

// Play a round, start by switching the turns, the allow the current player to
// pick a row and column, populates the board based on their choice, displays
// the board and check for win conditions
function playRound() {
  switchTurn();
  let { row, column } = pickSpot();
  populateBoard(row, column);
  displayBoard();
  checkWin();
}

// Runs the two player choice functions before starting the round loop
playerOneChoose();
playerTwoAssign();

// Runs the playRound function on a loop
while (gameOver === false) {
  playRound();
}
