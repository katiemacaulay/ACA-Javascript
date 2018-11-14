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
}

class Board {
  constructor() {
    this.grid = []
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
  // Your code here
  setUpBoard(){
    this.grid[0][0] = new Checker('-');
    this.grid[0][2] = new Checker('-');
    this.grid[0][4] = new Checker('-');
    this.grid[0][6] = new Checker('-');
    this.grid[1][1] = new Checker('-');
    this.grid[1][3] = new Checker('-');
    this.grid[1][5] = new Checker('-');
    this.grid[1][7] = new Checker('-');
    this.grid[2][0] = new Checker('-');
    this.grid[2][2] = new Checker('-');
    this.grid[2][4] = new Checker('-');
    this.grid[2][6] = new Checker('-');
    this.grid[5][1] = new Checker('+');
    this.grid[5][3] = new Checker('+');
    this.grid[5][5] = new Checker('+');
    this.grid[5][7] = new Checker('+');
    this.grid[6][0] = new Checker('+');
    this.grid[6][2] = new Checker('+');
    this.grid[6][4] = new Checker('+');
    this.grid[6][6] = new Checker('+');
    this.grid[7][1] = new Checker('+');
    this.grid[7][3] = new Checker('+');
    this.grid[7][5] = new Checker('+');
    this.grid[7][7] = new Checker('+');
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
  processUserInput(userString) {
    const row = parseInt(userString.split('')[0])
    const column = parseInt(userString.split('')[1])
    return {row, column}
  }
  moveChecker(startRow, startColumn, endRow, endColumn) {
    this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn]
    this.board.grid[startRow][startColumn] = null
  }
  isInvalidDirection(startChecker, startRow, endRow){
    if(startChecker.symbol === '+' && (endRow - startRow) > 0){
      return true
    } else if(startChecker.symbol === '-' && (startRow - endRow) > 0){
      return true
    } 
    return false
  }

  jumpLocation(difference){
    const findLocation = difference 
    if(difference < 0){
      findLocation + 1;
    } else if(difference > 0)
      findLocation - 1;
  }

  checkForMoves(startRow, startColumn, endRow, endColumn){
    const startChecker = this.board.grid[startRow][startColumn];
    const rowDifference = startRow - endRow;
    const columnDifference = startColumn - endColumn;
    if(Math.abs(rowDifference) === 1 && Math.abs(columnDifference) === 1){
      return true
    } else if (Math.abs(rowDifference) === 2 && Math.abs(columnDifference) === 2){
      const jumpingRow = this.jumpLocation(rowDifference);
      const jumpingColumn= this.jumpLocation(columnDifference);
      const checkerToBeKilled = this.board.grid[jumpingRow][jumpingColumn];
      if(checkerToBeKilled === null){
        return false
      } else if(checkerToBeKilled.symbol === startChecker.symbol){
        return false
      }
      return true
    } 
    return false
  }

  isValid(startRow, startColumn, endRow, endColumn) {
    const startChecker = this.board.grid[startRow][startColumn];
    const endChecker = this.board.grid[endRow][endColumn];
    if (startChecker === null) {
      return false
    } else if(endChecker !== null){
      return false
    } else if(this.isInvalidDirection(startChecker, startRow, endRow)){
      return false
    } 
    return true
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      const {startRow, startColumn} = game.processUserInput(whichPiece)
      const {endRow, endColumn} = game.processUserInput(toWhere)
      const validMove = this.isValid(startRow, startColumn, endRow, endColumn)
      if(!validMove) {
        console.log('invalid move')
        getPrompt()
        return;
      }
      const ableToMoveChecker = this.checkForMoves(startRow, startColumn, endRow, endColumn);
      if(ableToMoveChecker){
        game.moveChecker(startRow, startColumn, endRow, endColumn);
      } 
      console.log('invalid move, try again')
      getPrompt();
      return;
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  // describe('Game', () => {
  //   it('should have a board', () => {
  //     assert.equal(game.board.constructor.name, 'Board');
  //   });
  //   it('board should have 8 rows', () => {
  //     assert.equal(game.board.grid.length, 8);
  //   });
  //   it('each row should have 8 columns', () => {
  //     game.board.grid.forEach((row) => assert.equal(row.length, 8))
  //   });

  // });
  // describe('game.processUserInput()', () => {
  //   it('should be return integers for the location of row and column of start and end', () => {
  //     const {startRow, startColumn} = game.processUserInput('20')
  //     const {endRow, endColumn} = game.processUserInput('31')
  //     assert.equal(startRow, 2);
  //   });
  // });
  describe('checkForMoves(startRow, startColumn, endRow, endColumn)', () => {
      it('should be ok with a move', () => {
        const checkForMove = game.checkForMoves(2, 2, 3, 3)
        assert.equal(checkForMove, true);
      });
      it('should be ok with a move', () => {
        const checkForMove = game.checkForMoves(5, 1, 4, 0)
        assert.equal(checkForMove, true);
      });
      it('should not jump', () => {
        const checkForMove = game.checkForMoves(5, 1, 5, 2)
        assert.equal(checkForMove, false);
      });
      it('should jump checker', () => {
        const checkForMove = game.checkForMoves(5, 1, 3, 3)
        assert.equal(checkForMove, false);
      });
    });
  // describe('Game.isValid()', () => {
  //   it('should be a valid move/ checking for basic movement forward and checker to null spot', () => {
  //     const validMove = game.isValid(2, 0, 3, 0);
  //     assert.equal(validMove, true);
  //   });
  //   it('should be a valid move/ checking for possible direction', () => {
  //     const validMove = game.isValid(2, 0, 1, 0);
  //     assert.equal(validMove, false);
  //   });
  //   it('should be a valid move/ checking for an empty ending position', () => {
  //     const validMove = game.isValid(0, 0, 1, 1);
  //     assert.equal(validMove, false);
  //   });
  //   it('should be a valid move/ checking for empty starting position', () => {
  //     const validMove = game.isValid(2, 1, 1, 1);
  //     assert.equal(validMove, false);
  //   });
  // });

  // describe('Game.moveChecker()', () => {
  //   it('should move a checker', () => {
  //     assert(game.board.grid[2][0]);
  //     assert(!game.board.grid[3][0]);
  //     game.moveChecker('20', '30');
  //     assert(game.board.grid[3][0]);
  //   });
  //   it('should be able to jump over and kill another checker', () => {
  //     game.moveChecker('30', '52');
  //     assert(game.board.grid[5][2]);
  //     assert(!game.board.grid[4][1]);
  //     assert.equal(game.board.checkers.length, 23);
  //   });
  // });
} else {
  getPrompt();
}
