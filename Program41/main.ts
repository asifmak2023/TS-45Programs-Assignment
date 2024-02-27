/*
Magicians: Make a array of magician’s names. Pass the array to a 
function called show_magicians(), which prints the name of each magician 
in the array
*/
console.clear();
//Create function
function show_magician(magicians : string[]): void {
  for (const magician of magicians) {
        console.log(magician);
    }
}
//Create list of Magician's names
const magician_names : string[] = ["Magician1", "Magician2", "Magician3"];

//call the function
 
show_magician(magician_names);
