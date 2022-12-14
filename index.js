// OBJECTS 
// Example 1
// const circle = {
//     radius: 1;
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: false,
//     draw: function() {
//         console.log ('Draw')
//     }
// }

// Duplicating the method
// First Object
// const circle = {
//     radius: 1;
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: false,
//     draw: function() {
//         console.log ('Draw')
//     }
// }

// Second object
// const circle2 = {
//     radius: 2;
//     location: {
//         x: 5,
//         y: 7
//     },
//     isVisible: true,
//     draw: function() {
//         console.log ('Draw')
//     }
// }

// factory function 
// function createCircle() {
//     const circle = {
//         radius: 1,
//         location: {
//             x: 1,
//             y: 1
//         },
//         isVisible: false,
//         draw: function() {
//             console.log ('Draw')
//         }
//     }
//     return circle;
// }

// const circle = createCircle();

// console.log(circle);

// you can simply return the object literal and it should still work. as shown below
// function createCircle() {
//     return  {              // returning the object literal instead of declaring a constant object
//         radius: 1,
//         location: {
//             x: 1,
//             y: 1
//         },
//         isVisible: false,
//         draw: function() {
//             console.log ('Draw')
//         }
//     }
    
// }

// const circle = createCircle()    output will be same as for all other constructor function created
// const circle2 = createCircle()   output will be same as above
// const circle3 = createCircle()   output will be same as above
// console.log(circle);

// we can declare more constants and have the result of the circle function.
// but the result will all be the same because the values were hardcoded . 
// to ensure we have different values, we have to pass the values as parameters. eg

// function createCircle(radius, location) {
//     return  {              
//         radius: radius,
//         location: location,
//         isVisible: false,
//         draw: function() {
//             console.log ('Draw')
//         }
//     }
    
// }

// NOW the output of all factory function created will be different values for radius and location.
// For location we pass in an object
// const circle = createCircle(2 , {x: 3, y: 5})   
// const circle2 = createCircle(5, {x: 7, y: 9})  
// const circle3 = createCircle(8, {x: 1, y: 2})    


// console.log(circle)
// console.log(circle2)

// Making the factory function simpler
// function createCircle(radius) {
//     return  {              
//         radius: radius,
//         draw: function() {
//             console.log ('Draw')
//         }
//     }
    
// }

//  if the value and the key have the same value, modern javascript says to remove the value and add the key. a below
// function createCircle(radius) {
//     return  {              
//         radius,
//         draw: function() {
//             console.log ('Draw')
//         }
//     }
    
// }
// to confirm that this works, we declare a variable and pass an argument
// let circle = createCircle(5)

// we can also reduce the syntax for the draw function. This is the valid syntax for Factory function
// function createCircle(radius) {
//     return  {              
//         radius,
//         draw() {
//             console.log ('Draw')
//         }
//     }
    
// }

// const circle = createCircle(44)

// Constructor Function
// Syntax
// function Circle(radius) {
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw')
//     }
    // return this;  this line is not needed when using constructor function because the js engine does it for you
// }

// to call the function
// new Circle()

// or we can declare a variable and assign it to the function
// const circle = new Circle(5);
// console.log(circle)


// Dynamic Nature of Objects (Adding and deleting members of an object)
// const circle = {
//     radius: 1
// }
// // to add more properties
// circle.color = 'yellow';
// circle.draw = function (){}
// console.log(circle);

// // to delete 
// delete circle.radius;
// console.log(circle);


// Value types vs Reference types

// Value Types
// The value type variable are independent of each other and return their seperate values
// Value types are number, string, boolean, undefined, null, and symbol (this is new in ES6)
// Example 1
// let x = 10;
// let y = x;
// x = 20;
// console.log (x);  
// console.log (y);

// Example 2
// const number = 10;
// function sum (number) {
//     number++;
    // in here number = 11
// }

// sum (10);
// console.log(number)
// out here, number is still = 10

// Reference Types
// These include functions, objects, and arrays. Now, since functions are objects and arrays are also objects
// we can say the reference types is also called objects

// For object types the values returned is the same because when you assign an object to a variable,
// the object is stored somewhere in memory and it is the address of that memory location that is passed
// on to the variable

// Example
// const obj = {number: 10};

// function increase(obj) {
//     obj.number++
// }
// increase(obj);
// console.log(obj);


// Enumerating Properties of an Object
// For...of loop cannot be used on an object because objects are not iterable. Arrays are.
// To loop over an object, we make use of the Object.keys method (which is a constructor function) to
// to iterate over the object to return its keys. To return the values, use Object.values method.

