//1. Hello Variable
//Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string = "Hello, World!";
console.log(greeting);

//2. Basic Math
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1: number = 12;
let num2: number = 7;

let sum: number = num1 + num2;
let difference: number = num1 - num2;
let product: number = num1 * num2;
let quotient: number = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.

let a1: number = 5;
let b1: number = 10;

console.log("Before swapping:");
console.log("a:", a1);
console.log("b:", b1);

[a1, b1] = [b1, a1];

console.log("After swapping:");
console.log("a:", a1);
console.log("b:", b1);

//4. Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.

let myVariable: string = "Hello, PIAIC!";
console.log("Original value:", myVariable);

myVariable = String(57); 

console.log("Changed value (after changing type):", myVariable);

//5. Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.

let numb1: number = 10;
let numb2: number = 3;

let remainder: number = numb1 % numb2;

console.log(`The remainder of ${numb1} divided by ${numb2} is:`, remainder);

//6. Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.

let num: number = 8;

// Method 1: Using the increment operator (++)
num++;
console.log("Incremented value (Method 1):", num);

// Method 2: Using addition assignment operator (+=)
num += 1;
console.log("Incremented value (Method 2):", num);

//7. Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a: boolean = true;
let b: boolean = false;
let c: boolean = true;

// AND gate
let andResult: boolean = a && b && c;
console.log("AND gate:", andResult);

// OR gate
let orResult: boolean = a || b || c;
console.log("OR gate:", orResult);

// NOT gate
let notResultA: boolean = !a;
let notResultB: boolean = !b;
let notResultC: boolean = !c;

console.log("NOT gate for 'a':", notResultA);
console.log("NOT gate for 'b':", notResultB);
console.log("NOT gate for 'c':", notResultC);

//8. Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let x: number = 10;

// Addition assignment operator (+=)
x += 5;
console.log("After addition:", x);

// Subtraction assignment operator (-=)
x -= 5;
console.log("After subtraction:", x);

// Multiplication assignment operator (*=)
x *= 5; 
console.log("After multiplication:", x);

// Division assignment operator (/=)
x /= 5;
console.log("After division:", x);

// Modulus assignment operator (%=)
x %= 5; 
console.log("After modulus:", x);

//9. Even or Odd
//Instructions: Write a program to check if a number is even or odd.

function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test the function
const numberToCheck: number = 6;
const result: string = checkEvenOrOdd(numberToCheck);
console.log(`${numberToCheck} is ${result}.`);

//10. Voting Eligibility
//Instructions: Check if a person is eligible to vote.

function checkVotingEligibility(age: number): string {
    let eligibilityStatus: string;

    if (age >= 18) {
        eligibilityStatus = "You are eligible to vote!";
    } else {
        eligibilityStatus = "You are not eligible to vote yet.";
    }

    return eligibilityStatus;
}

// Test the function
const personAge: number = 16; // Change the age to test eligibility
const eligibilityStatus: string = checkVotingEligibility(personAge);
console.log(eligibilityStatus);

//11. Grading System
//Instructions: Assign a grade based on a numerical score.
function assignGrade(score: number): string {
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

// Test the function
const studentScore: number = 40; // Change the score to test
const studentGrade: string = assignGrade(studentScore);
console.log(`Student score: ${studentScore}, Grade: ${studentGrade}`);

let x1: number = 16;
let y: number = 28;
let z: number = 15;

let maximum: number = x1;

if (y > maximum) {
    maximum = y;
}

if (z > maximum) {
    maximum = z;
}

console.log("Maximum of", x1 + ",", y + ", and", z + ":", maximum);

//13. Leap Year Checker
//Instructions: Check if a given year is a leap year.

let yearToCheck: number = 2027;

if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}
//14. Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheitTemp: number = 68;

let celsiusTemp: number = (fahrenheitTemp- 32) * 5 / 9;

console.log(`${fahrenheitTemp}°F is equal to ${celsiusTemp.toFixed(2)}°C.`);

//15. Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.
let numToCheck: number = -10;

if (numToCheck > 0) {
    console.log(`${numToCheck} is positive.`);
} else if (numToCheck < 0) {
    console.log(`${numToCheck} is negative.`);
} else {
    console.log(`${numToCheck} is zero.`);
}

//16. Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.

let num5: number = 5;

console.log(`Multiplication table for ${num5}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num5} * ${i} = ${num5 * i}`);
}






