"use strict"

/*Ferhat Sevim am7592*/

/**
 * Uppgift 1
 * =========
 */
 const btnSuccess = document.getElementById("success")
 const btnError = document.getElementById("error")
 const btnInfo = document.getElementById("info")
 const messageBox = document.getElementById("message-box")
 btnSuccess.addEventListener("click", function(event){
   messageBox.classList.remove(btnError.id)
   messageBox.classList.remove(btnInfo.id)
   messageBox.classList.add(event.currentTarget.id)
 })
 btnError.addEventListener("click", function(event){
   messageBox.classList.remove(btnSuccess.id)
   messageBox.classList.remove(btnInfo.id)
   messageBox.classList.add(event.currentTarget.id)
 })
 btnInfo.addEventListener("click", function(event){
   messageBox.classList.remove(btnSuccess.id)
   messageBox.classList.remove(btnError.id)
   messageBox.classList.add(event.currentTarget.id)
 })
 
/**
 * Uppgift 2
 * =========
 */
 const btnAdd = document.getElementById("add-item")
 const itemList = document.getElementById("items")
 btnAdd.addEventListener("click", function(event){
   const newItem = document.createElement("li")
   const data = document.createTextNode(prompt())
   newItem.appendChild(data)
   itemList.appendChild(newItem)
 })
 
/**
 * Uppgift 3
 * =========
 */
 const btnRemove = document.getElementById("remove-item")
 btnRemove.addEventListener("click", function(event){
   itemList.removeChild(itemList.lastElementChild)
 })
 
/**
 * Uppgift 4
 * =========
 */
 const buttons = document.getElementsByClassName("remove-list-item")
 const itemList_1 = document.getElementById("items-1")
 const nodes = itemList_1.children;
 for(let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener("click", function(){
     console.log(nodes[i].innerText)
     console.log(this)
     itemList_1.removeChild(nodes[i])
   })
 }
 
 
/**
 * Uppgift 5
 * =========
 */
// Del 1
const form = document.getElementById("apply-for-pet")

form.addEventListener("submit", function(event){
  event.preventDefault()
  
  var outData = `Name: ${event.currentTarget.firstname.value} ${event.currentTarget.lastname.value}\n`+
  `Age: ${event.currentTarget.age.value}\n`+
  `Email: ${event.currentTarget.email.value}`
  console.log(outData)
})

// Del 2
form.addEventListener("submit", function(event){
  event.preventDefault();
  var min = 0
  var max = 50
  var firstName = this.elements.firstname.value
  var lastName = this.elements.lastname.value
  var age = this.elements.age.value
  var email = this.elements.email.value
  var pet = this.elements.pet.value
  
  if((firstName.length < min || firstName.length > max) && (lastName.length < min || lastName.length > max) && (isNaN(age) || age > min) && (email.length < min || email.length > max) ){
    alert("Du har inte matat rätt")
    return false
  }
  else if( firstName === '' || lastName === '' || age === '' || email === '' || pet === ''){
	  alert("Alla fält kan inte vara tomt")
    return false
  }
  else{	  
	  event.target.submit()
    return true
  }  
})