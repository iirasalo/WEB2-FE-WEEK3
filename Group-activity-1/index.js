//TASK 1.1

const greetingStart = 'Hello ';
const name = 'Iira';

const greeting = greetingStart + name;
console.log(greeting);

/* */

const greeting2 = `${greetingStart}${name}`;
console.log(greeting2);

/* */

const greeting3 = greetingStart.concat(name);
console.log(greeting3);


//TASK 1.2

const earthEst = 'Earth is estimated to be ';
const age = '4.543 billion years old.';

const earthAge = `${earthEst}${age}`;
console.log(earthAge);

//TASK 2.1

//1. Explain hpw the following code works?


const drinks = 4.99;
const food = 6.65;
const total = drinks + food;

const result = `The total bill is ${total}. ${
  total > 10
    ? `Your card payment will be declined`
    : `Your card payment will be accepted`
}.`;

console.log(result);

//--> Variable drinks is 4.99 food is 6.65. VAriable total sums drinks and food together resulting in 11.64.
//    result will be printed at console. If the total price of food and drinks is higher than 10 (if true) 
//    the card payment will be declined and if total is less than 10 (if false) The card payment will be accepted. 
//--> What is printed at console: The total bill is 11.64. Your card payment will be declined.

// TASK 2.2

//2. Refactor this code using ternary operator

let ageVote = 15;

let result2 = `${
    ageVote >= 18 
  ? `You are eligible to vote.`
  : `You are not eligible to vote yet.`
}`

console.log(result2);

// TASK 3.1

//1. Given the following arraY. Use `forEach()` to double each number in the array and print the result

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    let double = number *2 ;
    console.log(double);
});

// TASK. 3.2.
//2. Refactor this code using `forEach()`

const monthlySales = [1234, 2345, 3456, 4567, 5678];
let totalSales = 0;

monthlySales.forEach((value) => {
    totalSales += value;
    console.log('Total Sales are', totalSales);
  });