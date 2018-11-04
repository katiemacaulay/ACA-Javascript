// Class notes/ whiteboarding
// Goal: Match user guess to a solution (compare)
// user inputs guess

// IsValid()- return true, false
// guess has to be valid- letters a-g in array, guess of 4 letters, can't be blank- 
// bonus: format guess (lowerCase, trim...)
// if invalid 'return rules about guesses', return.

// printNewBoard()
// if guess if valid, print to board- .push()

// calculateHints()
// if possible, .split('')- into arrays
// loop through (forEach) guessArray- for index and item;
// check corroponding index in the forEach in solution array
//  guessArray.forEach(letters, index){
  // const correspondingletter = solutionarray[index]
//       if letter == correspondingletter then add to redDotCOunter
//   } this would be our reddot main function 
// else whitedot(solutionArray.includes[letter])
    // turn guessarr[letter] to 'm'
//    add to white counter
  // )} return reddotcounter and whitedotcounter `${}....
// 

// return hints after valid input
// hint, you have the right spot exactly OR you have the right letter but in different spot
// you can create a function to create perciseness (red peg) by same index;
  // redDot Function- .forEach, forloop or .every()
// check for all cases that have the same letters in the array; 
  // whiteDot Function - forEach- .filter(), .every(), .map()
// then subtract those cases from the persiseness (red dots)- call those (white dots)
// return

// printHints


// checkForWin() return true or false
//  if guess equals solution then 'you win'

// checkForLoss()
// guessesRemaining()- turns
// add turns: 10 turns- should happen as part of the lose function- 'show solution, encourage to play again'
// array length is part of the counter. 
// show hints on all turns below 10 turns, only on valid inputs

// reset game()- to original empty board[]



'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  let solution = []
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution.append(letters[randomIndex]);
  }
  return solution
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isWin(clues) {
  return clues[0] === 4
}

function getSmallerValue(val1, val2) {
  if (val1 < val2 ) {
    return val1
  } else {
    return val2
  }
}

function getIntersectionCount(solutionArray, guessArray){
  const solutionContainsGuess = guessArray.filter((guess) => {
    return solutionArray.includes(guess);
  }).length
  const guessContainsSolution = solutionArray.filter((answer) => {
    return guessArray.includes(answer);
  }).length
  let intersectionCount = getSmallerValue(solutionContainsGuess, guessContainsSolution);
  return intersectionCount
}

function getRedPegs(solutionArray, guessArray){
  const redPegs = solutionArray.filter((answer, index) => {
    return solutionArray[index] == guessArray[index];
  }).length;
  return redPegs
}

function generateHint(solution, guess){
  const solutionArray = solution.split('')
  const guessArray = guess.split('')
  const redPegs = getRedPegs(solutionArray, guessArray)
  const intersectionCount = getIntersectionCount(solutionArray, guessArray)
  const whitePegs = intersectionCount - redPegs;
  console.log({redPegs, whitePegs})
  return [redPegs, whitePegs]
}

function mastermind(solution, guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  // return clues
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  let solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints1', () => {
      let actual = generateHint('aabb', 'aabc');
      let expected = [3, 0]
      assert.deepEqual(actual, expected)
    });
    it('should register a guess and generate hints2', () => {
      let actual = generateHint('eabd', 'aabe');
      let expected = [2, 1]
      assert.deepEqual(actual, expected)
    });
    it('should register a guess and generate hints3', () => {
      let actual = generateHint('aabe', 'eabd');
      let expected = [2, 1]
      assert.deepEqual(actual, expected)
    });
    // it('should register a guess and generate hints3', () => {
    //   let clues = generateHint('aaba', 'aaab');
    //   let expected = ['r','r','w','w']
    //   assert.deepEqual(clues, expected)
    // });
    // it('should be able to detect a win', () => {
    //   let didWin = isWin([4,0])
    //   assert.equal(didWin, true);
    // });
    // it('should be able to not detect a win', () => {
    //   let didWin = isWin([3,1])
    //   assert.equal(didWin, false);
    // });
  });

  // describe('#generateHint()', () => {
  //   it('should generate hints', () => {
  //     assert.equal(generateHint('abdc'), '2-2');
  //   });
  //   it('should generate hints if solution has duplicates', () => {
  //     assert.equal(generateHint('aabb'), '1-1');
  //   });

  // });

} else {

  generateSolution();
  getPrompt();
}
