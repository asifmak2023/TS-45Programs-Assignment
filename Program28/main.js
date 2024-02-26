/*Stages of Life: Write an if-else chain that determines a person’s stage of life.
Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the
person is a baby.

• If the person is at least 2 years old but less than 4,
print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13,
print a message that the person is a kid.

• If the person is at least 13 years old but less than 20,
print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65,
print a message that the person is an adult.

• If the person is age 65 or older,
print a message that the person is an elder.*/
console.clear();
var age = [1, 3, 9, 17, 30, 70];
for (var i = 0; i < age.length; i++) {
    if (age[i] < 2) {
        console.log("Age of Person = " + age[i] + " year. The person is a baby");
    }
    else if (age[i] >= 2 && age[i] < 4) {
        console.log("Age of Person = " + age[i] + " years. The person is a toddler");
    }
    else if (age[i] >= 4 && age[i] < 13) {
        console.log("Age of Person = " + age[i] + " years. The person is a kid");
    }
    else if (age[i] >= 13 && age[i] < 20) {
        console.log("Age of Person = " + age[i] + " years. The person is a teenager");
    }
    else if (age[i] >= 20 && age[i] < 65) {
        console.log("Age of Person = " + age[i] + " years. The person is an adult");
    }
    else if (age[i] >= 65) {
        console.log("Age of Person = " + age[i] + " years. The person is an elder");
    }
}
