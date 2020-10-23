'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// hand1 enters move, hand2 enters move
// check to see if move is valid
// if the hand is valid, then check to see if hand1 is equal to hand2 then show text 'tie'
// if move is valid and hand1 not equal to hand2 then check for win
// if h1 (hand1) inputs rock and h2 (hand2) inputs scissors return 'Player 1 wins"
// if h1 (hand1) inputs rock and h2 (hand2) inputs paper return 'Player 2 wins"
// if h1 (hand1) inputs scissors and h2 (hand2) inputs paper return 'Player 1 wins"
// if h1 (hand1) inputs scissors and h2 (hand2) inputs rock return 'Player 2 wins"
// if h1 (hand1) inputs paper and h2 (hand2) inputs rock return 'Player 1 wins"
// if h1 (hand1) inputs paper and h2 (hand2) inputs scissors return 'Player 2 wins"

// to add: Spock and Lizard
// hand1 enters move, hand2 enters move
// check to see if move is valid
// if the hand is valid, then check to see if hand1 is equal to hand2 then show text 'tie'
// if move is valid and hand1 not equal to hand2 then check for win
// if h1 (hand1) inputs rock and h2 (hand2) inputs scissors or lizard return 'Player 1 wins"
// if h1 (hand1) inputs rock and h2 (hand2) inputs paper or spock return 'Player 2 wins"
// if h1 (hand1) inputs scissors and h2 (hand2) inputs paper or lizard return 'Player 1 wins"
// if h1 (hand1) inputs scissors and h2 (hand2) inputs rock or spock return 'Player 2 wins"
// if h1 (hand1) inputs paper and h2 (hand2) inputs rock or spock return 'Player 1 wins"
// if h1 (hand1) inputs paper and h2 (hand2) inputs scissors or lizard return 'Player 2 wins"
// if h1 (hand1) inputs lizard and h2 (hand2) inputs paper or spock return 'Player 1 wins"
// if h1 (hand1) inputs lizard and h2 (hand2) inputs rock or scissors return 'Player 2 wins"
// if h1 (hand1) inputs spock and h2 (hand2) inputs scissors or rock return 'Player 1 wins"
// if h1 (hand1) inputs spock and h2 (hand2) inputs lizard or paper return 'Player 1 wins"

function rockPaperScissors(hand1, hand2) {
  if(hand1 === hand2){
    return 'That is a tie!';
  }else if(hand1 === 'rock' && hand2 === 'scissors' || 'lizard'){
    return 'First Player Wins!';
  }else if(hand1 === 'rock' && hand2 === 'paper' || 'spock'){
    return 'Second Player Wins!';
  }else if(hand1 === 'scissors' && hand2 === 'paper' || 'lizard'){
    return 'First Player Wins!';
  }else if(hand1 === 'scissors' && hand2 === 'rock' || 'spock'){
    return 'Second Player Wins!';
  }else if(hand1 === 'paper' && hand2 === 'rock' || 'spock'){
    return 'First Player Wins!';
  }else if(hand1 === 'paper' && hand2 === 'scissors' || 'lizard'){
    return 'Second Player Wins!';
  }else if(hand1 === 'lizard' && hand2 === 'paper' || 'spock'){
    return 'First Player Wins!';
  }else if(hand1 === 'lizard' && hand2 === 'scissors' || 'rock'){
    return 'Second Player Wins!';
  }else if(hand1 === 'spock' && hand2 === 'rock' || 'scissors'){
    return 'First Player Wins!';
  }else if(hand1 === 'spock' && hand2 === 'paper' || 'lizard'){
    return 'Second Player Wins!';
  }else{
    return 'enter a valid play: rock, paper, or scissors';
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      assert.equal(rockPaperScissors('lizard', 'lizard'), "It's a tie!");
      assert.equal(rockPaperScissor('spock', 'spock'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
