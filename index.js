/*
// --------- TOC --------- //

// --------- BASICS --------- //

// --------- OPERATORS --------- //

// --------- CONTROL FLOW --------- //

// --------- OBJECTS --------- //

// --------- ARRAYS --------- //

// --------- FUNCTIONS --------- //

                        
---------------------------------------------------------------|


// --------- BASICS --------- //

//Primitive types

let name = 'Dave'; //string
let age = 38; //number
let isApproved = false; //boolean

//undefined
let likesPurple;
let likesColor = undefined;

let hipster = null; //null (typeof an object)

//Objects

let person = {}; //Object literal syntax

let person = {
    name: 'Dave',
    age: 38
};

//access object properties through:
//1.  dot notation
    person.name = 'Peter';
//2. bracket notation
    person['name'] = 'Mary';
//Brackets handy when you don't know what the target property will be
//until the runtime, ie, your website is displayed and the user puts
//chooses to put in their 'name'
let selection = 'name' //selection variable assigned a value on runtime
person[selection] = 'Mary' // name chosen as the value to the obj property


//Arrays 
    //Just using the brackets is an array literal
    //Initialize by populating with data

let selectedColors = ['red', 'blue'];

//JS is a dynamic language meaning the variables can change at runtime
//same with arrays

//add to array
selectedColors[2] = 'green';

console.log(selectedColors);

//add different types to array

selectedColors[3] = 1;

//has key:value pairs (properties) that we can use - like an object - using dot notation
// i.e, write selectedColors. to see the properties show up in VScode
//i.e. to get the length
console.log(selectedColors.length);

//Functions

//function declaration
//the logic for this function should be to display a message on the console
function greet() {
    //add statements to define logic in the application
    console.log('Hello World'); //statement - terminated with semi-colon
}  //function declarations don't need a semi-colon

//function statement

greet(); //semi colon to indicate that this is a statement

//function inputs

function greet(name) {  //variable that has meaning inside of the function - a parameter
    console.log('Hello ' + name);
}

greet('John'); // John is the argument to the greet function
//reusable
greet('Mary');

//Multiple arguments

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');


function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John'); // If you don't pass an argument, the lastName
// variable will be 'undefined' - variables default value. 

//Types of functions

//A set of statements that either;

//1. Performing a task
function greet(name) {
    console.log('Hello ' + name);
}

greet('John');

//2. Calculates/returns a value

function square(number) {
    return number * number; //return the value to whoever is calling the function
}

//square(2); //This function statement returns a value, so use it to initialize a variable
let number = square(2);
console.log(number);

//You don't have to declare a seperate value, you can pass the returning value
//to another function
console.log(square(2)); //log is a function of the console object, so we can pass
// a string like 'hello' or a call to another function 

// --------- Operators --------- //

//javascript operators
    // Operators, Variables + expressions = algorithms

    //Arithmetic
let x = 10;
let y = 3;

console.log(x + y); // x + y is an 'expression' it is something that produces a value
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //remainder of division
console.log(x ** y); //exponentiation (x to the power of y)

//Increment (++)
console.log(x++);

//Decrement (--)
console.log(--x);

//Assgnment operator

let x = 10;

x++;
//same as:
x = x + 1;
//but not good if you want to increment by more than one

//use
x = x + 5;
//or shorthand
x += 5;

//all other arithmetic operators behave the same

x = x * 3;
//same as

x *= 3;

    //Comparison operator
let x = 1;

//Relational operators
console.log( x > 0);
console.log( x >= 0);
console.log( x < 0);
console.log( x >= 0);

// Equality
console.log( x === 0);
console.log( x !== 0);//not equal to

    // Equality operators

//strict equality operator (Type + Value)
console.log(1 === 1); // True
console.log('1' === 1); // False

// Loose Equality 
console.log(1 == 1); // True
console.log('1' == 1); //True - JS looks at the left value converts the right value to match it, called 'type coersion
console.log(true == 1); // Same as above - true

    // Ternary - or conditional - Operator 

//If a customer has more than 100 points,
// they are a 'gold' customer, otherwise, 
//they are a 'silver' customer.




let points = 90;
//      if condition equates to true, use the first value - after ? - else use the value after : 
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

    // Logical operators

    // logical and, or, or not

    //Logical AND (&&)
    //Returns true if both operands are TRUE
    console.log(true && true); //true
    console.log(false && true); // False

//e.g

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // True

    //Logical OR (||)
    //Returns TRUE if one of the operands is TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoan);

//NOT (!)

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


// Logical operators with non-booleans - truthy and falsey

// JS engine tries to interprete non booleans in a logical expression as 'truthy' or 'falsey'

    false || true //optuts: true
    false || 'Duck' // Outputs: "Duck"
    false || 1 //Outputs: 1

    //Falsy (false)
    // undefined
    // null
    // 0
    // false
    // ''
    // Nan

//If any of the obove get used in a logical expression, they will be evaluated as 'false'

// Truthy - anything that is not falsey

false || 1 || 3 //JS engine will stop at the first value that is truthy - 1 and return it and the evaluation stops. 
//This is called 'short-circuiting'

//An app where a user has to choose a T-shirt
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //if the user chooses a color, userColor is initialized to the currentColor
//or if a color isn't selected, then the userColor is undefined and the truthy value will be initialized to the variable
console.log(currentColor); // outputs red



    //Bitwise operators

    // 1 = 00000001  - 8 bits, 1 byte
    // 2 = 00000010
    // R = 00000011
    console.log(1 | 2); // Bitwise OR (just one |) - It will check all the bits in both numbers at each bit
    // and if any of the bits is 1 then the result will be one.
    // the first 6 bits are 0, so the result will have 6 bits - 000000, the 7th and 8th bit will be 1 because
    // both the 2 and 1 have a bit at the end. - the result is 00000011 //console log = 3

    // 1 = 00000001  - 8 bits, 1 byte
    // 2 = 00000010

    console.log(1 & 2); // Bitwise AND
    //Both of the compared bits numbers need to be 1 for 1 to be returned, otherwise the result is 0
    // in the above example, not any of the bits are both 1 so, 0 is returned.

    //Real-world scenario: Implement an access control system
    //Read, write and execute
    // 00000100
    // 00000010
    // 00000001

    const readPermission = 4;
    const writePermission = 2;
    const executePermission = 1;

    let myPermission = 0;

    myPermission = myPermission | readPermission | writePermission;

    let message = (myPermission & readPermission) ? 'yes' : 'no';

    console.log(message);


    // Bitwise OR you can add, and bitwise AND you can check permissions


    //Operator precedence

    let x = 2 + 3 * 4;
    console.log(x); // Outputs 14 - multiplication has a higher precendence so that is done first
    //use parenthesis

// *** Exercise *** // Swap the variables so they print 'blue' and 'red' to the console.

let a = 'red';
let b = 'blue';


console.log(a);
console.log(b);


// --------- CONTROL FLOW --------- //

    // IF / Else 

//Hour
// If the hour is between 6am - 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

if (condition)
    statement

    // Multiple statements need to be in a code block


if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}

let hour = 20;

if (hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
}
else {
    console.log('Good evening!');
}
    // As there is only one statemen in the else / if conditional you should remove all the curly braces.

    // Switch / Case

    // Check to see if the person is a 1. Guest 2. Moderator, or 3. Admin

    let role = 'moderator';

    switch (role) { //add the variable instead of the conditional
        case 'guest': //check the variable against this value
        console.log('Guest User'); // if it evaluated as true, do this
        break; // Break out of the switch statement if above is true, else the other switch conditions are 
        // evaluated.

        case 'moderator':
        console.log('Moderator User');
        break;

        default: // If no switch statements match the variable's value, this is used. No need to break
            console.log('Unknown User'); // as there are no more conditions to check.

    }



// ** //  Loops - For, While, Do..while, For..in, For..of

    //Used to make this less ugly
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');

    // For loops
        //Varible declaired inside the scope of the loop - it can't be referenced outside the loop

for (let i = 0; i < 5; i++ ) //initialExpression - i for initialize, anything ok | condition | increment expression
    console.log('Hello World') // statement // doesn't need a code block for one statement

    // Exercise - display all odd numbers between 1 and including 5:

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0)
    console.log(i);
}
    // Reverse it:
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0)
    console.log(i);
}


    // While Loops
        //Variable that is used in the loop is declared externally - not in the loop itself

let i = 0;
while (i <= 5) {  // while statement & (condition) - condition is evaluated first, so if false, the loop breaks
    if (i % 2 !== 0) console.log(i); // statement
    i++; //Increment
}


// Do while
    //Always executed at least once
var i = 0;

do {
    if (i % 2 !== 0) console.log(i);
    i++
} while (i <= 5); // The condition is evaluated after the statement, so it will be evaluated at least once
// regardless of the condition

    // Infinite loop

let i = 0;
while (i < 5) {
    console.log(i);
    // i++; // if you forget the increment, you'll get an infinite loop
}

while (true) {
 // Infinite loop
}

x = 0;
do {
    // x++;
} while (x < 5); // or just (true);
    
for (let i = 0; i < 10; //i++){

}


// for-in loop
    // Used when you want to iterate over something, like an object, or an array

    // Object:

    const person = {
        name: 'Joel',
        age: 34
    };

    for (let key in person) // in each iteration of the loop the variable 'key' 
    console.log(key); // will hold a property in the person object
    
    // but it doesn't show you the values, so you can use:
    // Dot notation, e.g. person.name
    // Bracket Notation, person['name'] //use this for ahead of time when you 
    // don't know what property you will access 

    for (let key in person)
    console.log(key, person[key]);


    // Array - there is a more ideal loop for arrays than this using ES6 syntax - up next
       let colors = ['blue', 'green', 'purple'];

    for (let index in colors) { // its good to use index as the variable, as the loop checks the element at that index
        console.log(index, colors[index]);
    }

    // for-of loops
        // New in ECMA script 6 - or ES6
        // Lets you iterate over the items or elements in an array
        // This is prefered over for-in

        let colors = ['blue', 'green', 'purple'];

        for (let color of colors)
            console.log(color);



    // Break and continue

    // if you have a loop similar to this that increments to 10
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }

    // and you want to break out of it for some reason

    let i = 0;
    while (i <= 10) {
      //  if (i === 5) break; // add a conditional to check before moving on and break with the break keyword
      if (i % 2 === 0) {
          i++
          continue; // when the JS engine gets to continue, it goes back to the top and continues the next iteration
      } // so when the above condition isn't met, it will only move onto console.log();
        console.log(i);
        i++
    }

    

    // EXERCISE
        // Write a function that takes two numbers and returns the maximum of the two

        let numb1 = 45;
        let numb2 = 88;

        function returnMax(num1,num2) {
            return num1 > num2 ? num1 : num2;
        };

        let maxNumber = returnMax(numb1, numb2);

        console.log(maxNumber);
       
// Tip - test your functions with different values to ensure the function logic is sound

    // EXERCISE
    // write a function to check if the screen is in landscape or not - return true or false

        function isLandscape(width, height) {
            return width > height ? true : false;
        }
        
        console.log(isLandscape(500, 200));
// can be refactored to:

        function isLandscape(width, height) {
            return width > height // because width is returned if true and if false it can
            // only be height that is returned
        }

        console.log(isLandscape(500, 200));

        // EXERCISE
        // Print Fizz, Buzz or Fizzbuzz to the console based on the a number passed
        // into the function.  The rules are:

        // Divisible by 3 => Fizz
        // Divisible by 5 => Buzz
        // Divisible by both 3 and 5 => FizzBuzz
        // Not divisible by 3 or 5 => input
        // Not a number => 'Not a number'

        // My effort
        function fizzBuzz(input) {
        if (input !== Number) console.log('Not a number');
            else if (input % 3 === 0 && input % 5 === 0) console.log('FizzBuzz');
            else if (input % 5 === 0) console.log('Buzz');
            else if (input % 3 === 0) console.log('Fizz');
            else console.log(input);
        }
        
        const output = fizzBuzz(1);
        console.log(output);

    // solution

    const output = fizzBuzz(false);
    console.log(output);

        function fizzBuzz(input) {
            if (typeof input !== 'number')
            return NaN; // you can return the NaN instead of the string 'Not a number'
            
            if ((input % 3 === 0) && (input % 5 === 0)) // Tip: complex expression can be tidied up
            return 'FizzBuzz'; // by putting them in parenthesis

            if (input % 3 === 0)
            return 'Fizz';

            if (input % 5 === 0)
            return 'Buzz';


            return input;
        }
 

 // EXERCISE
        // Speed Limit = 70;
        // For every 5 kms the speed is over the driver loses -> 1 point
        // You'll need to know this at some stage - Math.floor(1.3)
        // If the driver goes over by 60kms (gets 12 points -> suspended

        // notes:
           // console.log(x + ': point ');
            // compare the speed with the limit to see the difference between them
            // calculate the difference
            // if minus console.log ok, if above, console log 
//my effort
        function checkSpeed(speed) {
            let speedLimit = 70;
            let speedDiff = speed - speedLimit; 
            if (speedDiff <= 4) {
               return console.log('ok');
            }
            let speedByFive = speedDiff / 5;
            let roundSpeedDown = Math.floor(speedByFive);
            let points = roundSpeedDown + ': points';
            roundSpeedDown >= 12 ? console.log('Licence Suspended') : console.log(points);
        }

        checkSpeed(75);

    //refactor
        function checkSpeed(speed) {
        const speedLimit = 70;
        const kmPerPoint = 5;

            if (speed < speedLimit + kmPerPoint) { // you could use 70, but someone reading your code won't know what
                console.log('Ok'); // it means, so it is better to write a const instead
                return ;
            }
                // there didn't have to be a return statement, but putting one in allows the following
                // code to look cleaner by removing indentation and else statements
            const points = Math.floor((speed - speedLimit) / kmPerPoint);
            if (points >= 12)
            console.log('License suspended');
            else
            console.log('Points', points); // seperate the parameters by a ,
        }

        checkSpeed(80);


// EXERCISE - Odd and even numbers
        // Print all the numbers up until the limit (the showNumbers() argument)
        // with the text next to it to say if it's odd or even.

function showNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        (i % 2 !== 0) ? console.log(i, 'Odd') : console.log(i, 'Even');
    }
}

showNumbers(10);

// refactored:

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(message, i);
    }
}



// Exercise - count truthy
    // Make and array with some true and false values and write a function that returns
    //  the total amount of truthy values

//my effort:

const array = [0, null, undefined, '', 2, 3, 'blah blah', 49];

function countTruthy(array) {
    let counter = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i]) counter += 1;
    }
    return counter;
}

console.log(countTruthy(array));

// refactored

const array = [0, 2, false, undefined, NaN, 'beans', 'potato', 4, 6];

function countTruthy(array) {
    counter = 0; // I didn't initialize my variable which caused a return value of NaN;
    for (let value of array) // Use the ES6 'for-of' to loop through arrays
        if (value)
            counter ++
    return counter;
}

console.log(countTruthy(array));


//Exercise - print only the the properties and values of an object if it is a string to the console.

// my effort:

const movie = {
    title: 'Casablanca',
    releaseYear: 1965,
    rating: 4.8,
    director: 'Patrick Stuart'
};

function showProperties(movie) {
    for (let prop in movie) {
       if (typeof movie[prop] === "string")
        console.log(prop, movie[prop]);
    }
}

showProperties(movie);

 // refactor:

 const movie = {
     title: 'Casablanca',
     releaseYear: 1967,
     rating: 4.5,
     director: 'Jimmy Anderson'
 };

 function showProperties(movie) {
     for (let prop in movie)  // no need for brackets as the 'if' statement belongs to the for loop
        if (typeof movie[prop] === 'string') // and the console.log belongs to the 'if' statement
            console.log(prop, movie[prop]);
 }

 showProperties(movie);


// Exercise - Print the SUM of the muliples of 3 and 5 in a number; the 'limit'
    // i.e. you pass 10 to the function and it will get all the multiples of 3 and 5
    // and add them together and print it on the console.

function sum(limit) {
    let multThree = 0;
    let multFive = 0;
    
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) && (i <= limit))
            multThree += i;
        if ((i % 5 === 0) && (i <= limit))
            multFive += i;
     }

    return multThree + multFive;
}

console.log(sum(35));

// refactor:

function sum(number) {
    counter = 0;
                    // separate initializations to the logic
    for (let i = 0; i <= number; i++)   // keep all 
        if (i % 3 === 0 || i % 5 === 0) // closely related code
            counter += i;               //together
                    //separate the return from the logic
            return counter;
}

console.log(sum(10));


// Exercise - Calculate the grade of a student
    // step 1: calculate the average score of the marks
    // step 2: compare the average to a table which shows the grade and log the grade
    // to the console.

    // 1-59: F
    // 60-69: D
    // 70-79: C
    // 80-89: B
    // 90-100: A

// my effort

const marks = [50, 40, 60, 90, 70, 70, 80];

function calculateGrade(marks) {
    average = 0;    // need to initialize with 'LET'
    for (value of marks)    // need to initialize 'value' with 'LET'
        average += value / marks.length;

        if (average >= 0 && average < 60) return 'Grade F';
        if (average >= 60 && average < 70) return 'Grade D';
        if (average >= 70 && average < 80) return 'Grade C';
        if (average >= 80 && average < 90) return 'Grade B';
        return 'Grade A';
}

console.log(calculateGrade(marks));


// refactor 1: "Simplicity is the ultimate sophistication" - Leonardo DaVinci

const marks = [99, 99, 99, 90, 90, 80, 80];

function calculateGrade(marks) {
    let average = 0;
    for (let value of marks)
        average += value / marks.length;

        if (average < 60) return 'Grade F';
        if (average < 70) return 'Grade D';
        if (average < 80) return 'Grade C';
        if (average < 90) return 'Grade B';
        return 'Grade A';
}

console.log(calculateGrade(marks));


// refactor 2: // Break the 10 lines down into two functions.  This is called:
// "Single Responsibility Principle"
    // like in a restaurant, a chef is responsible for cooking - she doesn't take orders
    // a manager is responsible for managing at a high level, she doesn't take orders or cook
// So similarly, use functions that are small and focussed on one thing

const marks = [99, 99, 99, 90, 90, 80, 80];

function calculateGrade(marks) {
    let average = 0;
    for (let value of marks)    // the first part of this function is about calculating the 
        average += value / marks.length;    // average of numbers in an array

        if (average < 60) return 'Grade F'; // this second part is about mapping the average
        if (average < 70) return 'Grade D'; // to a grade
        if (average < 80) return 'Grade C';
        if (average < 90) return 'Grade B';
        return 'Grade A';
}

console.log(calculateGrade(marks));


// So, you split the function up into two smaller functions and call them when you need them
// to do their job.
const array = [99, 99, 99, 90, 90, 80, 80];

function calculateGrade(marks) {
    const average = calculateAverage(marks);

        if (average < 60) return 'Grade F';
        if (average < 70) return 'Grade D'; 
        if (average < 80) return 'Grade C';
        if (average < 90) return 'Grade B';
        return 'Grade A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        return sum += value / array.length;
}

console.log(calculateGrade(array));



// Exercise - Show Stars
    // Make a function that accepts a parameter and based on the number, the console will
    // display that many rows with the equivalent amount of start per row.
    // i.e showStars(3); // outputs : 
    // *
    // **
    // ***

// My effort:
    function showStars(rows) {
        let star = [];
        for (let i = 0; i <= rows; i++)
        star[i] = (i * '*');
        console.log(star);
    }

    showStars(5); // Obviously doesn't work.. can't wrap my head around how to repeat a string

//refactor


    function showStars(rows) {
        for (let row = 1; row <= rows; row++) { // a loop to make a given amount of rows
             
                        let pattern = ''; 

                        for (let i = 0; i < row; i++) { // a loop to increment the stars per row
                            pattern += '*';
                        }

                    console.log(pattern);
        }
    }

    showStars(5);

 ***Comprehension failure: *** 
Q. I can't understand why the 'pattern' variable under the first
'for' loop doesn't get reset to an empty string every time it is looped over.

(Figured it out a few hours later)
A. It does 'reset' the values in the pattern variable.
The first for.. loop runs and the increment (row) is set to 1, which is the amount of times the nested loop will run
 before the condition is evaluated as false (and logging that many stars).  
 Then the first for.. loop increments to 2, is evaluated as true,
then 2 is the amount of times the nested for.. loop will run before being being evaluated 
as false (and logging that many stars).

Stepped through it on python tutor which helped. https://goo.gl/d44gHV 

function showStars(rows) {
 for (let row = 1; row <= rows; row++) {
     let pattern = '';
 
 for (let i = 0; i < row; i++) {
     pattern += '*';
 }
 console.log(pattern);
 }
 }
 showStars(5);


// Exercise - Show primes
    // Create a function that displays all the prime numbers
    // up until a given limit (the argument)

// Explanation:
 // Prime (whose factors are only 1 and itself)
 // Composite

    // 12 = 1, 2, 3, 4, 6, 12 - are it's factors.
    // It can be divided by its factors without having anything left over
    // so, 12 is a COMPOSITE number

    // 11 = 1, 11 //Prime numbers.  Can only be divided by 1 and iteslf without
    // 13 = 1, 13 // having any leftovers

// notes:
    // create a loop to check each number up until the limit
    // each number needs to be checked against a set of rules to find out if it is composite or prime

    // make a rule for a composite number
        // number divided by every incremental number and not have a leftover e.g. limit = 12 (limit / i) % limit === 0
    // make a rule for prime numbers
    // check each number against a rule; if it is a prime number without being a composite number, log it. 

    function showPrimes(limit) {
        for (let i = 2; i <= limit; i++) {
            for (let l = i + 1; l <= i; l++ )
            if ((limit / i) % limit === 0) console.log(i);
        }
    }

    showPrimes(12);

// I'm finding nested loops to be tricky, so I'm going to session nested loops for a while.
// Code along: https://www.youtube.com/watch?v=AqgVLYpBWG8

    // nested loops and multi-dimensional objects
    // We can use nested loops to access all the elements
    // inside multi-dimensional arrays or objects

let twoD = [[1, 2, 3, 4, 5, 6, 7],
           [8, 10, 5, 7, 3, 22, 6, 42],
           [123, 54, 12, 11, 9, 15]];

let bigHero = {characters:[
                {name:'Hiro', voice:'Ryan Potter'},
                {name:'Baymax', voice:'Scott Adsit', prop:12},
                {name:'Go Go Tamago', voice:'Jamie Chung'},
                {name:'Fred', voice:'T.J. Miller'}
            ]};

let chars = bigHero['characters'];  //bigHero.characters
for(let i=0, len=chars.length; i<len; i++){
//    console.log(chars[i]);
//    console.log(chars[i].name);
//    console.log(chars[i]['voice']);
    for(let prop in chars[i]){
        console.log(prop, chars[i].prop, chars[i][prop]);
    }
}




// --------- OBJECTS --------- //

    // Object literals

//instead of declaring seperately, highly related properties like:
let radius = 1;
let x = 1;
let y = 1;

function draw() {}
function move() {}


//add all related properties to an object: (Object-oriented Programming - OOP)
    // the value of a key: value pair can be anything
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //Method


    // Factory functions - Object 
        // used when applications become more complex
// if you need two circles, using object literals, you would need to write
// two circle objects, so instead:

        const circle = {
            radius: 1,
            location: {
                x: 1,
                y: 1
            },
            isVisible: true,
            draw: function() {
                console.log('draw');
            }
        };
// Factory Functions
        // Camel Notation

function createCircle(radius) { // you will likely need different values for props
    // const circle =  // remove the circle const, and return the circle object 
    return {
        radius, // is eq to radius: radius // where value supplied by radius param
        location: {
            x: 1,
            y: 1
        },
        isVisible: true,
        //draw: function() 
        draw() {
            console.log('draw');
        }
    };
}

// call the function to create a circle object
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(50);
console.log(circle2);

// Constructor Functions
    // objective: contruct or create objects
    // Pascal notation: OneTwoThreeFour

    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }

    const circle = new Circle(1);
    // New does three things:
        // 1. Creates a new empty object, i.e. const x = {};
        // 2. Set the 'this' keyword to point to the new empty object
        // and sets the properties (radius and draw() above to this object
        // 3. The new operator will return the new object (const x = {};)
        // from the Circle() function above, i.e. it will look like this:
        function Circle(radius) {
            this.radius = radius;
            this.draw = function() {
                console.log('draw');
            }
            return this; // But you don't explicitely add it - its added
                        // under the hood
        }



        // Dynamic Nature of Objects

const circle = {
    radius: 1
};

// TIP: You can change the circle object even though it is 
// a constant.
// You can't reassign it, i.e. circle = {};

// Adding
circle.color = 'yellow';
circle.draw = function() {}

// Removing
delete circle.color;
delete circle.draw;

console.log(circle);


    // Constructor property
        
    // Every object in JS has a propery called 'constructor'
    // It references the function used to 
    // construct, or create the object

// i.e. Look at the constructor property for 
// the 'another' function by typing 'another.constructor' 
// in the console.  It returns the Circle function.
// Type 'circle.constructor' and you get a Pascal notation
// function back - a build in constructor function in JS

// Factory function
    function createCircle(radius) {
        return {
            radius,
            location: {
                x: 1,
                y: 1
            },
            isVisible: true,
            draw() {
                console.log('draw');
            }
        };
    }

    const circle = createCircle(1);

// Constructor function
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
const another = new Circle(1);

// when we create an object literal syntax, 
// internally the JS engine
// uses the constructor function 

// For example:
let x = {};
// the JS engine translates it to:
// let x = new Object();

new String(); // is written using the string literal
              // "", '' or ``
new Boolean(); // true, false (Boolean literals)

new Number(); // 1, 2, 3 ... (Number literals)

// Takeaway - every object has a constructor property
// and that references the function that was used to create
// that object




// Functions are OBJECTS

// 1. Explaining what happens under the hood when you create an object using the 
// constructor function:
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

// For the example above, you can see by typing:

    // 'Circle.' and seeing the list of properties and methods associated with the function (object)
    // Tip: 'Circle.length' is the amount of arguments
    // If you type 'Circle.constructor' it wll return the reference to the function used to create itself

// You can recreate the function that created the Circle function (object) like so:

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);
    // the 'new Circle' function has a parameter, so it is added first as 
    // a an argument in a string.
    // the second argument is the object the new Circle function returns.
    // it is wrapped in backticks so that it can be written across multiple lines
    // -- it is neater to look at.

const circle = new Circle1(1); // returns the circle object

// 2. explaining 'this' a bit more:

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// if you have a look at what functions the Circle function (object) has:
// Circle.call()
// Circle.bind()

// this. in the Circle constructor function will reference whatever is passed
// into the object Circle.call({here})
// then the arguments are passed explicitly: Circle.call({here}, 1, 2, 3) etc

// So, this expression: Circle.call({}, 1);

// is exactly like:

new Circle(1);
// when we use the 'new' operator, the 'new' operator will internally create an
// empty object and pass it as the first argument to the 'call()' method.
// and this object will determine the context for 'this.'
// this.  will reference the empty object in the call method

// note: if you don't use the 'new' keyword, window is passed as the first argument
// instead of the object.

// You can do the same thing, but if you need to pass an array as the second
// argument, you use the apply() method, i.e. 
// Circle.apply({}, [1, 2, 3]) // where you reference the array as the second arg

Takeaway: All functions are objects :-)


// Value vs Reference Types - how they differ

        // Value (Primitives)
            // Number, String, Boolean, Symbol (ES6), undefined, null
        //Reference Types
            // Object, Function, Array

            // 1. Value (Primitives)

    // x and y are two independant variables
    let x = 10; // 10 is stored in the x variable 
    let y = x; // the value of x is *copied* into the new variable 'y' - they are completely independant

    x = 20;

console.log(x); // returns 20
console.log(y); // returns 10

            // 2. Reference Types
let x = { value: 10 } // when we use an object, the object isn't stored in the variable.
let y = x;            // It's stored in memory (behind the scenes), and the address in memory is stored
                      // inside the the variable x.
// so when you copy x into x, it's the address that's copied, so any changes are immediately visible
// to the other variable
x.value = 20;

console.log(x); // returns the object { value: 20 }
console.log(y); // returns the same object { value: 20 }

// Takeaway: *Primitives* are copied by their value, *objects* are copied by their reference

// One more Primitive example:
    let number = 10;

    function increase(number) { // the number variable is copied to the number in the parameter
        number++; // 10 is incremented to 11 inside the scope, then when the function ends, it is 10 again
    }

    increase(number);
    console.log(number);


// One more object example:

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // Outputs { value: 11 } as the reference to the object is passed in to the parameter



// Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]); // returns: radius 1
                              // draw function

// for (let key of circle)
//     console.log(key); // Uncaught TypeError: circle is not iterable
    // for-of loops can only be used on iterable items (like arrays)

// you can use the built-in method on the Object object to do it
for (let key of Object.keys(circle)) // object.key() gets all the keys in the object and returns an array *** to the FOR loop *** - arrays are iterable
console.log(key); // returns: radius
                            // draw

// one more similar method is:

for (let entry of Object.entries(circle)) // returns an array on each iteration with the key value pair. The first element is
console.log(entry);                 // the key and the second element is the value. So this will return TWO arrays. One with ['radius', 1] the
                                    // the other with ['draw', 'f draw()']

// Check if a property or method exists in a given object:

if ('radius' in circle) console.log('yes');


    // Cloning an object
        // There are 3 ways;

    const circle = {
        radius: 1,
        draw() {
            console.log('draw');
        }
    };

    // 1. Create another empty object and use a for loop to enumerate over and copy into new obj
    
    // const another = {};
    // for (let key in circle)
    // another[key] = circle[key]; // same as saying another['radius'] = circle['radius'];
    // console.log(another); 

    // 2. Use the Object.assign() method - clone or clone AND **combine** objects

    const another = Object.assign({}, circle); //pass in the target object first then the source.
    console.log(another);

        // 2.1 // the first argument doesn't need to be an empty object, i.e.
            const another = Object.assign({
                color: 'yellow'
            }, circle)
            console.log(another); // outputs: {color: "yellow", radius: 1, draw: ƒ}

    // 3. Use the spread operator
        // Takes all the properties and methods and puts into another object.

    const another = { ...circle };
    console.log(another); // outputs the same as the circle object

    // Garbage collection
            // About when creating objects some languages you have to allocate memory and deallocate memory.  This is true for 
            // low level languages like C or C++
            // ** There is no such concept in JS - it is done automatically by the JS engine - called the garbage collector**
                // Takes the variable and constants that are no longer used and deallocates the memory allocated to them


            // Built in Objects in JS ** Use for reference: https://developer.mozilla.com
    // 1. Math
            // Return a random number between the specified values
    
        function getRandomBet(min, max) {
            return Math.random() * (max - min) + min;
        }

        console.log(getRandomBet(15, 20));

      console.log(Math.round(1.9)); // Returns the rounded up number

      console.log(Math.max(1,2,3,4,5)); // Returns the highest number

      console.log(Math.min(1,2,3,4)) //Returns the smallest number


      // 2. String
        // when you use the sting with dot notation, the JS engine - internally - 
        // wraps string primitives in string objects so you can access their methods and properties

    // String primitive
      const message = 'hi';

      // message.   <-- when you use dot notation, the primitive is wrapped in an object so you can access properties etc.
    
      // String object
      const another = new String('hi');


        const message = 'this is my first message';
        console.log(message.length); // Gets the length of the stinrg - Outputs 24

        console.log(message[0]); // Gets the char at index 0 - Outputs 'T'

        console.log(message.includes('my')); // Method that takes a string as an argument and returns true or false if it is inside the string

        console.log(message.startsWith('T')); // Method that takes a string and returns true or fase if it matches the first letter (case sensitive)

        console.log(message.endsWith('e'));

        console.log(message.indexOf('my')); // Returns 8 

        console.log(message.replace('first', 'second')); // Method that returns a new string that replaces the value
                                                         // of the first arg with the val of the second argument
        console.log(message.toUpperCase());

        const another = ' this is a message with spaces ';

        console.log(another.trim()); // Trims the white space before and after a string - trimLeft() and trimRight() also exist

    // Escape Notation:
        // '\ for quotes
        const notation = 'This is my \'first message ';
        console.log(notation);

        // \n  <---- adds a new line.

        console.log(message.split(' ')); // splits the string into an array at the point based on the argument we gave it.
        // ouputs ['this', 'is', 'my', 'first', 'message'] <-- the string was broken down based on the spaces.


        // Template literals
            // This solves the problem like the above \n escaping to make a new line - it looks messy - you can't visualise
            // what the output looks like.
                // Best practices are to make the code something like the output.
        // 1. this way is possible, but it still isn't ideal
            const message = 
            'this is my\n' +
            'first message';

        // Types of 'literals' in JS:
            // Object {}
            // Boolean: true, false
            // String: '', ""
            // -- From ES6 -- Template: ``

        // 2.
        const another = `This is my
        'first' message`; // format it the way you want it to look

        // Handy when you want to send out emails.

        // Previous to ES6 - 
        const name = 'John'
        const message = 'Hi ' + name + ',\n'; // getting unreadable
        
        // Now, using placeholders: ${}
        // 3. lets, const, mathematical operators etc are all accepted - any expression or function that returns or references a value
        const another =
        `Hi ${name} ${2 + 3},
        Thank you for joining my mailing list.
        Regards,
        Joel
        `

        // Date
            // There are different type of date objects - when you open the parenthesis you can see the types.  See MDN for more info
        const now = new Date(); // Note the returned values **aren't strings**
        const date1 = new Date('May 11 2018 09:00');
        const date2 = new Date(2018, 4, 11, 9); // TIP: Months are counted like array indices, i.e. Jan = 0, Feb = 1 etc

        // There are a bunch of methods

        now.getDay(); // Gets the day of the month
        now.getFullYear(); // Gets the year etc

        // set methods
        now.setFullYear(2017);

        // how to convert them to a string and display on the console

        now.toDateString(); // Returns today's date, but for 2017 (because we set the date to 2017 in a previous method)
        now.toTimeString(); // Returns the time component
        now.toISOString(); // Common way to transfer date between the client and the server



// **** Object Exercises **** //

// 1. Create an address object with three properties.
        // a. street
        // b. city
        // c. zipCode
        // Create a function called showAddress(address) that takes the object and shows all the properties in the object
        // along with their value.

// My effort:
const streetObj = {
    street: 35,
    streetName: 'Elizabeth',
    city: 'Melbourne',
    postCode: 3000
};

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(streetObj);



// 2. Initialize an address object using:
    //  a. a factory function and then
    //  b. a constructor function

  // My effort:  // a.
function showAddress(streetNumber, streetName, city, postCode) {
    return {
        streetNumber,
        streetName,
        city,
        postCode
    }
};

console.log(showAddress(37,'Elizabeth', 'Melbourne', 3000));


//b.

function ShowAddress(streetNumber, streetName, city, postCode) {
    this.streetNumber = streetNumber,
    this.streetName = streetName,
    this.city = city,
    this.postCode = postCode
}

const address = new ShowAddress(12, 'Pinkburton', 'Maui', 90210);

console.log(address);

// Objects - Exercise 2

    // Object Equality

    // Use the constructor function you used in the previous exercise to create two address objects
    // Create two functions to check to see if the objects passed in are equal
        // Objects are reference types - check that all the properties are equal, it should return true
    // If address address 1 and address two are pointing to the exact same object return true, if not return false

    // Exercise Setup
    function ShowAddress(streetNumber, streetName, city, postCode) {
        this.streetNumber = streetNumber,
        this.streetName = streetName,
        this.city = city,
        this.postCode = postCode
    }

    let address1 = new ShowAddress('a', 'b', 'c', 'd');
    let address2 = new ShowAddress('a', 'b', 'c', 'd');

    function areEqual(address1, address2) {

    }

    function areSame(address1, address2) {
        
    }

    // My effort

    function ShowAddress(streetNumber, streetName, city, postCode) {
        this.streetNumber = streetNumber,
        this.streetName = streetName,
        this.city = city,
        this.postCode = postCode
    }

    let address1 = new ShowAddress('a', 'b', 'c', 'd');
    let address2 = new ShowAddress('a', 'b', 'c', 'd');

    function areEqual(address1, address2) {
        const addr1 = Object.keys(address1);
        const addr2 = Object.keys(address2)

        console.log(addr1);

        let equal = -1;

        for (let i = 0; i >= addr1.length; i++) {
            if (addr1[i] === addr2[i])
            equal =+ 1;
            console.log(equal);
        }
        equal === addr1.length ? console.log(equal) : console.log(false);
    }

    //areEqual(address1, address2);

    function areSame(address1, address2) {
        return address1 === address2 ? true : false;
    }

    console.log(areSame(address1, address2));

// Refactor

function ShowAddress(streetNumber, streetName, city, postCode) {
    this.streetNumber = streetNumber,
    this.streetName = streetName,
    this.city = city,
    this.postCode = postCode
}

let address1 = new ShowAddress('a', 'b', 'c', 'd');
let address2 = new ShowAddress('a', 'b', 'c', 'd');
let address3 = address1;

function areEqual(address1, address2) {
    return address1.streetNumber === address2.streetNumber &&
    address1.streetName === address2.streetName &&
    address1.city === address2.city &&
    address1.postCode === address2.postCode;
}

console.log(areEqual(address1, address2)); // returns true as the values are the same

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areSame(address1, address2)); // returns false as they are referencing different objects in memory

console.log(areSame(address1, address3)); // returns true as address3 is referencing the same object in memory

// Takeaway - the instructions should have said to check that the VALUEs of the properties are the same,
// not the properties.  I read that I should have checked the property names.. i.e. the 'keys'



// Objects - Exercise 3
    // Create a blog post object with these properties:
        // Use object literal syntax to create and ititialize a blog post.

    // title
    // body
    // author
    // views
    // comments 
    //      (author, body)
    // isLive

    // my effort
let blogPost = {
    title: 'Feeling good',
    body: 'Lorem Ipsum',
    author: 'Mr Miyagi',
    views: 10,
    comments: [
        {author: 'Mr Kid', body: 'Ipsum Lorem'},
        {author: 'Mr Schwartznegger', body: 'You\'ll be back!'}
    ],
    isLive: true
};

console.log(blogPost);



// Objects - Exercise 4
    // Use a constructor function to create a blog post object
        // Imagine you are building a blogging engine, the user is drafting a post, but they have not yet published it
    // Build what you think the constructor function should look like.

//my effort
function BlogPost(title, body, author, views, comments, isLive) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = views,
    this.comments = comments,
    this.isLive = isLive
}

blogPost1 = new BlogPost('dot net', 'dev environment, boo', 'Joel', 10, [
    {name: 'Jim', body: 'I hear ya'},
    {name: 'Rob', body: 'I believe ya'}
], false);

//refactor

function Post(title, body, author) { //no need for views, comments or isLive as they are all initialized to default values
    this.title = title;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a', 'b', 'c');

console.log(post);

// the fewer parameters the better



// Exercise 5
    // Think of the price range selector on a site like yelp.  Think of the properties an object like this would have
    // there are 3 price range selectors - one with a single $, one with two $$ up to three $ signs.

    // Create an array of objects.  Each object is called a 'Price Range object' 

//my effort
const priceRangeArr = [
    {
        name: 'cheapest',
        priceMin: 0,
        priceMax: 25,
        onClick: function() {
            //send the minimum and maximum values to the search function to display relevant results
        }
    },
    {
        name: 'medium',
        priceMin: 26,
        priceMax: 36,
        onClick: function() {
            //send the minimum and maximum values to the search function to display relevant results
        }
    },
    {
        name: 'expensive',
        priceMin: 37,
        priceMax: 100,
        onClick: function() {
            //send the minimum and maximum values to the search function to display relevant results
        }
    }
];

//refactor

let priceRanges = [
    { label: '$', tooltip: 'Cheap', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 25 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 26, maxPerPerson: 50 }
];

// The min and max are used to filter out the restaurant objects which have an average between the min and max, like:

let restaurants = [
    { averagePerPerson: 5 }
];



// --------- ARRAYS --------- //
    // Intro
        // Learn about all different types of operations you can do on Arrays;
            // Adding new elements
                // Finding Elements
                    // Removing Elements
                        // Splitting arrays
                            // Combining arrays


// Adding Elements:



const numbers = [3, 4];

// numbers = []; // watch out for reassinging constant variables - you'll get an error but you can add and remove elements

// End

numbers.push(5,6);

console.log(numbers); // returns [3, 4, 5, 6]

// Beginning

numbers.unshift(1,2);

console.log(numbers); // returns [1, 2, 3, 4, 5, 6]

// Middle
    // splice - you can go to a given position and add new elements or remove new elements
numbers.splice(2, 0, 'a', 'b') // param1 = start position (starts BEFORE the specified index element), param 2 = how many elememts
// to delete, param 3 = the items you want to add.

console.log(numbers); // returns [1, 2, 'a', 'b', 3, 4, 5, 6]



// Finding Elements
    // Differs based on if you are finding primitive types, or reference types.

// Finding Primitive types:

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1)); // returns the index of the argument.  -1 if it doesn't exist. '1' will be -1

console.log(numbers.lastIndexOf(1)); // returns the index of the last element that matches the argument, i.e. 3

// does it exist, true or false?

console.log(numbers.indexOf(1) ==! -1); // returns true

    // a newer, better way:
console.log(numbers.includes(1)); // returns true if the given element exists in the array

// all have a second parameter, which is optional which is the starting index, i.e:

console.log(indexOf(1, 2)); // returns 3 which is the only element that matches the argument when we start the 
                            // array at the 2nd index

// Finding reference types:                          
    // Slightly different that using primitive types
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

console.log(courses.includes({id: 1, name: 'a'})); // false
// because the object you are passing have the same values but it has a different reference, it has a different locations
// in memory, two different unique IDs.

// so we use the find method - use MSDN if the description in your IDE is too complicated

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) { // as an agrument, we pass a function - predicate or 'call-back' function 
    return element > 10;  // the function takes a parameter which is an element in the above array1 array.
}); // return a boolean

// What happens: the function is executed using once on the first element in the array, i.e. number 5 is passed
// as the element, 5 is not greater than 10, so it won't be added to the 'found' array, and the next element is checked.
// 12 is checked and it meets the condition and returns true and then stops checking.

// undefined is returned if there are no elements that match.

console.log(found); // output: 12

//trying one more time on our course array:

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

console.log(courses.find(function(course) {
    return course.name === 'a';
})); // outputs the full course object

// if it can't find, then it outputs 'undefined'

// if you want the index of a reference type:

console.log(courses.findIndex(function(course) {
    return course.name === 'a';
})); // outputs 0 but -1 if it can't find it.


    // Arrow Functions
// ES6 way to make the above code cleaner with arrow functions

// Whenever you want to pass a callback function or as an argument to a different method:

// 1. remove the word 'function'
// 2. If it has a single parameter, remove the parenthesis
// 3. If you don't have any parameters, you need to pass an empty parenthesis
// 4. If your function is a single line of code and it is returning a value, remove the return keyword and curly
// braces, put it all on one line.


console.log(courses.findIndex(course => course.name === 'a'));

// Removing Elements from an Array


const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();// Removes the last element in the array and returns it, so save it to a constant
console.log(numbers); // Outputs: [1, 2, 3]
console.log(last); // Outputs: 4


// Beginning
const first = numbers.shift(); // Like pop, but it removes the first element and returns it
console.log(numbers); // Outputs: [2, 3, 4]
console.log(last); // Outputs 1

// Middle
numbers.splice(2, 2); // first argument is the index item of the element you want to delete, the next argument is
console.log(numbers);    // the amount of items you want to remove
         // Outputs: [1, 2] 



    // Emptying an array - remove all elements

    
    let numbers = [1, 2, 3, 4];
    let another = numbers; // for the garbage collection example below:

// Solution 1

numbers = []; // This will reinitialize the array to an empty array - it doesn't *empty* the array.

console.log(numbers); // Outputs []
// The issue with this is that if you have another variable referencing the numbers variable, it will still reference 
// the original numbers array.  Because it is still sitting in memory, and will so until the JS garbage removal 
// takes place, you can prove this by declaring another variable and pointing it to numbers, i.e.

console.log(another); // Outputs [1, 2, 3, 4]

// Solution 2

numbers.length = 0; // Will truncate the existing numbers array to 0
console.log(numbers); // Outputs: []
console.log(another); // Outputs: []

// Solution 3

numbers.splice(0, numbers.length);
// removes the elements starting at the 0th index and removes the same amount of elements that are in the array

// Solution 4


while (numbers.length > 0) {
    numbers.pop();
}

console.log(numbers); // Outputs: []
console.log(another); // Outputs: []
// Not ideal as it needs to loop over every element in the array and will have a high performace cost the larger
// the array

// Takeaway: Solution 1 is less noisy than the rest, but solution 2 is preferred as you don't have  to worry
// about re-assigning variables

    // Combining and Slicing arrays

    // Combine
    const first = [1, 2, 3];
    const second = [4, 5, 6];

    const combined = first.concat(second); // Use concat to combine arrays, pass the second array in as an argument
    console.log(combined); // to return them together

    // Slice 
// The slice() method selects the elements starting at the given start argument
// and ends at, but does not include, the given end argument.

    const slice = combined.slice(2, 4);
    console.log(combined); // Outputs [3, 4]
    console.log(slice);

    // You can also use it like:
    combined.slice(2); // Outputs: [3, 4, 5, 6] (everything after and including the first argument's indexed item)
    combined.slice(); // Outputs the original array (copies it)

// Extra info:
    // When you combine and slice arrays, if they contain primitive types, they are copied
    // If they contain objects, then the *references* are copied
        // meaning the elements in the input array will reference the same object as the output (the returned) array

    //i.e.

    const first = [{ id: 1 }]; // Add a reference type
    const second = [4, 5, 6];

    const combined = first.concat(second); // Here the first array with an object with ID: 1 is combined with second
    console.log(combined); // Check what 'combined' outputs: [{id: 1}, 4, 5, 6]

    combined[0].id = 10; // Change the ID value in the object within the combine array
    //first[0].id = 10;
    console.log(first); // Because the object in the combine array is referencing the one in 'first', changing one
                        // will change the other.  Single source.
 
    // The spread operator ... 
        // ES6 way to do the above combine and slice

    const first = [1, 2, 3];
    const second = [4, 5, 6];

// const combined = first.concat(second);  
    // spread version
const combined = [ ...first, ...second]; // you declare a new array and add the individual elements of the first
                                        // and second array

// .. you can also add elements in between and at the end
    [ ...first, 'a', ...second, 'b'];

// with slice you can copy the array like: const copy = combined.slice();
// with the spread operator:
const copy = [...combined];

    // Iterating an array

    // Use array loop - for-of

    const numbers = [1, 2, 3];

for (let number of numbers) // for each iteration, 'number' will be set to one number in the array 'numbers'
console.log(number); // outputs 1, 2, 3

// A similar way to do this is with the array method 'forEach'

numbers.forEach(function(number) { // each element in the array 'numbers' will be passed as an argument to the callback
    console.log(number);            // function on each iteration
});

// forEach refactored:

numbers.forEach(number => console.log(number));

    // tip - forEach's callback function, can optionally take a second parameter, which is the index of  the element
    // i.e.
numbers.forEach((number, index) => console.log(index, number)); // Outputs 0 1, 1 2, 2 3

// note - you don't get the index with the 'for-of' loop - you need to use the 'for-in' loop for that.


   // Joining Arrays

const numbers = [1, 2, 3];

const joined = numbers.join(); // you can optionally pass a string, and it will be used as a seperator.  It also returns a string.
console.log(joined); // Outputs: 1,2,3

// .join goes hand in hand with .split (on a string object)

const message = 'This is my first message';

const parts = message.split(' '); // returns an array.
console.log(parts); // Outputs [0: "this" 1: 'is] .. etc

// now use the join method to combine the elements using a seperator

const combined = parts.join('-');
console.log(combined);

// Useful when creating a URL slug.  This is when, for example an article is posted on a website and the title's 
// white space is removed and dashes are added instead to use in the URL. i.e. 'My best mate' turns into: 
// www.coolsite.com.au/my-best-mate.html

    // Sorting Arrays

    const numbers = [2, 3, 1];
        // Nice and easy when you have numbers and strings in an array.
    numbers.sort();
    console.log(numbers); // Outputs [1, 2, 3]

    numbers.reverse();
    console.log(numbers); // Outputs [3, 2, 1]

        // A little trickier when using objects
    const courses = [
        {id: 1, name: 'Node.js'},
        {id: 2, name: 'JavaScript'}
    ];
    courses.sort(); 
    console.log(courses)// Output is identical to the original array - it doesn't work.

// to fix this, we can pass an optional function to the sort method as an argument.  This is used for comparison. 
// In this case if we call the sort method, the method gets two objects and compares them.
// If they are in the right order, it will skip to the next elements, otherwise it will re-arrange them

courses.sort(function(a, b) {
    // if a < b => -1  (return -1) - meaning it is in the right order
    // if a > b => 1 // if this returns it switches them
    // if a === b => 0

    if (a.name < b.name) return -1; // no need to use the 'Else-if' because if the first statement is true, we will
    if (a.name > b.name) return 1; // jump out of the function
    return 0;
});

console.log(courses); // Output: the courses array with the javascript object displaying first

// However, the sort() method won't work if, for example the 'J' in javaScript is lower-case.
// this is because the uppercase N in node, is 78 on the ASCII table, and lower case j is 106. 78 < 106, so it returns 1
// in our function.

// How to solve?
// A. Exclude case-sensitivity when comparing the names in our callback function

courses.sort(function(a, b) {
    // if a < b => -1  (return -1) - meaning it is in the right order
    // if a > b => 1 // if this returns it switches them
    // if a === b => 0
    const nameA = a.name.toUpperCase(); // or toLowerCase();
    const nameB = b.name.toUpperCase(); // or toLowerCase();

    if (nameA < nameB) return -1; // no need to use the 'Else-if' because if the first statement is true, we will
    if (nameA > nameB) return 1; // jump out of the function
    return 0;
});

    // Testing the elements of an Array
        // every() and some() --- new JS, so not supported natively in old browsers ---

const numbers = [1, 2, 3];
// .every() checks every element against an expression to see if ALL of the elements meet a criteria
const allPositive = numbers.every(function(value) {
    return value >= 0; // if this expression returns true, the every method will return a boolean, otherwise false
});     // it will also terminate on the first element that doesn't match the criteria in the expression.

// .some() checks every element to see if at least one element matches a given criteria.
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0; // same deal, as soon as it finds an element that matches the expression, it returns true
});



    // Filtering an Array
        // Loops over each element in the array and performs a function on each element and returns a new array
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});

console.log(filtered);

// This expression is a good target for an arrow function.

const filtered = numbers.filter(n => n >= 0 );

// Possible exercise?

// Most likely in a real world scenario, you'll use an array of objects.  For example an array with restaurants,
// and they all have their opening hours as a property.
// You can then filter the restaurants by whether they are open now or not.


   // Mapping an Array
    // You can map each element in an array to something else.

    // Contstruct some HTML markup using the elements in this array: (map to strings)

    const numbers = [1, -1, 2, 3];

    const filtered = numbers.filter(n => n >= 0);

    const items = filtered.map(n => '<li>' + n + '</li>'); // Replace the element passed in as an argument to the 
                                                            // callback function with what the cb function returns

    const html = '<ul>' + items.join('') + '</ul>'; // join the array with nothing, and return it.  
                                                    // Changing the array to a string & concatenate some <ul> tags
                                                    // as strings.

    console.log(html); // Outputs: <ul><li>1</li><li>2</li><li>3</li></ul>
 
        // (map to objects)
    const numbers = [1, -1, 2, 3];

    const filtered = numbers.filter(n => n >= 0);

    // const items = filtered.map(n => {
    //     const obj = { value: n };
    //     return obj;
    // }); // returns an array of object with a values mapped from the filtered array          

    // TIP: you can refactor the above callback function, but there is a trick when returning objects

    const items = filtered.map(n => ({ value: n }) );
                 // only have a single line of code and returning one value
                 // so you don't need the const, return keyword or curly braces
                 // BUT, here's the TIP, you need to wrap the object's curly braces in parenthesis
                 // otherwise the JS engine will parse the object's curly braces as a code block & return undefined.

    console.log(items);    

        // TIP: these methods (filter, map, join etc) return arrays, so that means we can chain them together without
        // having to store them to constants. So the above code would look like this:

        const numbers = [1, -1, 2, 3];

        // call a filter method, that method returns a result, then we immediately call another method on that result
        const items = numbers
            .filter(n => n >= 0)
            .map(n => ({ value: n}) ); // best convention is to start the chain on a new line

        console.log(items);

        // Now you can go nuts chaining methods, because whatever method returns an array, you can chain another
        // method to, like: 
        const numbers = [1, -1, 2, 3];

        const items = numbers
        .filter(n => n >= 0)  // returns: [1, 2, 3]
        .map(n => ({ value: n}) ) // returns an array with 3 objects
        .filter(obj => obj.value > 1) // returns an array with 2 objects (removes the one with value: 1)
        .map(obj => obj.value); // returns [2, 3]
    console.log(items);

    // Reducing an array

    const numbers = [1, -1, 2, 3];

    // Previously we would calculate the sum of all the numbers in this array like this:

    // let sum = 0;
    // for (let n of numbers)
    //     sum += n;

    //     console.log(sum); // Outputs: 5

    // To do  this using the reduce() method - it takes two arguments

// What happens with the reduce method, round by round (a = accumulator, c = currentValue)

// round 1 -  a = 0, c = 1 => a = 1
// round 2 -  a = 1, c = -1 => a = 0
// round 3 -  a = 0, c = 2 => a = 2
// round 4 -  a = 2, c = 3 => a = 5

   const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); // the second argument to the .reduce() method, you pass the initial value you want the accumulator to be

    console.log(sum);

// The accumulator parameter is like the sum variable above.
// Each loop over the element in the array, the element will be the currentValue and it will be added to the accumulator.
// Returns a single value

    // Refactor!
        // Exclude the accumulator (it will then be set to the first element's value)
        // Remove the return keyword because we have a single line and we only return a value
        // Remove the curly braces and put everything on one line
    const numbers = [1, -1, 2, 3];

    const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(sum);


// Exercise
    // Create a function that has two parameters; a minimum number, and a maximum number.
    // The function will return all the numbers inclusive and in between the minumum and maximum number to an array.

    // My effort:
function arrayFromRange(min, max) {
    const range = [];
    for (let i = min; min <= max; min++) {
        range.push(min);
    };
    return range;
};
  
const numbers = arrayFromRange(500, 1230);

console.log(numbers);

    // Written cleaner:

function arrayFromRange(min, max) {
    const range = [];
    for ( let i = min; i <= max; i++)
        range.push(i)
    return range;
};

const numbers = arrayFromRange(-23, 4);

console.log(numbers);
 

  // Exercise
    // Write a function that does the exact same thing as the .includes() method.  It is called 'includes' and has two 
    // parameters; 'array' and 'searchElement'
        //  const numbers = [1, 2, 3, 4];
        // console.log(numbers.includes(1)); // Outputs: True
  
// My effort
  function includes(array, searchElement) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === searchElement)
            return true;
    }
    return false;
  };

console.log(includes(numbers, 5));

// Cleaner

const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    for (let i = 0; i <= array.length; i++)
    if (i === searchElement)
        return true;
    return false;
}

console.log(includes(numbers, 2));

 // Exercise
    // Create a function that takes two parameters, one is a (pre-defined) array, the other is an array of numbers
    // you would like to be excluded from the first parameter array.
        // It should return the predefined array minus the number(s) you defined in the second parameter

// My effort:
const numbers = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 5, 10];

function except(array, exclude) {
    const outputArr = [];
    // Loop over the array

    for (let element of array) {
            // Check each element against each element from the exlude array
        if (exclude.every(value => value !== element))
        // make a new array without them
            outputArr.push(element); 
    };

    return outputArr;// array minus the numbers from the 'exclude' array
};

const output = except(numbers, [1, 2, 3, 4, 5, 10]);

console.log(output);

// Hint: Use array loops (for-of) and array methods to mutate the new array


// Another way (this doesn't return the expected outcome, but it is an interesting conclusion)

const numbers = [1, 2, 3, 5, 7, 11];

function exclude(array, excludedNum) {
    const outArr = [];

    for (let index in array) // Mistakenly used a for-in loop which checks the index, not the value of the index like for-of
        if (!excludedNum.includes(index)) // index isn't a number, so this returns 'not-equal true' and pushes the index to outArr
        outArr.push(index);
    return outArr; // Interestingly the indices are added to the array as strings

};

const output = exclude(numbers, [1, 3]); 

console.log(output); // returns: ['0', '1', '2', '3', '4', '5']
 
// Another way (this way works as expected)

const numbers = [1, 2, 3, 5, -1, 10];

function exclude(array, excluded) {
    const outArr = [];

    for (let element of array)
    if (!excluded.includes(element))
        outArr.push(element)
    return outArr;
};

output = exclude(numbers, [1, 3, 10]);

console.log(output);



// Exercise - move an element
    // Create a function that takes 3 parameters; an array, an index and an offset. 
    // The function should move the element at the given index for the given offset value.
    // i.e. if you have index = 1 and offset = 2, then the function will move the element at
    // index 1 two places down to index 3 and return the modified, new array.
        // If your offset is too large or too.. small that it can't move to that
        // index, then you display an error on the console "Invalid offset".

    const numbers = [1, 2, 3, 4, 5, 6];

function move(array, index, offset) {
    // Logical check to see if the offset is valid
    const position = index + offset;
    
    if (position > array.length || position < 0) {
        console.error('Invalid Offset');
        return;
    }
// Else
    // Copy the array to modify
    const outArr = [...array];

    // Get the element at the specified index
    const moveMe = outArr.splice(index, 1);
    outArr.splice(position, 0, moveMe[0]);

    // Return the modified array
    return outArr;

};

const output = move(numbers, 1, 3); // Expect: [1, 2, 3, 5, 6, 4]

console.log(output);



// Excercise
    // Create a function that takes two parameters; one is an array of numbers, and the other is another number
    // The function will return the amount of times the search element appears in the passed in array
    

const numbers = [1, 2, 3, 4, 1, 4, 2, 4, 5]; // 2 * 1, 2 * 2, 1 * 3, 3 * 4, 1 * 5

function countOccurrences(array, searchElement) {
    // make a counter
    let counter = 0;

    for (element of array) {
        if (element === searchElement)
        counter += 1;
    }
    return counter;
};

const count = countOccurrences(numbers, -1);

console.log(count);

    // Exercise - .reduce() - Increased difficulty - try achieving the same but using the .reduce() method.

    const numbers = [1, 2, 3, 4, 5, 1, -1, 3, 2];

function countOccurences(array, numToCount) {
    return array.reduce((accumulator, currentValue) => {
        const occurence = (numToCount === currentValue) ? 1 : 0;
        return accumulator + occurence;
    }, 0); // The function in the reduce method returns accumulator
            // you can't add directly assign values to accumulator, but you can create
}           // another const and return them concatenated
    output = countOccurences(numbers, 3);

    console.log(output);


// Exercise - get max
    // Create a function that returns the highest number in an array argument
    // If the array argument is an empty array, return undefined



const numbers = [1, 5, 4, 3, 2, 9];

function getMax(array) {
    if (array.length === 0) return undefined; // By convention, if the IF statement has one line after
                                                // put in on the same line
    let max = array[0]; 
// iterate the array and if you find a number larger than the first element, set max to that.
    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];

    return max;
}

    max = getMax(numbers);

    console.log(max);


// Exercise - get max - increased difficulty
    // Create a function that returns the highest number in an array
 
// My effort

   const numbers = [1, 3, 2, 9, 5, 6, 14, 10];

function getMax(array) {
    if (array.length === 0) return undefined;
    
    return array.reduce((accumulator, current) => {
        if (current > accumulator)
            accumulator = current;
        return accumulator;
    },0);

}

   const max = getMax(numbers);

   console.log(max);

// refactored

const numbers = [1, 3, 4, 5];

function getMax(array) {
    if (array.length === 0) return undefined;



   return array.reduce((accumulator, current) => {
        if (current > accumulator) return current;
        return accumulator;
        // whatever value is returned will be the value of accumulator in the next round
    });
// Round by round commentry:
    // 3 > 1 ? yes, return 3
    // 3 > 4 ? no, return 4
    // 4 > 5 ? no, return 5
    // array.reduce will return 5
}

max = getMax(numbers);

console.log(max);

// Mecha-refactor!
    // I'll just write the refactored reduce() method
        return array.reduce((a, b) => (a > b) ? a : b);
    // Swap the arguments to one letter, change the conditional to a ternary operator.


// Exercise 7 - Movies
    // Write code to get:
        // All the movies in 2018 with rating > 4
        // Sort them by their rating
        // Descending order (movies with a higher rating should come first)
        // Show their title

    // Expected outcome:
        // 'b'
        // 'a'

    const movies = [
        { title: 'a', year: 2018, rating: 4.5 },
        { title: 'b', year: 2018, rating: 4.7 },
        { title: 'c', year: 2018, rating: 3 },
        { title: 'd', year: 2017, rating: 4.5 }
    ];

    const testArr = movies.reverse();
// My effort

function getGoodMovies(array) {
// new array to manipulate
    const manipMe = [ ...array ];
// Sort in descending order by rating
    manipMe.sort((a, b) => {
        if (a.rating > b.rating) return -1; // if first element is larger, swap.
        if (a.rating < b.rating) return 1; // if first element is smaller, leave
        return 0; // else to nothing 
    }); // works

// reduce the array to 2018 movies with rating > 4

for (let element of manipMe)
    if (element.year !== 2018 || element.rating < 4)
    manipMe.splice(manipMe.indexOf(element), 1);

// return the name of the movies in the array

const result = [];

for (let element of manipMe)
    result.push(element.title)

    return result;
}

    const goodMovies = getGoodMovies(movies);

    console.log(goodMovies);


// Challenge: Refactor using .filter(), .sort() .reverse() and .map()

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

const newArr = movies
    .filter(movies => movies.year === 2018 && movies.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(n => n.title);

console.log(newArr); // Outputs ['b', 'a']


// Functions

    // Function declarations vs function expressions

        // Function declaration
    function walk() {
        console.log('Walk');
    }

    // Function Expression
        // Functions are objects, so setting the run variable is similar to 
        // setting the run variable to an object.
// If the function doesn't have a name (like below), it is an anonymous function expression
// If it has a name, i.e. function run() {}; - it is a Named Function Expression
    let run = function() {
        console.log('run')
    }; // because we are declaring a variable or constant (run), we terminate with a semi-colon
    // Now run, *will reference* the anonymous function, and we can call the 
    // anonymous run function, using this reference:
     // run(); // the same way we call a function in JavaScript
     // if you declare another variable and set it to the variable 'run', it will reference the same 
     // anonymous function (which is one object) in memory. 
     // so move(); works


// Hoisting
    // The key difference between function declarations and expressions is that you can call the
    // declaration before it is defined, i.e.

    walk();
    function walk() {
        console.log('walk');
    } // Outputs: Walk

// compared to:

run()
const run = function() {
    console.log(run);
}; // Outputs: Uncaught ReferenceError: run is not defined at index.js:2663

// Explanation: 
    // It is like using a variable or constant before it is defined, i.e:
        console.log(x);
        let x = 1; // Outputs: Uncaught ReferenceError: x is not defined at index.js:2671
    
    // This is because the JS engine, when it executes the code, it moves all the function
    // declarations to the top (of the file), so the code will actually look like this at runtime:
    function walk() {
        console.log('walk');
    }
    walk();
    // This process is called 'hoisting'

// Arguments
    // Arguments are dynamic, like variables, objects etc; you can reinitialize them, change their type, etc.
// For example, in JS, even if your function takes two parameters, you can pass it one argument and it won't error
// but you will get unexpected results. i.e:

function sum(a, b) {
    return a + b;
}

console.log(sum(1)); // Output: NaN - the 'b' parameter will be 'undefined' - 1 + undefined => NaN

// Similarly, if you pass more than one argument, in the above's case, only the first
// two arguments will be passed.
console.log(sum(1, 2, 3, 4, 5)); // Outputs 3.

// However, to accomodate this, JavaScript functions have a special object called 
// *arguments* - which looks like an array, and it's key value pairs are all the values 
// passed in as arguments and their index. It also has properties: 'callee', length & symbol.


function sum(a, b) {
    console.log(arguments)
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // Logs the arguments object and also the result of a + b.


// You can work with this arguments object.  The object properties say that this object is iterable, so
// you can use a for-of loop that you use for arrays. i.i:

function sum() { // You can remove the parameters because we are working with the arguments object
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;

}

console.log(sum(1, 2, 3, 4, 5, 10));


// The rest operator - a better way to do the above.
    // For funtions with a varying number of operators, use within the function's parameters, liek: '...args'

    function sum(...args) {
        console.log(args);

    }
console.log(sum(1, 2, 3, 4, 5)); // Outputs the arguments as an array. if you leave out the ..., it will just 
                                // print out the first argument, in this case: 1.
// Tip: So, now you can use array methods to use the args array, like reduce() etc so your code is cleaner and more
// elegant. i.e:

// Objective: Print the total of the arguments passed in.
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));

// Lets expand upon it's functionality
// Objective: Use this function to calculate the total amount of items in a shopping cart, with a discount factor.

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b)
    return total * (1 - discount); // 90% of the total is a 10% discount :'D
}

console.log(sum(0.1, 20, 30));
// Note: the rest parameter must be the last parameter or you get uncaught syntax error


// Default Parameters
    // When you want to supply a 'default' value to a parameter, where the value hasn't been specified in an argument
    // i.e:

// The traditional way:
    function interest(principal, rate, years) {
        rate = rate || 3.5; // If rate has a value - if it is 'truthy', use that, or use 3.5.
        years = years || 5; 
        return principal * rate / 100 * years;
    }

    console.log(interest(10000)); // You can pass in all the arguments, or leave them out as we have defaults set in the func

// The ES6 (modern way)
    // Set them within the parameter
    function interest(principal, rate = 3.5, years = 5) {
        return principal * rate / 100 * years;
    }

    console.log(interest(10000));
// the caveat:
    // Once you define a default for a parameter, you need to define one for all the ones following, or the following happens:

    function interest(principal, rate = 3.5, years) {
        return principal * rate / 100 * years;
    }

    console.log(interest(10000)); // Outputs: NaN because the years parameter isn't set, so it is undefined.
    // Even if you enter a second argument to interest(), the JS engine doesn't know if it should be used for 
    // rate or years. So, console.log(10000, 5) will also be NaN
    // Tip/Trick/bad practice: You can pass undefined as the second argument if you want, console.log(10000, undefined, 5)
    // but if you use defaults in the params, then only set it on the last, or every parameter thereafter should
    // also have defaults set. 


// Getters and Setters
    // A special kind of method in objects

    // The problem getter and setters solves:
// If we want to display someone's full name in our program, we'd get it from an object
// using the `${}` template literal syntax:
const person = {
    firstName: 'Joel',
    lastName: 'James'
};

console.log(`${person.firstName} ${person.lastName}`); // But we would have to repeat that every time we want to display
// the person's full name eveywhere in our application.

// TIP: If we structure our objects like this, we can improve the repetition:
    // Define a method called fullName in the object, return the expression we used in the above console.log and whenever we need
    // to use the persons full name, just reference the .fullName() method in the person object.

const person = {
    firstName: 'Joel',
    lastName: 'James',
//  function fullName() {};     // This is a way to do it, but in ES6, you can just use the function's name
    fullName() {
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(person.fullName()); // Outputs: Joel James
// There is still a problem with this as we are only able to *read* the properties from the person object.
// In a proper application, we'd need to be able to change these properties. i.e:
person.fullName = 'Josh Jameson'; // wouldn't work in it's current state.
// AND ideally, we would like to be able to call the full name without using the method syntax, like:
console.log(person.fullName);

// Enter GETTERS and SETTERS !
    // getters => access properties
    // setters => change (mutate) them

const person = {
    firstName: 'Joel',
    lastName: 'James',
    get fullName() { // write 'get' next to the method name
        return `${person.firstName} ${person.lastName}`
    },
    set fullname(value) { // value will be whatever is on the right hand side of the assignment operator
        // split the string, take the parts and set the firstName, lastName properties
        const parts = value.split(' '); // returns an array
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName); // Now we can access the fullName like a property

person.fullName = 'Josh Jameson';

console.log(person); // You'll see firstName and lastName properties will be updated
// you'll also see that fullName is (...), hover over and the tooltip will tell you that it is a getter method
// and to click to invoke.

// Error Handling
    // The above is all well and good, but what if we entered an unexpected type into the person.fullName?
person.fullName = true; // Outputs error: Uncaught type exception - split is a method that belongs to strings. Also:
person.fullName = null; // Outputs TypeError: Cannot read property ... of null

// We need error handling
    // Typically in situations like this, do error handing at the beginning of a function or method, called:
    // **Defensive programming** - checking that the values coming in are valid, that they are in the right 
    // format to execute our logic. i.e:

    const person = {
        firstName: 'Joel',
        lastName: 'James',
        get fullName() {
            return `${person.firstName} ${person.lastName}`;
        },
        set fullName(value) {
            if (typeof value !== 'string') // return; // This will return with no error
            throw new Error('Value is not a string.'); // throw keyword, create a new Error object (Pascal-case signifies the constructor function)
                // if we throw an error, we need to catch it in the same place that called the exception

            const parts = value.split(' ');
// Obviously, there are still ways for other errors to slip through, like if we pass an empty string (it's still a string)
            if (parts.length !== 2) // you get an empty string as a firstName and undefined as a lastName.
            throw new Error('Enter a first and last name'); // We can throw another exception:

            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    }
try {
    person.fullName = ''; // We need to 'throw' an exception. An Error object used with 'throw' is called an *Exception*
}
catch (e) { // the error parameter is the Error object we made in the setter function.
    alert(e); // Outputs an alert pop-up in the browser. We can also: console.log(e); or display some text to the user
}

console.log(person);


// Local Vs Global Scope
    // Let and Const variables can only be accessed in the block in which 
    // they are defined.
// The below could be a function, conditional or loop code block 
{
    const message = 'hi';
}

console.log(message); // Uncaught ReferenceError: message is not defined

// Same applies to code blocks within other code blocks like:

function start() {
    const message = 'hi';

    if (true) {
        const another = 'bye';
    }
    console.log(another) // Outputs: Uncaught ReferenceError: another is not defined.
}

start();
// Which means things that look like duplicates, can actually be valid JS:

function start() {
    const message = 'hi';
}

function stop() {
    const message = 'bye';
}

start(); // Outputs: 'hi'

    // Global scope
        // Available everywhere
            // But are overwritten by locally scoped variables with the same name
const color = 'red';

    function start() {
        const message = 'hi';
        const color = 'blue';
        console.log(color); // Outputs 'blue' because locally scoped variables have a higher
    }                       // precedence.

    function stop() {
        const message = 'bye';
    }

start();
    // Takeaway: Don't declare const or variables in the global scope
    // Because they can be overwritten in other functions and can cause bugs and issues.

// Let vs Var
    // Problems with var and why you should avoid it.
        // 1. Var - It's scope is not limited to the block in which it is defined - but the *function*
        // in which it's defined.
        // 2. When you declare a var variable, it global and attached to the window object.  Because there is 
        // only one window object, if you work with a 3rd party library, it may have a var with the 
        // same name as your var and it will cause a conflict.

let x = 0;
var y = 0;


function start() {
    for (let i = 0; i < 5; i++) // the curly braces code block is still here, just not needed
        console.log(i);

    console.log(i); // Outputs: 0, 1, 2, 3, 4 from internal code block, then i is 5, but
};                  // outputs Uncaught ReferenceError: i is not defined.

// with var instead:

function start() {
    for (var i = 0; i < 5; i++)
        console.log(i)
    
    console.log(i); // Outputs 1 - 4 from inside (loop) block, and 5 from external (function) block
}                   // because var is defined within the start() function, it is available even
                    // if it is within a code block.
// This is a strange 'JavaScript' only feature.  Most of the other programming languages don't act like this

// Recap: 
    // var => function-scoped
    // ES6 (ES2015): let, const => block-scoped

// One more example:

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }
    console.log(red); // Output's 'red' as var is scoped to the function.
 }
*/
// Other reason

var color = 'red'; // var attaches color to the window object.
let age = 30;

console.log(window.color); // Output: 'red'

// In the same regard as the var keyword, when you create a function, it is also attached to the window object
// you can call it by window.functionName() after you've declared it.

// This is bad practice and the way to seperate them is to ensapsulate them in modules 
function sayHi() {
    console.log('hi');
}

// Takeaway: Avoid using the var keyword, because they are function scoped, not block scoped.

// The 'this' keyword
