const express = require('express')
const path = require('path')
const Routers = require('./Routers.js')
const FileManager = require('./FileManager.js')
const dataFile = require('./api/movies.json')
const app = express()
const fileManager = new FileManager()
const route = new Routers(dataFile)
const PORT = process.env.PORT || 5000
app.use('/api', route.router)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.on('eventAPI', function(){
    fileManager.saveToFile(dataFile)
    return console.log("Movie API updated")
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });

route.get()
route.post(app, dataFile)
route.put(app, dataFile)
route.delete(app, dataFile)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
