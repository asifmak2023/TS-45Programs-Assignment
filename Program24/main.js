/*More Conditional Tests:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// TRUE AND FALSE TEST FOR NUMBERS
console.clear();
console.log('Tests for equality and inequality with strings');
var str1 = 'asif';
var str2 = 'ASIF';
console.log("string inequality test-- I predict True");
console.log(str1 != str2);
console.log("string equality test-- I predict False");
console.log(str1 == str2);
console.log(' Tests using the lower case function');
console.log("string equality test-- I predict True");
console.log(str1 == str2.toLocaleLowerCase());
console.log("string inequality test-- I predict False");
console.log(str1 != str2.toLocaleLowerCase());
console.log('Numerical tests involving equality and inequality, \ngreater than and less than, greater than or equal to, \nand less than or equal to');
var num1 = 1;
var num2 = -1;
console.log("numbers equality test-- I predict False");
console.log(num1 == num2);
console.log("numbers inequality test-- I predict True");
console.log(num1 != num2);
console.log("numbers greater than test-- I predict True");
console.log(num1 > num2);
console.log("numbers less than test-- I predict False");
console.log(num1 < num2);
console.log("numbers greater than or equal to test-- I predict True");
console.log(num1 >= num2);
console.log("numbers less than or equal to  test-- I predict False");
console.log(num1 <= num2);
console.log('Tests using "and" and "or" operators');
console.log("AND & OPERATOR, I predict TRUE");
console.log(num1 >= 1 && num2 <= 0);
console.log("AND & OPERATOR, I predict FALSE");
console.log(num1 >= 2 && num2 <= 0);
console.log("OR | OPERATOR, I predict TRUE");
console.log(num1 >= 2 || num2 <= 0);
console.log("OR | OPERATOR, I predict FALSE");
console.log(num1 >= 2 || num2 < -2);
console.log('Test whether an item is in a array');
var arr = ["asif", "amir", "javed"];
console.log("item in array, I predict TRUE");
console.log(arr[0] == "asif");
console.log('Test whether an item is not in a array');
arr = ["asif", "amir", "javed"];
console.log("item in array, I predict FALSE");
console.log(arr[0] == "shakeel");
