"use strict"

/*Ferhat Sevim am7592*/

/**
 * Inlämningsuppgift 4
 * ===================
 */
function fetchMovie(query, type){
  var result = document.getElementById("result");
  result.innerHTML = "";
  // Objekt för att hantera AJAX
  var omdbAPI = new XMLHttpRequest();
  // Den URL vi ska använda oss av 
  var omdbURL = `http://www.omdbapi.com/?apikey=7c75e03b&s=${query}&type=${type}`;

  omdbAPI.addEventListener("load", function(){
    var data = JSON.parse(this.responseText);
    if(data.Response == "False"){
      
      console.log(data.Error)
      result.innerHTML = data.Error;
    }
    else{
      console.log(data);
      data.Search.map( (item, index) => {
      result.innerHTML += `<br> ${item.Title} (${item.Year}) <br>`;
    })}
  });

  // Ange vilken metod (get) samt URL vi ska skicka med
  omdbAPI.open("get", omdbURL, true);

  // Skicka förfrågan
  omdbAPI.send();
}

const form = document.getElementById("search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var query = this.elements.query.value;
  var type = this.elements.types.value;
  if(query !== ""){
    fetchMovie(query, type);
  }
  else{
    alert("Sökfältet får inte vara tomt");
  }
});