import express from "express"

const obj = [{
    id: "tt4154796",
    href: "https://www.imdb.com/title/tt4154796/",
    movie_title: "Avengers: End Game",
    description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
    release_date: "2017-04-22",
    genres: ["Action","Adventure","Drama"]
}]

class Routers{
    constructor(){
        this.router = express.Router()
        
    }

    get(){
        this.router.get("/", (req, res) => {
            return res.json(obj)
        })
    }

    post(){
        this.router.post('/', function(req, res){
            console.log(req.body)
            obj.push(req.body)
            res.send({message: "New movie created."})
        })
    }

    delete(){  
        this.router.delete('/:id', function(req, res) {
            var index = dataFile.map((movie) => {
                return movie.id
            }).indexOf(req.params.id)
        
            if(index === -1){
                console.log("Not found")
            }
            else{
                obj.splice(index, 1)
                res.send({message: "Movie id " + req.params.id + " removed"})
            }
        })
    }
    
}


export default Routers