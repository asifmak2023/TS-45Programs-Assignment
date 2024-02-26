/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

console.clear();
const username : string[] =  ["Admin", "Asif", "Amir", "Yousuf", "Tahira", "Hussain"];
console.log(username == null)
console.log('Array/List is not empty')
console.log(username.length);
for (let i = username.length; i>0; i--){
  console.log(username[i]);
  username.pop();
  console.log(username);
}  