// This example will return the keys of the object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log("Draw");
//     }
// }
// console.log (Object.keys(circle));     <---this line not needed if you are using the next two lines
// for (let key of Object.keys(circle))
// console.log(key, circle[key]);

// This example will return the value
// const circle = {
//     radius: 1,
//     draw() {
//         console.log ('Draw');
//     }
// }
// console.log (Object.values(circle));    <--- this line not needed if we are to print the values
// for (let key in Object.values(circle))
// console.log (key);


// Another way to iterate over an object is with the constructor function called Object.entries
// const circle = {
//     radius: 5,
//     draw() {
//         console.log('Draw')
//     }
// }
// for (let key of Object.keys(circle)) {
//     console.log(key);
// }
//  The Object.entries method was used below
// const circle = {
//     radius: 5,
//     draw() {
//         console.log('Draw')
//     }
// }
// for (let key of Object.entries(circle)) {
//     console.log(key);
// }


// The in operator
// This is used to check if a given property exist in a given object.
// looking at the example above,
// if('radius' in circle) console.log('yes');

// const car = { 
//     make: 'Honda', 
//     model: 'Accord',
//     year: '1998'
// }
// console.log('make' in car);
// expected output: true

// delete car.make;
// if ('make' in car === false) {
//     car.make = 'Toyota';
// }

// console.log(car.make);
// expected output: "Suzuki"


// CLONING AN OBJECT
// This is the process of coping the properties of an object into another object. 
// One way to do this is to use the for in loop (old method)
// Example
// const circle = {
//     radius: 5,
//     draw() {
//         console.log('Draw')
//     }
// }

// const another = {};

// for (let key in circle) {
//     another[key] = circle[key];
// }
// console.log (another);

// Object.assign METHOD
// A more modern way of achieving cloning is by using the Object.assign method. 
// to this, we pass in the first argument (a target object) which can be an empty object, or an existing object.
// const circle = {
//     radius: 5,
//     draw() {
//         console.log('Draw');
//     }
// }
// const another = Object.assign({}, circle);
// console.log('The Another object = ', another);
// NB: the new array musn't be an empty array. the assign method just adds the new to the already existing.

// SPREAD OPERATOR
// This is the latest way to clone an object
const circle = {
    radius: 5,
    draw() {
        console.log('Draw');
    }
}

const another = {...circle};
console.log(another);


// ---------------------------------------------------------------------------

// EXERCISES: Prime Numbers ASSIGNMENT SOLUTION  5/10/2022

// function showPrime (limit) {
//     for (let i = 0; i <= limit; i++) {
//         let num = 0;
    
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 num = 1;
//                 break;
//             }
//         }
    
//         if (i > 1 && num === 0) 
//             console.log(i);
    
//     }
// }

// showPrime (20);



// EXERCISES: Prime Numbers  ( My first attempt)
// function showPrime (limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 !== 0) 
//             console.log (i);
//         }
    
// }

// showPrime(20);

// SOURCE TO SOLUTION ABOVE 

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// THE EXPLANATION FOR THE ABOVE LOGIC

// In the above program, the user is prompted to enter lower and higher bound numbers. Then the prime number between those numbers (including the lower and higher bounds, if any) are listed out.

// Two nested for loops are used in the above program.

// The first for loop is used to loop between the numbers provided by the user. In this case, from 2 to 10.
// A variable flag is set to 0.
// The second for loop is used to loop between 2 to the number that is stored in i.
// Inside the second loop, the value of i is divided by each number from 2 to value one less than i (i - 1).
// While dividing, if any number remainder results in 0, that number is not a prime number. So the variable flag is set to 1.
// Finally, all the numbers that have a flag 0 (not divisible by other numbers) are printed.





// EXERCISES: Sum of multiples of 3 and 5
// function sum (limit) {
//     let sum = 0;
//     for (i = 0; i <= limit; i++) {
//         if (i % 5 === 0 || i % 3 === 0) {
//             sum = i + sum
//         }
//     }
//     console.log(sum)
// }

// sum (10); 


// EXERCISE - String Properties
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating : 10,
//     director : 'b'
// }

// function showProperties (obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string') {
//             console.log (key);
//         }
//     }
// }

// showProperties (movie);



// EXERCISE - Count Truthy
// Using the For loop
// function countTruthy (arrayOfValues) {
//     let count = 0;

//     for (let i = 0; i < arrayOfValues.length; i++) {
//         if (arrayOfValues[i]) {
//             count = count + 1
//         }
//     }
//     return count;
// }
// console.log(countTruthy([1, null, 2, 0]))

// Using the For...of loop
// function countTruthy (arrayOfValues) {
//     let count = 0;
//     for (let value of arrayOfValues) {
//         if (value)  count = count + 1
//     }
//     return count;
// }

