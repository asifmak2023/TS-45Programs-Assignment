/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
console.clear();
//Create function
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log("Great ".concat(magician));
    }
}
//Create list of Magician's names
var magician_names = ["Magician1", "Magician2", "Magician3"];
//call the function
make_great(magician_names);
show_magician(magician_names);
