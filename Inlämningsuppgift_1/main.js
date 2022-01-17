/*Ferhat Sevim am7592 */

"use strict";

/**
 * Uppgift 1
 * =========
 */

console.log(5 * 2 < 12);
console.log(55 != 22);
console.log(16 / 4 == 4);
console.log(8 + 2 <= 128);
console.log(32 * 8  > 255);

/**
 * Uppgift 2
 * =========
 */

console.log("Tisdag".substring(0,3));
console.log("Hamburgare".substring(3,10));
console.log("I'll be back".substring(5, 12));

/**
 * Uppgift 3
 * =========
 */

console.log("It's Learning".substring(5,13).toUpperCase());
console.log("JavaScript: The Good Parts".substring(16, 26).toLowerCase());

/**
 * Uppgift 4
 * =========
 */

var numbers = [128, 256, 512, 1024, 2048];
console.log(numbers);
var sumOfNumbers = 0;
numbers.forEach((n) => {
    sumOfNumbers += n;
    return sumOfNumbers;
});

console.log(sumOfNumbers);

// Eller
sumOfNumbers = numbers.reduce((n, m ) => (n + m));
console.log(sumOfNumbers);

console.log(sumOfNumbers / numbers.length);


numbers.push(4096);
console.log(numbers);
sumOfNumbers = numbers.reduce((n, m) => (n + m));
console.log(sumOfNumbers);
console.log(sumOfNumbers / numbers.length);

/**
 * Uppgift 5
 * =========
 */

var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var sumOfElement = 0;
var i = 0;
for(let country of countries){
    if(i === 1){
        console.log(country.substring(0,3));
    }
    
    sumOfElement += country.length;
    i += 1;
}
console.log(sumOfElement);
console.log(sumOfElement / countries.length);

/**
 * Uppgift 6
 * =========
 */

var values = [3, 5, "Jane", true, 144, false];

var reversed = values.reverse();
console.log(reversed);

/**
 * Uppgift 7
 * =========
 */

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];

var multipleArrays = [];
multipleArrays = names.concat(ages, hasPet)
console.log(multipleArrays);

/**
 * Uppgift 8
 * =========
 */

var actors = ["Sherlock", "Watson", "Bo"];

console.log(actors.join(" - "))

/**
 * Uppgift 9
 * =========
 */

var amount = 49;
if(amount < 50){
    console.log("Less than 50!");
}
else if(amount >= 50 && amount < 65){
    console.log("Optimal range for the amount!");
}
else{
    console.log("Too much!");
}

/**
 * Uppgift 10
 * =========
 */

for(let i = 1; i <= 8; i++){
    console.log("#".repeat(i));
}