// console.log(countTruthy([1, null, 2, 0]))


// EXERCISE - Even and Odd Numbers Exercise
// function showNumbers (limit) {
//     for (i = 0; i <= limit; i++) {
//         if (i % 2 === 0) 
//             console.log(i, " Even");
//          else 
//             console.log(i, "Odd ");
        

               
//     }
// }

// showNumbers(20);


// Break and Continue
// let i = 0;
// while (i <= 10) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
//     i++
// }



// For...of loop
// const colors = ['red', 'green', 'blue']

// for (let rice of colors) {
//     console.log(rice)
// }



// For...in loop (especially used to iterate ove an object)

// const person = {
//     name : 'ElozinoLopez',
//     age : 30,
//     degree : true,
// }

// for (let key in person) {
//     console.log (key)
// }

// To access the object values
// for (let key in person) {
//     console.log(person[key])
// }

// Using the For...in loop to iterate over an array (not a best use case)
// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//     console.log (index);
// }

// // To iterate over the values of the array 
// for (let index in colors) {
//     console.log(index, colors[index]);
// }

// EXERCISE 4 - Function to show stars
// function showStars (rows) {
//     let char = '';
//     for ( i = 1; i <= rows; i++) {
        
//         for ( j = 0; j < i; j++) {
//             char = char + "*"            
//         }
//         char = char + "\n"        
//     }

//     console.log(char)
// }

// showStars(4);


// EXERCISE 4 - Function to show stars  (Another method)
// function showStars (number) {
//     let str = '*';
//     let i = 1;
//     while (number >= i) {
//         console.log(str.repeat(i))
//         i++
//     }
// }

// showStars(3);



// EXERCISE 3 Funtion to check the speed limit of drivers
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const pointPerKm = 5;
//     if (speed < speedLimit + pointPerKm) {
//         console.log("Ok");
//     } 
//     else {
//         const points = Math.floor ((speed - speedLimit) / pointPerKm)
//         if (points >= 12) {
//             console.log("License Suspended")
//         }
//         else {
//             console.log('Points ', points);
//         }
//     }
// }

// console.log(checkSpeed(180));


// EXERCISE 3 Funtion to check the speed limit of drivers
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const pointPerKm = 5;
//     if (speed < speedLimit + pointPerKm) {
//         console.log("Ok");
//         return;
//     }         
//         const points = Math.floor ((speed - speedLimit) / pointPerKm)
//         return (points >= 12) ? 'License Suspended' : points;
// }

// console.log(checkSpeed(180));


//EXERCISE 3 - Program to print multiples of 3, 5, and 3 and 5

// function fizzbuzz () {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 === 0) {
//             console.log ('Buzz');
//         } else if (i % 3 === 0) {
//             console.log ('Fizz');
//         } else {
//             console.log (i)
//         }
//     }
// }

// console.log (fizzbuzz());


// EXERCISE 2 - Function to determine if an image is landscape or portrait
// function isLandscape (width, height) {
//     return width > height ? true : false;
// } 

// let result = isLandscape(74, 52);
// console.log(result);



//EXERCISE - Write a function that returns the maximum of two numbers.
// function maximumOfTwoNumbers (num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// let result = maximumOfTwoNumbers(11, 9)
// console.log(result)

//EXERCISE - Write a function that returns the maximum of two numbers. Modified
// function maximumOfTwoNumbers (num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }                            // The else statement was removed because we are already using return
//         return num2;
    
// }

// let result = maximumOfTwoNumbers(11, 29)
// console.log(result)


//EXERCISE - Write a function that returns the maximum of two numbers. Modified using ternary operator
// function maximumOfTwoNumbers (num1, num2) {
//     const result = num1 > num2 ? num1 : num2;
//     return result;    
// }

// let result = maximumOfTwoNumbers(41, 29)
// console.log(result)


//EXERCISE - Write a function that returns the maximum of two numbers. Minified further using ternary operator
// function maximumOfTwoNumbers (num1, num2) {
//     return (num1 > num2) ? num1 : num2;        
// }

// let result = maximumOfTwoNumbers(41, 29)
// console.log(result)




// Do...While loop
// Program To print multiple times
// let i = 0;

// do {
//     console.log('Hello World')
//     i++
// } while (i < 5)

// program to print numbers between 0 and 10 

// let i = 0;

// do {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++;
// } while (i <= 10)




//While loop  
// Program to print Hello World 5 times
// let i = 0;

// while (i < 5) {
//     console.log('Hello World');
//     i++
// }

// Program to print odd numbers between 0 and 10
// let i = 0;
// while (i <= 10) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }


