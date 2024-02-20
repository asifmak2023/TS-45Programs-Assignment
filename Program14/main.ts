/*Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, 
inviting them to dinner.*/
console.clear();
let i : number = 0;
let guest_list : string[] = ["Javed", "Amir", "Asif"];

for(i;i<guest_list.length;i++)
{
   console.log("Hello " + guest_list[i] + "!. You are invited to Dinnner today at our home.");
 }