/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.*/
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
console.log("Hello All!  I found a bigger dinner table.");
console.log("Adding one more guest at the top/start of array.");
guest_list.unshift("Tariq");
console.log(guest_list);
console.log("Adding one more guest at the middle of array.");
guest_list.splice(2, 0, 'Liaquat');
console.log(guest_list);
console.log("Adding one more guest at the end of array.");
guest_list.push("Jameel");
console.log(guest_list);
console.log("Print a new set of invitation messages, one for each person in your list.");
for (i = 0; i < guest_list.length; i++) {
    console.log("Hello " + guest_list[i] + "! You are invited at Today's Dinner.");
}
