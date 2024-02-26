/*Hello Admin: Make a array of five or more usernames, including the
name 'admin'. Imagine you are writing code that will print a greeting to
each user after they log in to a website. Loop through the array,
and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as
Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
console.clear();
var username = ["Admin", "Asif", "Amir", "Yousuf", "Tahira", "Hussain"];
for (var i = 0; i < username.length; i++) {
    if (username[i] == "Admin") {
        console.log("Hello " + username[i] + " , would you like to see a status report?");
        continue;
    }
    else {
        console.log("Hello " + username[i] + " , thank you for logging in again");
        continue;
    }
}
