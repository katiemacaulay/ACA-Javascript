'use strict'

// Write a JavaScript program to display the current day and time.

const currentDate = newDate() =>{
    return today.getDate().getMonth()+1.getFullYear();
}

currentDate

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

const current = newDate(date ,month ,year) =>{
    return 
  date = getDate();
  month = getMonth();
}
console.log(current())

// Write a JavaScript program to convert a number to a string.

const convertToString = (num1) => num1.toString();

console.log(typeof convertToString(20))

// Write a JavaScript program to convert a string to the number.

const convertToNumber = (stringValue1) => Number(stringValue1);

convertToNumber('30')
console.log(typeof convertToNumber('30'));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

const differentDatatypes = (input) =>
typeof input;

console.log(differentDatatypes(false));
console.log(differentDatatypes('hellos'))
console.log(differentDatatypes('meow'));
console.log(differentDatatypes(45));

// Write a JavaScript program that adds 2 numbers together.

const sumOfTwoNumbers = (num1, num2) => num1+num2;

console.log(sumOfTwoNumbers(3,4));

// Write a JavaScript program that runs only when 2 things are true.

const runTrueTest = (thing1, thing2) =>{
  if(thing1 && thing2){
    return true;
  }else{
    return 'OH NO!'
  }
}

console.log(runTrueTest(0, ''));

// Write a JavaScript program that runs when 1 of 2 things are true.

const runTrueOrTest = (thing1, thing2) =>{
  if(thing1 || thing2){
    return true;
  }else{
    return 'OH NO!'
  }
}

console.log(runTrueOrTest(5, ''));

// Write a JavaScript program that runs when both things are not true.

const runTrueNorTest = (thing1, thing2) =>{
  if(!thing1 && !thing2){
    return true;
  }else{
    return 'OH NO!'
  }
}

console.log(runTrueNorTest(0, ''));