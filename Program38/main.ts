/*
Cities: Write a function called describe_city() that accepts the 
name of a city and its country. The function should print a simple 
sentence, such as Karachi is in Pakistan. Give the parameter 
for the country a default value. Call your function for three 
different cities, at least one of which is not in the default country.
*/
console.clear();
//Create function
function describeCity(city: string, country: string = "New Zealand"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("Wellington");  // Defaults to "Default Country"
describeCity("New York", "USA");


