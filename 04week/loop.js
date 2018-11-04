'use strict'

// for loop
// Use a for loop to console.log each item in the array carsInReverse.

const carsInReverse = ['ford', 'nissan', 'honda', 'BMW'];


for(let i = 0; i < carsInReverse.length; i ++){
    console.log(carsInReverse[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
const persons = {

    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"

}
// Use a for...in loop to console.log each key.

for(key in persons){
    console.log(key);
};

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

for(key in persons){
    if(key == 'birthDate'){
      console.log(persons[key])
    }
};

// while loop
// Use a for loop to console.log the numbers 1 to 1000.

for(let x = 1; x <= 1000; x++){
    console.log(x);
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.

let number = 0;
do {
  console.log("this number " + number + " is between 1 and 1000");
  number += 1;
} while (number <= 1000);

// When is a for loop better than a while loop?

// For loops are for when you know how many iterations you need to do. For loops are the prefered option for doing loops because they are more self-contained. 
// Do while loops are for when you don't know how many iterations you need to do. 

// How is the readability of the code affected?

// When looking at a Do while, the Initial Expression, Condition, and Increment Expression are not written close together, and harder to read. In addition, the Initial Expresison (let number = 0) is written outside the do... while. 

// What is the difference between a for loop and a for...in loop?

// A for loop defines a starting point and end point, and a for...in loop returns all elements in the arary or object. 

// What is the difference between a while loop and a do...while loop?

// The expression of the while is checked before the body is evaluated, and in a do...while, the expresssion is checked afer the body is evaluated. 