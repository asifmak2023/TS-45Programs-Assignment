/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, 
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal 
ending for each number. Your output should read 
"1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a 
separate line..*/

console.clear();
const ordinals : number[] =  [1,2,3,4,5,6,7,8,9];

for (let i = 1 ; i<10; i++){
  switch (i) {
    case 1:
      console.log(i +"st");
      break;
    case 2:
      console.log(i +"nd");
      break;
    case 3:
      console.log(i +"rd");
      break;
    case 4:
      console.log(i +"th");
      break;
    case 5:
      console.log(i +"th");
      break;
    case 6:
      console.log(i +"th");
      break;
    case 7:
      console.log(i +"th");
      break;
    case 8:
      console.log(i +"th");
      break;
    case 9:
      console.log(i +"th");
      break;
    default:
      console.log("One minute Silence!");
      break;  
  }
}