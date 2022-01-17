import express from 'express'
import Routers from './Routers.js'
import FileManager from './FileManager.js'

class Index{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000  
        this.routers = new Routers()        
        this.routers.get()
    }

    uses(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use('/api', this.routers.router)
    }

    events(){
        this.app.on('eventAPI', function(){
            FileManager().saveToFile(movies)
        })
    }

    listens(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on ${this.port}`)
        })
    }
}

var index = new Index()
index.app
index.port

index.uses()
index.listens()