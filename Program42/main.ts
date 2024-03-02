/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/
console.clear();
//Create function
function show_magician(magicians : string[]): void {
  for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians : string[]): void {
  for (const magician of magicians) {
        console.log(`Great ${magician}`);
    }
}
//Create list of Magician's names
const magician_names : string[] = ["Magician1", "Magician2", "Magician3"];

//call the function
make_great(magician_names); 
show_magician(magician_names);
