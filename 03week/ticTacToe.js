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

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


const checkForX = (item) => item === 'X';
const checkForY = (item) => item === 'Y';


const checkIfAllSame = (arr) => {
  if(arr.every(checkForX)){
    console.log("X's won")
  } else if(arr.every(checkForY)){
    console.log("Y's win")
  }
}
const horizonalWin = () => {
  board.forEach((item) => {
    checkIfAllSame(item);
  })
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

const veriticalWin = () => {
  rotateMatrix(board).forEach((item) => {
    checkIfAllSame(item);
  })
}

const diagonalWin = () => {
  const diagonalDown = [board[0][0], board[1][1], board[2][2]];
  const diagonalUp = [board[2][0], board[1][1], board[0][2]];
  checkIfAllSame(diagonalDown);
  checkIfAllSame(diagonalUp);
}

const switchPlayer = () => {
  if(playerTurn === 'X'){
    playerTurn = 'Y';
  } else {
    playerTurn = 'X'
  }
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  switchPlayer();
  horizonalWin()
  veriticalWin()
  diagonalWin();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
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
