//Assignment 43


//Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the
//  original names and one array with the Great added to each magician’s name.

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}

function make_great( magicians : string[]){
    return  magicians.map(name => `the Great  ${name}`);
}

let magicians_names = ["Harry Potter", "Bob", "Charlie"];

//making a copy of orignal array

let copy_magicians_names = magicians_names.slice();

//modified copy of magicians with great megicians names

let copy_great_magicians = make_great(copy_magicians_names);

//show both original and copy 

show_magicians(magicians_names);
show_magicians(copy_great_magicians);