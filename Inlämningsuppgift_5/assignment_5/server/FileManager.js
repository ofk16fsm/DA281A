const fs = require('fs')

module.exports = class FileManager{
    constructor(){

    }

    saveToFile(dataFile){
        fs.writeFile("./server/api/movies.json", JSON.stringify(dataFile, null, 2), 'utf-8', function(err){
            if(err){
                console.log("An error occured while writing JSON object to file")
            }
            console.log("JSON file has been saved")
        })
    }
}