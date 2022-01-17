const express = require("express")
const path = require('path')

const obj = [{
    id: "tt4154796",
    href: "https://www.imdb.com/title/tt4154796/",
    movie_title: "Avengers: End Game",
    description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
    release_date: "2017-04-22",
    genres: ["Action","Adventure","Drama"]
}]

module.exports = class Routers{
    constructor(dataFile){
        this.router = express.Router()
        this.dataFile = dataFile
        console.log(this.dataFile[0].movie_title)
    }

    get(){
        this.router.get("/", (req, res) => {
            return res.json(this.dataFile)
        })
    }

    post(app, dataFile){
        this.router.post('/', function(req, res){
            console.log(req.body)
            dataFile.push(req.body)
            app.emit("eventAPI")
            res.send({message: "New movie created."})
        })
    }

    put(app, dataFile){
        this.router.put('/:id', function(req, res){
            var index = dataFile.map((movie) => {
                return movie.id
            }).indexOf(req.params.id)

            if(index !== -1){
                dataFile[index] = {
                    id: req.params.id,
                    href: req.body.href,
                    movie_title: req.body.movie_title,
                    description: req.body.description,
                    release_date: req.body.release_date,
                    genres: req.body.genres
                }
                app.emit("eventAPI")
                res.json({message: `Movie id ${req.params.id} updated`})
            }
        })
    }

    delete(app, dataFile){  
        this.router.delete('/:id', function(req, res) {
            var index = dataFile.map((movie) => {
                return movie.id
            }).indexOf(req.params.id)
        
            if(index === -1){
                console.log("Not found")
            }
            else{
                dataFile.splice(index, 1)
                app.emit("eventAPI")
                res.send({message: "Movie id " + req.params.id + " removed"})
            }
        })
    }
    
}