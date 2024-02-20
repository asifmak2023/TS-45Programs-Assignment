/*Seeing the World: Think of at least five places in the world you’d like to visit.*/
console.clear();
//const sight_seeing : string[] = ["Karachi", "Dusseldorf", "New York", "Venice", "Madina"];
var arr = ['Munich', 'Kuala Lampur', 'Tokyo', 'Florida', 'Singapore'];
//Original Array
console.log('Original Array');
console.log(arr);
//Sorted Array
console.log("Sorted Array .. Ascending");
var srt = arr.slice().sort();
console.log(srt);
console.log('Original Array');
console.log(arr);
//Reverse Sorted Array
console.log("Sorted Array .. Reverse/Descending");
var rev = srt.slice().reverse();
console.log(rev);
console.log('Original Array');
console.log(arr);
//Reversing the Original Array
arr = arr.reverse();
console.log('Original Array in Reverse Order');
console.log(arr);
//Reversing the Original Array again
arr = arr.reverse();
console.log('Original Array in Original Order');
console.log(arr);
//Sorted Array
console.log("Sorted Array .. Ascending");
srt = arr.slice().sort();
console.log(srt);
console.log('Original Array');
//Reverse Sorted Array
console.log("Sorted Array .. Reverse/Descending");
rev = srt.slice().reverse();
console.log(rev);
