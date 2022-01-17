import './App.css';
import { useEffect, useState } from 'react';
import {Container, Button, ButtonGroup, Form, FormGroup, InputGroup, InputGroupText} from 'reactstrap'
import Movie from './components/Movie'
import Textfield from './components/Textfield'
import Checkbox from './components/Checkbox'
import Label from './components/Label'


function App() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false) 
  const [newItem, setItem] = useState({
    id: "",
    href: "",
    movie_title: "",    
    description: "",
    release_date: "",
    genres: []
  })
  const [checked, setCheckboxChecked] = useState(false)

  const selectedGenres = (genres) => {
    var checkboxGroup = Array.from(document.querySelectorAll('.genres'))
    for (let i = 0; i < checkboxGroup.length; i++){
      if(genres.includes(checkboxGroup[i].value)){
        checkboxGroup[i].checked = true
        console.log(checkboxGroup[i].value)
      }
      else{
        checkboxGroup[i].checked = false
      }
    }
  }
  
  const selectedMovieChanged = ((item) => {
    console.clear()
    if(item != null){
      let movie = newItem
      movie.id = item.id
      movie.movie_title = item.movie_title
      movie.href = item.href
      movie.description = item.description
      movie.release_date = item.release_date
      movie.genres = item.genres
      
      setCheckboxChecked(item)
      selectedGenres(movie.genres)
      var inputGroup = Array.from(document.getElementById("inputGroup").getElementsByTagName("input"))
      inputGroup[0].value = movie.movie_title
      inputGroup[1].value = movie.href
      inputGroup[2].value = movie.release_date
      var textArea = document.getElementById("description")
      textArea.value = movie.description
    }
    else{
      var checkboxGroup = Array.from(document.querySelectorAll('.genres'))
      checkboxGroup.forEach(item => {
        item.checked = false
      });
    }
    
  })

  const onChangeText = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(value)
    const activeItem = {...newItem, [name]:value}
    setItem(activeItem)
  }

  const handleChangeGenres = (e) => {
    if(e.target.checked){
      newItem.genres.push(e.target.value)
    }
    else{
      var index = newItem.genres.indexOf(e.target.value)
      newItem.genres.splice(index, 1)
    }
  } 

  const addMovie = () =>{
    if(newItem != null){
      let id = "tt" + Math.floor(Math.random()  * 8999999 + 1000000)
      let movie_title = newItem.movie_title
      let href = newItem.href
      let description = newItem.description
      let release_date = newItem.release_date
      let genres = newItem.genres

      let movie = newItem
      movie = {
        id: id,
        movie_title: movie_title,
        href: href,
        description: description,
        release_date: release_date,
        genres: genres
      }
      //data.push(movie)
      //setData(data)
      handleAPI(movie)
      updateGUI()
    }
  }

  useEffect(() => {
    readAPI()
  }, [])

  const readAPI = async() => {
    const response = await fetch('/api',{
      headers : {   
        'Content-Type': 'application/json',  
        'Accept': 'application/json'  
     }  
    })
    const newData = await response.json()
    const moviesJson = await newData
    setData(moviesJson) 
  }

  const handleAPI = async(item) => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })

    const data = await response.json()    
    const newMovie = await data
    readAPI()
    console.log(newMovie)

  }

  const updateAPI = async(movie) => {
    const response = await fetch(`/api/${movie.id}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })

    const data = await response.json()
    const updatedMovie = await data
    console.log(updatedMovie.message)
    readAPI()
  }

  const updateMovie = (movie) => {    
    if(movie != null){
      document.getElementsByName('release_date').onChange = (e) => {
        movie.release_date = e.target.value
      }
      console.log(movie.id)
      updateAPI(movie)
    }
    setData(data)
    updateGUI()
  }

  const deleteFromAPI = async(movie) => {
    const response = await fetch(`/api/${movie.id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    const deleted = await data
    console.log(deleted.message)
    readAPI()    
  }

  const toggleList = () => {
    setVisible(!visible)
  }
  const deleteMovie = (movie) => {
    //let newData = []
    if(movie.id !== -1){
      deleteFromAPI(movie)
      //newData = data.filter((item) => item.id !== movie.id)      
    }
    setData(data)
  }

  const updateGUI = () => {
    var inputGroup = Array.from(document.getElementById("inputGroup").getElementsByTagName("input"))

    inputGroup.forEach(item => item.value = '')  
    
  }

  return (
    <div className="App">
      <Container className="container">      
      <Form>
        <FormGroup className="formGroup">
          <InputGroup id="inputGroup">
            <div className="grid-item item1">
                <InputGroupText className="label">Movie title </InputGroupText>             
                <Textfield id="movie_title" type="text" name="movie_title" onChange={e => onChangeText(e)}/>
            </div>
            <div className="grid-item item2">
              <InputGroupText className="label">Link </InputGroupText>
              <Textfield id="href" type="text" name="href" onChange={e => onChangeText(e)}/>
            </div>
            <div className="grid-item item3">
              <InputGroupText className="label">Release date</InputGroupText>              
              <Textfield id="datePicker" type="date" name="release_date" onFocus={e => console.log(e.target.value)} onChange={e => onChangeText(e)}/>
            </div>             
            <div className="grid-item item4"> 
              <InputGroupText className="label">Description</InputGroupText>
              <textarea id="description" style={{width: "850px", height: "200px"}} name="description" onChange={e => onChangeText(e)}/>
            </div>  
          </InputGroup>
          <div className="grid-item item5">            
          <InputGroupText className="label">Genres</InputGroupText>
          <InputGroup className="checkboxGroup">
            <Checkbox className="genres" id="action" name="Action" value="Action" onChange={e => handleChangeGenres(e)}/>
            <Label check htmlFor="Action" value="Action"/>
            <Checkbox className="genres" id="adventure" name="Adventure" value="Adventure" onChange={e => handleChangeGenres(e)}/>
            <Label check htmlFor="Adventure" value="Adventure"/>
            <Checkbox className="genres" id="comedy" name="Comedy" value="Comedy" onChange={e => handleChangeGenres(e)}/>
            <Label check htmlFor="Comedy" value="Comedy"/>
            <Checkbox className="genres" id="crime" name="Crime" value="Crime" onChange={e => handleChangeGenres(e)}/>            
            <Label check htmlFor="Crime" value="Crime"/>
            <Checkbox className="genres" id="drama" name="Drama" value="Drama" onChange={e => handleChangeGenres(e)}/>
            <Label check htmlFor="Drama" value="Drama"/>
            <Checkbox className="genres" id="sci-Fi" name="Sci-Fi" value="Sci-Fi" onChange={e => handleChangeGenres(e)}/>
            <Label check htmlFor="Sci-Fi" value="Sci-Fi"/>
          </InputGroup>
          </div>
          <div className="grid-item item6">
          <ButtonGroup className="buttonGroup"> 
            <Button style={{color:'darkred', fontSize:'20px', width:'80px'}} onClick={() => addMovie()}>Add</Button>
            <Button style={{color:'darkred', fontSize:'20px', width:'80px'}} onClick={() => updateMovie(newItem)}>Edit</Button>
            <Button style={{color:'darkred', fontSize:'20px', width:'80px'}} onClick={() => toggleList()}>Read</Button>
          </ButtonGroup>
          </div>
        </FormGroup>
      </Form>
      
      <div>
      { visible ? (
          <Movie 
          movies={data}
          onClick={(item) => deleteMovie(item)} 
          onChange={(item) => selectedMovieChanged(item)}
          checked={checked}/>
        ) : null}
      </div>
      </Container>
    </div>
  );
}

export default App;