"use strict";
// Assignment 19
// Dinner Guests:  print a message indicating the number of people you are inviting to dinner.
console.log("Dear Friend there some changes in Dinner we dont have new table for dinner unless we have one table so we change our plan now we call only two guest");
let guestList = ["Aisha", "maheen", "saba", "nasra", "Mariam Aamir"];
guestList.unshift("mirha", "areesh");
console.log("updateList of guest:", guestList);
// remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined)
        console.log(`Sorry , ${removedGuest}, we cancelled the Dinner`);
}
//print messagefor guest whose still in list
guestList.forEach(guest => {
    console.log(`dear Guest: ${guest},you invited for dinner`);
});
