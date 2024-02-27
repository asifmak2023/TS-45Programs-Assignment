/*
City Names: Write a function called city_country() that takes in
the name of a city and its country. The function should return a
string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs,
and print the value that’s returned.
*/
console.clear();
//Create function
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs
var location1 = cityCountry("Karachi", "Pakistan");
var location2 = cityCountry("Beijing", "China");
var location3 = cityCountry("Dusseldorf", "Germany");
// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
