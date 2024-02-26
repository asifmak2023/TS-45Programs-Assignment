/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
and write an if-else chain.
• If the alien’s color is green, print a statement that the player just
earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player
just earned 10 points.*/
console.clear();
var alien_color = ['green', 'yellow', 'red'];
//show alien color is green and player just earned 5 points
for (var i = 0; i < alien_color.length; i++) {
    if (alien_color[i] == 'green') {
        console.log("Alien Color is " + alien_color[i] + ". Player Earned 5 Points");
    }
    else {
        console.log("Alien Color is " + alien_color[i] + ". Player Earned 10 Points");
    }
}
