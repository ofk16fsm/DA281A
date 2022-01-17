import {useState, useEffect} from "react"


const Main = () => {
    const [movies, setMovies] = useState([])
    const [checked, setChecked] = useState(false)

    const readAPI = async(query, type) => {
        var omdbAPI = `http://www.omdbapi.com/?apikey=7c75e03b&s=${query}&type=${type}`
        const response = await fetch(omdbAPI)
        const body = await response.json()
        const movieJson = await body
        console.log(movieJson)
        setMovies(movieJson)
    }

    const sorter = (item) =>{
        readAPI("wanted", "movie")
        setChecked(item)
    }

    return (
        <div>
                <input type="checkbox" name="action" value="action" checked={checked==="action"} onChange={(e) => sorter(e.target.value)}/>
                <input type="checkbox" name="comedy" value="comedy" checked={checked === "comedy"} onChange={(e) => sorter(e.target.value)}/>
                <input type="checkbox" name="drama" value="drama" checked={checked === "drama"} onChange={(e) => sorter(e.target.value)}/>
                <input type="checkbox" name="crime" value="crime" checked={checked === "crime"}  onChange={(e) => sorter(e.target.value)}/>
        </div>
    )
}

export default Main