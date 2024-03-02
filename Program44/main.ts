console.clear();
//Create function
function make_sandwich(...items : string[]): void {
  if(items.length === 0){
    console.log("Nothing Selected! Please Add Any Ingredients!");
  }
  else{
    console.log("Your ordered Sandwich Includes: ");
    for (let i =0; i<items.length; i++){
      console.log(` ${items[i]}`);
    }
  }
}

make_sandwich("CHEESE","CHICKEN","GARLIC MAYO");
make_sandwich("BEEF KABAB","TOMATO","ONION","MAYONESES");
make_sandwich();