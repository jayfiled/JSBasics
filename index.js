/*
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


//** CONDITIONALS *** 

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




//OBJECTS
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
*/
// Exercise 3

    // Object Equality

    // Use the constructor function you used in the previous exercise to creat two address objects
    // Create two functions to check to see if the objects passed in are equal
        // Objects are reference types - check that all the properties are equal, it should return true
    // If address address 1 and address two are point to the exact same object return true, if not return false

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






























