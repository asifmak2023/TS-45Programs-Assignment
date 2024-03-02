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
var make_great = magician_names.map(function (num) {
    return num + " the Great";
});
var theGreat_magicians = make_great;
//console.log(theGreat_magicians);
show_magician(magician_names);
show_magician(theGreat_magicians);
