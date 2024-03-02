console.clear();
//Create function
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("Nothing Selected! Please Add Any Ingredients!");
    }
    else {
        console.log("Your ordered Sandwich Includes: ");
        for (var i = 0; i < items.length; i++) {
            console.log(" ".concat(items[i]));
        }
    }
}
make_sandwich("CHEESE", "CHICKEN", "GARLIC MAYO");
make_sandwich("BEEF KABAB", "TOMATO", "ONION", "MAYONESES");
make_sandwich();
