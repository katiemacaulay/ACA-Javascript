'use strict';

// player must enter a valid number (0-2);
// After one player plays, switch players
// player can only play on squares that have nothing on them/ invalid
// On the thrid play of X  then  check for win and for anyone after
// Declare a win: horizonal or vertical or diagonal;
// array[0].every('x')


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let counter = 0;

function incrementCounter() {
  counter++
}

const catsScratch = () => counter === 9;

const resetBoard = () => {
  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const isValidInput = (row, column) => {
  const validInputs = [0, 1, 2];
  const isValid = validInputs.indexOf(row) > -1 && validInputs.indexOf(column) > -1;
  return isValid
}

const isOpenForPlay = (row, column) => {
  return board[row][column] === ' '
}

const checksArrayForPlayerWin = (arr) => {
  return arr.every((item) => item === playerTurn)
}

const checkMatrixForWin = (board) => {
  let results = board.filter(checksArrayForPlayerWin);
  return results.length > 0
}

const horizontalWin = () => {
  return checkMatrixForWin(board);
}

const rotateMatrix = (matrix) => {
   let rotatedMatrix = []
   for (var x = 0; x < matrix.length; x++) {
       rotatedMatrix[x] = []
       for (var y = 0; y < matrix.length; y++) {
           rotatedMatrix[x][y] = matrix[y][x]
       }
   }
   return rotatedMatrix
}

const verticalWin = () => {
  return checkMatrixForWin(rotateMatrix(board))
}

const diagonalWin = () => {
  const diagonalDown = [board[0][0], board[1][1], board[2][2]];
  const diagonalUp = [board[2][0], board[1][1], board[0][2]];
  return checkMatrixForWin([diagonalDown, diagonalUp]);
}

const switchPlayer = () => {
  if(playerTurn === 'X'){
    playerTurn = 'O';
  } else {
    playerTurn = 'X'
  }
}

function checkForWin() {
  const horizontal = horizontalWin();
  const vertical = verticalWin();
  const diagonal = diagonalWin();
  return horizontal || vertical || diagonal
}

function ticTacToe(row, column) {
  if(!isValidInput(row, column)){
    return console.log('invalid entry, try again!')
  }
  if (!isOpenForPlay(row, column)) {
    return console.log('Invalid move, try again!')
  }
  board[row][column] = playerTurn;
  incrementCounter();
  if (checkForWin()) {
    console.log(`Player ${playerTurn} won!`)
    board = resetBoard();
  } 
  if(catsScratch()){
    console.log("It's a tie! Try again!")
    board = resetBoard();
  }
  switchPlayer();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(parseInt(row), parseInt(column));
      getPrompt();
    });
  });

}



// Tests
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
