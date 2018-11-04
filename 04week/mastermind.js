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
let solution = ''
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
    solution.push(letters[randomIndex]);
  }
  return solution.join('')
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function isWin(clues) {
  return clues[0] === 4
}

function isValid(guess, validLetters) {
  const guessArray = guess.split('');
  return guessArray.filter(guess => {
    return validLetters.indexOf(guess) === -1
  }).length === 0;
}

function normalize(guess){
  return guess.toLowerCase();
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
  const normalizedGuess = normalize(guess);
  if(!isValid(normalizedGuess, letters)){
    return console.log('insert 4 letters between a and g'); 
  }
  const generatedHints = generateHint(solution, normalizedGuess);
  console.log(`You have ${generatedHints[0]} correct letters and position, and ${generatedHints[1]} correct letters, but incorrect place`)
  if(isWin(generatedHints)){
    console.log('You win!');
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(solution, guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  let solution = 'abcd';
  describe('#generateHint()', () => {
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
    it('should register a guess and generate hints4', () => {
      let actual = generateHint('aaaa', 'bbbb');
      let expected = [0, 0]
      assert.deepEqual(actual, expected)
    });
    it('should register a guess and generate hints4', () => {
      let actual = generateHint('aaaa', 'bbbb');
      let expected = [0, 0]
      assert.deepEqual(actual, expected)
    });
    it('should register a guess and generate hints5', () => {
      let actual = generateHint('aaah', 'bbbh');
      let expected = [1, 0]
      assert.deepEqual(actual, expected)
    });
  });

  describe('#isValid()', () => {
    it('should check validity of guess', () => {
      const letters = ['a', 'b']
      const guess = 'ab'
      const actual = isValid(guess, letters)
      assert.equal(actual, true);
    });
    it('should check invalidity of guess', () => {
      const letters = ['a', 'b']
      const guess = 'cd'
      const actual = isValid(guess, letters)
      assert.equal(actual, false);
    });
  });

  describe('#isWin()', () => {
    it('should be able to detect a win', () => {
      let didWin = isWin([4,0])
      assert.equal(didWin, true);
    });
    it('should be able to not detect a win', () => {
      let didWin = isWin([3,1])
      assert.equal(didWin, false);
    });
  });

  describe('#normalize()', () => {
    it('should change uppercase to lowercase', () => {
      let actual = normalize('aAAb');
      let expected = 'aaab'
      assert.deepEqual(actual, expected)
    });
  });

  describe('#generateSolution()', () => {
    it('should generate a solution', () => {
      let actual = generateSolution();
      console.log(actual)
      let expectedLength = 4
      assert.deepEqual(actual.length, expectedLength)
    });
  });

} else {
  solution = generateSolution();
  getPrompt();
}
