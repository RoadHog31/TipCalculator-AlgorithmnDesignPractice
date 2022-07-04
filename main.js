// TipCalculator:

// Initialize billAmount to 0
// Initialize tip to 0
// Initialize tipRate to 0
// Initialize total to 0

// Prompt for billAmount with "What is the bill amount?"
// Prompt for tipRate with "What is the tip rate?"

// convert billAmount to a number
// convert tipRate to a number

// tip = billAmount * (tipRate / 100)
// round tip up to nearest cent
// total = billAmount + tip

// Display "Tip: $" + tip
// Display "Total: $" + total

// End

// console.log("Hi!");

let billAmount = 0;
let tip = 0;
let tipRate = 0;
let total = 0;

const prompt = require('prompt-sync')();

billAmount = prompt("What is the bill amount?");

// console.log(`Bill Amount ${Number(billAmount)}!`);

while (isNaN(billAmount)) {
    
    billAmount = prompt("Please enter a number for the bill amount?");
};

tipRate = prompt("What is the tip rate?");

// console.log(`Tip Rate ${Number(tipRate)}!`);

tip = billAmount * (tipRate / 100);

total = Number(billAmount) + Number(tip);

console.log(`Tip ${Number(tip)}!`);
console.log(`Total ${total}!`);




