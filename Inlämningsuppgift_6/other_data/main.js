"use strict"

/* Ferhat Sevim am7592*/

/**
 * Inlämningsuppgift 6
 * ===================
 */
 
 var Main = React.createClass({
   getInitialState: function() {
        // Notera att variabeln "albums" kommer från
        // vår fil `js/albums.js`
        return {
           
            checked: false
        };
    },
    fetchAPI: function (query){
 var omdbURL = "http://www.omdbapi.com/?apikey=7c75e03b&s="+ query +"&type=movie";
      fetch(omdbURL)
      .then(function(response) {
        
        return response.json()
      })
      .then(function(data){
        console.log(data)
      })
      .catch(function(error){
        console.log(error)
      })
    },
searchMovie: function(query){
//var query = this.elements.query.value;//document.forms["movieForm"]["query"].value;

 // Objekt för att hantera AJAX
var omdbAPI = new XMLHttpRequest();
// Den URL vi ska använda oss av 
var omdbURL = "http://www.omdbapi.com/?apikey=7c75e03b&s="+ query +"&type=movie";


omdbAPI.addEventListener("load", function(){
  var data = JSON.parse(this.responseText);
  if(data.Response == "False"){
    console.log(data.Error)
  }
  else{
    console.log(data);
   
}});
omdbAPI.open("get", omdbURL, true);
omdbAPI.send();
},
  sorter: function(item){
     //this.searchMovie("wanted")
     this.fetchAPI("wanted")
      this.setState({
        checked: item
      })
    },
    isChecked: function(item){
      return this.state.checked === item
    },
   render: function (){
     return (
       <div>Test
                <input type="checkbox" name="action" value="action" checked={this.state.checked==="action"} onChange={(e) => this.sorter(e.target.value)}/>
                <input type="checkbox" name="comedy" value="comedy" checked={this.state.checked === "comedy"} onChange={(e) => this.sorter(e.target.value)}/>
                <input type="checkbox" name="drama" value="drama" checked={this.state.checked === "drama"} onChange={(e) => this.sorter(e.target.value)}/>
                <input type="checkbox" name="crime" value="crime" checked={this.state.checked === "crime"}  onChange={(e) => this.sorter(e.target.value)}/>

</div>
       )
   }
 })
 
 ReactDOM.render(<Main/>, document.getElementById("root"))