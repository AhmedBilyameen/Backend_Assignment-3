// Storing personal information in variables
const fName = "Bilyaminu";
const lName = "Ahmad";
const age = 25;
const indigene = "Gombe State";
const isMarried = false; 

//Creating a sentence using string concatenation
const sentence = "My name is " + fName + " " + lName + ". I am " + age + " years old and I am an indigene of " + indigene + ".";
console.log(sentence);

//using ECMAScript 6 is much more cleaner than above.
const sentence2 = `My name is ${fName} ${lName} I am ${age} years old and I am an indigene of ${indigene}.`;
console.log(sentence2);

// my favorite quote
let quote = "The future belongs to those who believe in the beauty of their dreams.";

// Converting to uppercase
console.log(quote.toUpperCase());

// Convertign to lowercase
console.log(quote.toLowerCase());

let word = "BACKEND CLASS";
console.log("Word to be reverse: ", word);

// converting the word to an array using split method
let newArr = word.split("");
// using reverse() method of an Array to reverse the characters one after the other
newArr.reverse();
// converting the array back to String using join method and storing it to new variable
const reverseWord = newArr.join("");

console.log("The new reversed word: ", reverseWord);// print the reversed word to the console.


// Prices of three items
const shawarma = 500;
const bugger = 750;
const iceCream = 1200;

// calculation of the total price
const total = shawarma + bugger + iceCream;
console.log("The total price of your order is: ₦" + total);

// 5 scores
const CA1 = 15;
const CA2 = 10;
const CA3 = 8;
const assignment = 9;
const exams = 55;

// Calculating average
const average = (CA1 + CA2 + CA3 + assignment + exams) / 5;
console.log("The average score is: " + average);

//my favorite foods array
let fav_Foods = ["Jollof Rice", "Indomie", "Eba", "Rice and Stew", "Chips and Egg"];

// Display first and last items
console.log("First food:", fav_Foods[0]);
console.log("Last food:", fav_Foods[fav_Foods.length - 1]);
console.log("The length of the Array is: ", fav_Foods.length);

// Adding one item at the beginning of my array
fav_Foods.unshift("Pounded Yam");

// Adding one item at the end of my array
fav_Foods.push("Spaghetti");

// Displaying updated food list
console.log("Updated food list:", fav_Foods);



// Array of jssOne
let jssOne = ["Amina", "John", "Tolu", "Zainab", "James", "Sule", "Musa", "Rose", "Kenny", "Kenye"];

// Array of jssTwo
let jssTwo = ["Lola", "Ahmed", "Nina", "Patrick", "Tom", "Jerry", "Sade", "Paul", "Betty", "Aliyu"];

// Array of jssThree
let jssThree = ["Blessing", "Bashir", "Miracle", "Kelvin", "Fatima", "Segun", "Ada", "Hope", "Henry", "Chuks"];

//displaying all the three arrays
// console.log(jssOne, jssTwo, jssThree);
