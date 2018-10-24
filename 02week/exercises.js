'use strict'

const cars = ['Ford', 'Nissan', 'Mazda', 'Jeep'];
console.log(cars.length);

const moreCars = ['Tesla', 'BMW', 'Audi', 'Honda'];

const totalCars = cars.concat(moreCars);
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));


const stringOfCars = (arr1) => {
    return totalCars.join('');
}
