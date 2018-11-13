'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a board of possible moves for + and -
// then if .includes in *possible move array then move.
// Create an valid move array, take starting position and (+1 to the array(row) position)- moving foward
// (-1 to the array number for moving backwards)
// create board boundaries that move index has to be = or greater than... for this condiditon:
// Possible moves- check for normal move, then take the index number of the starting array and (+1, or -1) to that index (column) return location as string row/column 
// check for jump locations (double valid move array)- (+2 or -2) return location as string with column and row
// then check for double jump (check row +4(-4)) take jump locations and (+2/ -2);
// if endposition is included in the array of possible wins: then
// if normal move, check for empty
// if 

class Checker {
  constructor(symbol){
    this.symbol = symbol;
  }

  foo(){
    console.log("My symbol is " + this.symbol);
  }
}

function bar(checker){
  console.log("My symbol is " + checker.symbol);
}

const blackChecker = new Checker('+');
const whiteChecker = new Checker('-');

class Board {
  constructor() {
    this.grid = []

    var checker = new Checker("9");
    bar(checker);
    checker.foo();
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }

  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  addSymbols(checker){

  }
  // Your code here
  setUpBoard(){
    this.grid[0][0] = whiteChecker;
    this.grid[0][2] = whiteChecker;
    this.grid[0][4] = whiteChecker;
    this.grid[0][6] = whiteChecker;
    this.grid[1][1] = whiteChecker;
    this.grid[1][3] = whiteChecker;
    this.grid[1][5] = whiteChecker;
    this.grid[1][7] = whiteChecker;
    this.grid[2][0] = whiteChecker;
    this.grid[2][2] = whiteChecker;
    this.grid[2][4] = whiteChecker;
    this.grid[2][6] = whiteChecker;
    this.grid[5][1] = blackChecker;
    this.grid[5][3] = blackChecker;
    this.grid[5][5] = blackChecker;
    this.grid[5][7] = blackChecker;
    this.grid[6][0] = blackChecker;
    this.grid[6][2] = blackChecker;
    this.grid[6][4] = blackChecker;
    this.grid[6][6] = blackChecker;
    this.grid[7][1] = blackChecker;
    this.grid[7][3] = blackChecker;
    this.grid[7][5] = blackChecker;
    this.grid[7][7] = blackChecker;
  }

}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.setUpBoard();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
