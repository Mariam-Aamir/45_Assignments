"use strict";
//Assignment 45
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function that stores information about a car in a Object. 
function car_details(manufacturer, modelName, ...additionalInfo) {
    const car = Object.assign({ manufacturer, modelName }, Object.fromEntries(additionalInfo));
    return car;
}
;
// call function to create a car object
let my_car = car_details("toyota", "corolla", ["color", "black"], ['year']);
console.log(my_car);
