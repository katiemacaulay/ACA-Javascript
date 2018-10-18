'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 // Create an array of the word using split('')

  // check that input is valid isValid(): 
 
  // create a variable that identifies vowels
  // create a variable that identify constanants or !vowel

  // function checkFirstLetters (Check the first letters of string)
  // Take the consonants and move to the end of word function sendToEndOfWord

  // if the array[0] = vowel then word.push 'y' 'a' 'y'
  // else return checkFirstLetters + 'a' + 'y'

const wordOnlyHasLetters = (word) => {
  const wordArray = word.split('');
  const filterLetters = (character) => !parseInt(character);
  const lettersArray = wordArray.filter(filterLetters)
  const isValid = (arr1, arr2) => arr1.length == arr2.length;
  return isValid(wordArray, lettersArray);
}

const findPositionofFirstVowel = (word) =>{ 
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const wordArray = word.split('');
  const isVowel = (letter) => !vowel.includes(letter)
  const someArray = wordArray.map(isVowel)
  return someArray.indexOf(false)
}

const sendToEndOfWord = (word, position) => {
  const wordArray = word.split('');
  const cutConsonant = wordArray.slice(position);
  const cutOffPart = wordArray.slice(0, position);
  return cutConsonant.join('') + cutOffPart.join('');
}

const makePigLatin = (word) => {
  if(!wordOnlyHasLetters(word)){
    return word
  }
  const position = findPositionofFirstVowel(word);
  if(position === 0){
    return word + 'yay';
  }
  return sendToEndOfWord(word, position) + 'ay';
};

const translatePhrase = (ph) => {
  return ph.split(' ').map(makePigLatin).join(' ');
}

let a = translatePhrase("r2d2 was here")
console.log(a)


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
