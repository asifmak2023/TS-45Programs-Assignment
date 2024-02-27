/*
Magicians: Make a array of magician’s names. Pass the array to a
function called show_magicians(), which prints the name of each magician
in the array
*/
console.clear();
//Create function
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
//Create list of Magician's names
var magician_names = ["Magician1", "Magician2", "Magician3"];
//call the function
show_magician(magician_names);
