console.clear();
//Create function
function show_magician(magicians : string[]): void {
  for (const magician of magicians) {
        console.log(magician);
    }
}
//Create list of Magician's names
const magician_names : string[] = ["Magician1", "Magician2", "Magician3"];

const make_great = magician_names.map((num) => {
  return num +  " the Great";
});

let theGreat_magicians : string[] = make_great;
//console.log(theGreat_magicians);

show_magician(magician_names);
show_magician(theGreat_magicians);