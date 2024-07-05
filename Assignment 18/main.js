"use strict";
// Assignment 18
// make list of liked places
let placetoVisit = ["eyjpt", "turky", "madina", "makkah"];
//print in original order
console.log("original order", placetoVisit);
// sort in reverse alphabetical order
console.log("Alphabatical order", placetoVisit.slice().sort());
// print array  in original order
console.log("original order", placetoVisit);
//print your arry reverse order
console.log("reverse order", placetoVisit.slice().sort().reverse());
// again print in original order
console.log("original order", placetoVisit);
//print the arry to show it has order has change
console.log("order changed");
placetoVisit.reverse();
console.log(placetoVisit);
// reverse the list order to show it has back to original order
console.log("originol order", placetoVisit);
console.log(placetoVisit);
//print the arry to show its order has been change
console.log("reverse alphabatical order change ", placetoVisit.sort().reverse());
console.log(placetoVisit);
