"use strict"

/*Ferhat Sevim am7592*/

/**
 * Uppgift 1
 * =========
 */
 
 function max(n, m){
   if(n > m ){
     return n;
   }
   else{
     return m;
   }
 }
 
 function min(n, m){
   if(n < m){
     return n;
   }
   else{
     return m;
   }
 }
 
/**
 * Uppgift 2
 * =========
 */
 
 function range(n){
   let arr = []
   for(let i = 0; i < n; i++){
      arr.push(i)
   }
    return arr
 }
 
 //console.log(range(5))
 
/**
 * Uppgift 3
 * =========
 */
 
 function sum(arr){
   var sumOfArray = 0
   for(let i = 0; i < arr.length; i++){
     sumOfArray += arr[i]
   }
   return sumOfArray
 }
 
/**
 * Uppgift 4
 * =========
 */
 
 function countCharacter(text, letter){
   var n = 0;
   for(let i = 0; i < text.length; i++){
     if(text[i] === letter){
       n += 1
     }
   }
   return n
 }
 
 console.log(countCharacter("Abracadabra",'A'))
 
/**
 * Uppgift 5
 * =========
 */
 
 function palindrome(text){
   var reversed = text.split("").reverse().join()
   if(text === reversed){
     return true
   }
   else{
     return false
   }
 }
 
console.log(palindrome("lorem ipsum"))

/**
 * Uppgift 6
 * =========
 */
 
var person = {
  firstName: "Ferhat",
  lastName: "Sevim",
  age: 35,
  family: ["Fiona", "Nazeli", "Rozelin"]
}

/**
 * Uppgift 7
 * =========
 */
 
function printPerson(obj){
  var result = `Fullname: ${obj.firstName} ${obj.lastName}\n
  Age: ${obj.age}\n
  Family: ${obj.family.join(",")}`
    console.log(result)
}

printPerson(person)

/**
 * Uppgift 8
 * =========
 */
 
function createBox(height, width){
  var obj = {
    height: height,
    width: width
  }
  return obj
}

var box = createBox(15, 20)
console.log(box.height)
console.log(box.width)

/**
 * Uppgift 9
 * =========
 */

function Triangle(height, width){
  var obj = {
    height: height,
    width: width,
    area: function(){
    return (this.height * this.width) / 2
  }
  }
  return obj
}

var tri = Triangle(12, 14)
console.log(tri.height)
console.log(tri.width)
console.log(tri.area())

/**
 * Uppgift 10
 * =========
 */
 
 function attributes(obj){
   var attributesArr = []
   for(var attribute in obj){
     attributesArr.push(attribute)
   }
   return attributesArr
 }
 
var testObject2 = {
    a: 1,
    b: 2,
    c: 3
}
 
 var attributesObj = attributes(testObject2)
 console.log(attributesObj)