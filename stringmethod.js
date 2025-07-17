// String methods in JavaScript

//length method

let a = "Anantha s";
console.log(a.length);// .length calculates the length of the string ie 9

//indexof method

let b = "Anantha s";
console.log(b.indexOf('s'));// here index means position of x ie 8

//lastindexof method

let c = "Anantha s";
console.log(c.lastIndexOf('a'));//here last index means the last position of 'a' in the string ie 6

//serch method

let d = "Anantha s";
console.log(d.search('Anantha s'));// if Anantha s is there shows 0,otherwise -1

//includes method

let e = "Anantha s";
console.log(e.includes('Anantha'));// if Anantha is there shows true,otherwise false

//slice method

let f = "Anantha s";
console.log(f.slice(1, 5));// shows string at 1st index to 5th index ie nant

//number method

let g = "15";
let h = 15;

console.log(typeof parseInt(g)); //convert string in g to number
console.log(typeof h.toString()); //convert number in h to string

//Array methods

let myArray2 = ["A", "B", "C"];

myArray2[0] = 'X'; // Changing the first element of the array ie 'A' to 'X'
myArray2.push('D'); // Adding a new element to the end of the array ie 'D' after 'C'
myArray2.pop(); // Removing the last element of the array ie added 'D' is now removed
myArray2.unshift('Y'); // Adding a new element to the beginning of the array ie 'Y' before 'X'
myArray2.shift(); // Removing the first element of the array ie 'Y' is now removed
myArray2.splice(1, 1); // Removing the second element of the array from 1st index to 1st position ie 'B' is now removed
myArray2.splice(1,0, "D", "E"); // Adding two new elements 'D' and 'E' at the second position of the array replacing C's postion with 'D' and 'E'
console.log(myArray2); // Accessing the first element of the array

//object methods
let myObject = {
    name: "Anantha",
    age: 25,
    city: "Bangalore"
};
myObject.name = "Anantha S"; // Changing the name property of the object from "Anantha" to "Anantha S"
delete myObject.age; // Deleting the age property of the object it will now be undefined in consoling age

console.log(myObject.name); // Accessing the name property of the object
console.log(myObject['age']); // Accessing the age property of the object using bracket notation
