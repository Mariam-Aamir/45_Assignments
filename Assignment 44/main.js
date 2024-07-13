"use strict";
//Assignment 44
// Write a function that accepts a array of items a person wants on a sandwich.
function makeSandwich(...items) {
    console.log("\n Your sandwich includes:\n");
    items.forEach(singleItem => { console.log(singleItem); });
    console.log("\n Enjoy your sandwitch!");
}
// Call the function three times, using a different number of arguments each time.
makeSandwich("beef", "lettuce", "tomato", "cheese", "mayo", "cucumber");
makeSandwich("Egg", "tomato", "Chicken", "cucumber");
makeSandwich("bun", "lettuce", "broast", "cheese", "mayo", "cucumber", "ketchup", "tomato");
