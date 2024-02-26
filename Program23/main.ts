/*Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the 
results of each test. 
Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line 
evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and 
another 5 tests evaluate to False.*/

// TRUE AND FALSE TEST FOR NUMBERS
console.clear();
let num1 : number = 10;
console.log("Is num1 == '10'? I predict True.")
console.log(num1 == 10)

num1 = 20;
console.log("Is num1 == '10'? I predict False.")
console.log(num1 == 10)

//COMPARISION OPERATORS
num1=10;
let num2 : number = 11;
console.log("Is num1 < num2? I predict True.")
console.log(num1 < num2)

console.log("Is num1 < num2? I predict False.")
console.log(num1 > num2)

//LOGICAL OPEARTORS
//AND OPERATOR
console.log("AND OPERATOR , I PREDICT FALSE")
console.log(num1<num2 && num1>num2);

//OR OPERATOR
console.log("AND OPERATOR , I PREDICT TRUE")
console.log(num1<num2 || num1>num2);

//Conditional Operator (?) -- TERNARY OPERATOR
console.log("Ternary Operator-- I predict True")
let res : string = num1 > 0 ? "TRUE" : "FALSE";
console.log(res)

console.log("Ternary Operator-- I predict False")
res = num1 > num2 ? "TRUE":"FALSE" 
console.log(res)

//Conditional Operator (?) -- strings
let str : string = 'TypeScript';
console.log("Ternary Operator-- I predict True")
res = str.length == 10 ? "TRUE":"FALSE" 
console.log(res)

console.log("Ternary Operator-- I predict False")
res = str.length > 10 ? "TRUE":"FALSE" 
console.log(res)


