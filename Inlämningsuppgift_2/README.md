# Assignment 2
The aim of the second assignment is to learn the function. These are about to divide code into for creating reusable parts.

### Task 1
Create functions that return the highest and lowest values of two parameters. Take a look at the code example below and use of these methods. ```max min Math.max Math.min```

```javascript
max(5, 10); // has returned 10
max(7, 7); // has returned 7
min(12, 24); // has returned 12
min(30, 18); // has returned 18
```

### Task 2
Create the function that returns an array containing the numbers.

```javascript
var testArray = range(10);
console.log(testArray);
```
Hint: Keep in mind that you will need to use a loop in the function. ```for n```

### Task 3
Create a function that returns the sum of all numbers in the array.
You can start from the code example below:```sum sum([5, 10, 15]); 30```

```javascript
var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);
```

### Task 4
Create a function that counts the number of repetitions of a letter from a string.
You can start from the code example below: ```countCharacter countCharacter("Jane Doe", "e"); 2 "e" "Jane Doe"```

```javascript
var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log(countCharacter(testString1, "e")); // => 2
console.log(countCharacter(testString2, "a")); // => 4 (note. small "a")
```

### Task 5
Create a function that checks if a string is the same as it is backwards.
Take a look at the code example below: ```palindrome true false```

```javascript
palindrome("sirap - paris"); // returns "true"
palindrome("lorem ipsum"); // returns "false"
```

### Task 6
Create a object and save it in the variable. 
This object will be named ```person``` and have the following attributes with respective values.

* ```firstname```, a string containing first name
* ```lastname```, a string containing last name
* ```age```, a number containing age
* ```family```, an array containing the names of family. 

### Task 7
Create a function that receives an object and prints its attributes.
You can assume that the object contains the same attributes as the one in task 6.

```javascript
var person1 = { /* all attributes */ };

// Calling printPerson() has given this print.
printPerson(person1);
// "Fullname: Jane Doe, Age: 25"
// "Family: John, Eliza, Elise"
```

### Task 8
Create a function with two parameters and returns a object containing attributes.


```javascript
var box = createBox(15, 20);
// Prints the attribute
console.log(box.height); // returns 15
console.log(box.width); // returns 20
```

### Task 9
Create a function that receives two parameters and returns an object with attributes and a method named ```area```.
When the method calls, the area will calculate and return.

```javascript
var tri = Triangle(12, 14);

console.log(tri.height); // returns 12
console.log(tri.width); // returns 14
// Calling "area()"
console.log(tri.area()); // returns 84
```

### Task 10
Create a function that receives an object as parameter and returns an array containing the values of the object.

```javascript
var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2); // skickar tillbaka ["a", "b", "c"]
```

Hint: Use the loop to go through all the attributes.```for (var attribute in obj) { ... }```
