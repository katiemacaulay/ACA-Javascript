'use strict'

// Write a JavaScript program to display the current day and time.

const currentDateToday = () => {
  const todayDate = new Date();
  return (todayDate.getMonth()+1) + '/'+ todayDate.getDate() + '/' + todayDate.getFullYear();
}

console.log(currentDateToday());

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