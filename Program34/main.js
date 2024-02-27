/*
Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print
the name of each pizza.
• Modify your for loop to print a sentence using the name of
the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing
a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop,
that states how much you like pizza. The output should consist of
three or more lines about the kinds of pizza you like and
then an additional sentence, such as I really love pizza!
*/
console.clear();
var pizza_names = ["Marinara", "Margherita", "Mamma Mia"];
var pizza_ingredients = ["Marinara sauce, Garlic, Olive oil, Basil, Oregano", "San Marzano tomato sauce, Mozzarella di bufala, Olive Oil", "Tomato sauce, Mozzarella, Tuna, Peppers, Corn, Onions"];
for (var i = 0; i < pizza_names.length; i++) {
    console.log(pizza_names[i]);
    console.log("Ingredients: " + pizza_ingredients[i]);
}
console.log("Pizza, a beloved culinary masterpiece, is a delectable combination of a thin or thick crust topped with flavorful tomato sauce, gooey melted cheese, and an array of mouthwatering toppings. \nWhether you crave the classic Margherita with fresh basil or the adventurous supreme with a medley of meats and veggies, pizza caters to diverse taste buds.");
