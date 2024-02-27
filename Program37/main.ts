/*
Large Shirts: Modify the make_shirt() function so that shirts are 
large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message
*/
console.clear();
//Create function
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`A ${size}-sized T-shirt will be printed with the message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("Medium");

// Make a shirt of any size with a different message
make_shirt("Small", "I like programming");