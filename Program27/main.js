/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an
if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
console.clear();
var alien_color = ['green', 'yellow', 'red'];
//show alien color is green and player just earned 5 points
for (var i = 0; i < alien_color.length; i++) {
    if (alien_color[i] == 'green') {
        console.log("Alien Color is " + alien_color[i] + ". Player Earned 5 Points");
    }
    else if (alien_color[i] == 'yellow') {
        console.log("Alien Color is " + alien_color[i] + ". Player Earned 10 Points");
    }
    else if (alien_color[i] == 'red') {
        console.log("Alien Color is " + alien_color[i] + ". Player Earned 15 Points");
    }
    else {
    }
}