// For Loop to print out "Hello World" a number of times
// for (let i = 0; i < 1050; i++) {
//     console.log('Hello World')
// }

//For Loop to display odd numbers between 0 and 10
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0)
//     console.log(i);
// }

// Switch...case statement
// let role;

// switch (role) {
//     case 'guest' :
//         console.log('Guest User');
//         break;
//     case 'moderator' :
//         console.log('Moderator User');
//         break;
//     case 'admin' :
//         console.log('Admin User');
//         break;
//     default: 
//         console.log('Regular User')
// }



// Program to Print Grade depending on Scores received Using the if...else statement
// let marks = 83;
// if (marks > 90) {
//     console.log('AA');
// } else if (marks > 80 && marks <= 90) {
//     console.log('AB');
// } else if (marks > 70 && marks <= 80) {
//     console.log("BB");
// } else if (marks > 60 && marks <= 70) {
//     console.log('BC');
// } else if (marks > 50 && marks <= 60) {
//     console.log('CC');
// } else if (marks > 40 && marks <= 50) {
//     console.log('CD');
// } else if ( marks > 30 && marks <= 40) {
//     console.log('DD');
// } else {
//     console.log('FF');
// }




// Program to greet visitors depending on hour of the day
// let hour = 19;
// if (hour >= 1 && hour < 12) {
//     console.log('Good morning')
// }
// else if (hour >= 12 && hour < 18) {
//     console.log ('Good afternoon')
// }
// else {
//     console.log('Good evening')
// }


// Program to calculate Simple Interest SI = P * R * T  / 100
// let principal = 500000;
// let rate = 3;
// let time = 1;
// let simpleInterest = (principal * rate * time) / 100;

// console.log('Simple Interest = ' + simpleInterest);



// JS program to compute the area of a circle where Area = Pi * R *R
// const PI = 3.132;
// let Radius = 14;
// let areaOfCircle = PI * Radius**2;
// console.log('Area of circle = ' + areaOfCircle);


// Swapping Variable Exercise
// let a = 'red';
// let b = 'blue';
// console.log(a, b);
// let c = a;
// a = b;
// b = c;
// console.log(a, b);


// Logical Operators
// let highIncome = true;
// let goodCreditScore = false;
// let isEligibleForLoan = highIncome && goodCreditScore;
// let isUnderProbation = highIncome || goodCreditScore;

// console.log(isEligibleForLoan);
// console.log(isUnderProbation);


// Ternary Operator
// let point = 90;
// let customerRating = point > 100 ? 'Pass' : 'Fail';
// console.log(customerRating);


// Arithmetic Operators
// let x = 70;
// let y = 50;

// console.log (x - y);
// console.log (x + y);
// console.log (x * y);
// console.log (x / y);
// console.log (x % y);
// console.log (x ** y); 

// Increment and Decrement Operators
// let x = 5;
// console.log(++x);
// console.log(x++);
// console.log(x);
// console.log(--x);
// console.log(x--);
// console.log(x);
// console.log(x +=45);
// console.log(x -=10);
// console.log(x /=4);
// console.log(x > 8);
// console.log(x < 8);
// console.log(x <= 8);
// console.log(x >= 8);
// console.log(x === 8);
// console.log(x !== 8);


//Funtion to calculate the square of a number

// function square(number) {
//     return number * number
// }

// let number = square(6);
// console.log (number);

// Function to calculate the sum of two numbers
// function sumOfTwoNumbers (num1, num2) {
//     console.log(num1 + num2)
// }
// sumOfTwoNumbers(7, 7);


// function greet(name, lastName) {
//     console.log('Hello, ' + name + ' ' + lastName);
// }

// greet('ElozinoLopez', 'ASAIJE');


// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('elozinoLopez');


// let selectedColors = ['red', 'yellow', 'blue'];
// console.log(selectedColors);
// console.log(selectedColors[1]);
// selectedColors [1] = 30;
// console.log(selectedColors[1]);




// let person = {
//     name: 'Chinwe Elozino', 
//     age: 30
// }
// person.name = "John";
// console.log(person);
// console.log(person.name);
// person['age'] = 35;
// console.log(person);
// let selection = 'name';
// person[selection] = 'Titi';
// console.log(person.name);        


// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// console.log("Hello World");

// alert('Hello Friends');

// let name = "ElozinoLopez"
// console.log(name);






// function showPrimes(limit) {
//     for (let i = 0; i <= limit; i++) {
//         let number = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 number = 1;
//                 break
//             }
//         }
//         if (i > 1 && number === 0) {
//             console.log(i)
//         }
//     }
// } 
// console.log(showPrimes(20));