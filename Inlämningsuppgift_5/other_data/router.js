var express = require("express")
var router = express.Router()

const dataFile = require('./api/movies.json')

console.log(dataFile[0].movie_title)



router.get("/", (req, res) => {
    return res.json(dataFile)
})

router.post('/', function(req, res){
    console.log(req.body)
    dataFile.push(req.body)
    res.send({message: "New movie created."})
})

router.delete('/:id', function(req, res) {
    var index = dataFile.map((movie) => {
        return movie.id
    }).indexOf(req.params.id)

    if(index === -1){
        console.log("Not found")
    }
    else{
        dataFile.splice(index, 1)
        res.send({message: "Movie id " + req.params.id + " removed"})
    }
})

module.exports = router;