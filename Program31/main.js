console.clear();
var username = ["Admin", "Asif", "Amir", "Yousuf", "Tahira", "Hussain"];
console.log(username == null);
console.log('Array/List is not empty');
console.log(username.length);
for (var i = username.length; i > 0; i--) {
    console.log(username[i]);
    username.pop();
    console.log(username);
}
