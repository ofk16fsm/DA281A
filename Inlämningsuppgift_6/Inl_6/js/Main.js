"use strict"

/* Ferhat Sevim am7592*/

/**
 * Inlämningsuppgift 6
 * ===================
 */

 function ListView(props){
      const imdbURL = "https://www.imdb.com/title/"
      return (
          <div>
            <table className="listView">
              <thead>
                  <tr>
                      {props.headers.map((header, index) => {
                        return (<th id={header} key={index}>{header}</th>)
                      })}
                  </tr>
              </thead>
              <tbody>
                {props.apiData.map((item, index) => {
                  return(<tr key={index}>
                    <td headers="Title">{item.name === "" ? item.Title : item.name ? item.name : item.Title}</td>
                    <td headers="Name">{item.artist}</td>
                    <td headers="Category">{item.Type === "" ? "Music" : item.Type ? item.Type : "Music"}</td>
                    <td headers="Link"><a href={item.url === "" ? (imdbURL + item.imdbID) : item.url ? item.url : (imdbURL + item.imdbID)} target="_blank" rel="noreferrer">{item.name === "" ? item.Title : item.name ? item.name : item.Title}
                    </a></td>
                  </tr>)
                })}          
              </tbody>
              </table>
          </div>  
      )
  }
 
  function Main() {        
    const headers = ["Title", "Name", "Category", "Link"]
    const [apiData, setApiData] = React.useState([])
    const [query, setQuery] = React.useState("")
    
    const onChange = (e) =>{
      let query = e.target.value
      setQuery(query)
    }

    const fetchAPIS = async(query) =>{      
      try {
        var omdbURL = `http://www.omdbapi.com/?apikey=41059430&s=${query}`;
        var musicURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=cdc80ff38eebdbcf8468e2d938ffc8dd&format=json`
        
        const responses = await Promise.all([
          fetch(omdbURL),
          fetch(musicURL)
        ])

        const body = await Promise.all(responses.map((response) => {        
          return response.json()
        }))
        
        const data = await body
        var apiData = []
        if(data[0].Response != "False"){
          apiData.push(...data[0].Search)
          apiData.push(...data[1].results.trackmatches.track)
          console.log(apiData)
        }
        else{
          console.log("There is no data in OMDB API")
          apiData.push(...data[1].results.trackmatches.track)
        }
        setApiData(apiData)
      }
      catch(err){
        console.log(err)
      }  
    }

    const handleAPI = (e) =>{
      apiData.length = 0
      if(query !== ""){
        fetchAPIS(query)
      }
      else{
        alert("Sökfältet får inte vara tomt");
      }
      e.preventDefault();   
    }
    return (
          <div>
            <div className="search-container">                            
              <fieldset className="dialogBox">
                <legend>Search movies, tv-series, episodes & musics</legend>      
                <form id="search-form" onSubmit={(e) => handleAPI(e)}>
                  <input type="text" name="query" id="query" placeholder="Search" onChange={onChange}/>
                  <input type="submit" value="Submit"/>
                </form>   
              </fieldset>
            </div>
            <div className="result-container">
              <fieldset className="dialogBox">
                <ListView headers={headers} apiData={apiData}/>
              </fieldset> 
            </div>             
          </div>
        )
    }

 
 ReactDOM.render(<Main/>, document.getElementById("root"))