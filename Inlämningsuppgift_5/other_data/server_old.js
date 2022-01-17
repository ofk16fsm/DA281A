const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const port = 9000
const app = express();
app.use(express.static(path.join(__dirname, '/')));


app.listen(port, () => console.log(`Listening the port ${port}`));

app.get('/api', function (req, res) {
  res.sendFile(path.join(__dirname, '/api', 'movies.json'));
});
