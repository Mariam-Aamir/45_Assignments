//Assignment 45

import { toASCII } from "punycode";

//Write a function that stores information about a car in a Object. 
function car_details (manufacturer: string , modelName: string , ...additionalInfo:any[] ){
  
    const car = { manufacturer ,modelName ,...Object.fromEntries
    (additionalInfo)}
     return car;
   };
// call function to create a car object

let my_car = car_details ("toyota", "corolla", ["color" ,"black"],
    ['year', '2024']);

    console.log(my_car); 


