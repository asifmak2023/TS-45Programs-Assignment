console.clear();
var i = 0;
var guest_list = ["Javed", "Amir", "Asif"];
for (i; i < guest_list.length; i++) {
    console.log("Hello " + guest_list[i] +
        "!. You are invited to Dinnner today at our home.");
}
console.log(guest_list[0] + " is not coming.");
guest_list[0] = "Rauf";
console.log("----Modified Guests Invited.----");
for (i = 0; i < guest_list.length; i++) {
    console.log("Hello " + guest_list[i] + "! You are invited at Today's Dinner.");
}
