const express = require("express");
const app = express();
const port = 8000;

app.get('', (req, res) => {
    res.send(__dirname + 'index.html');
})

app.listen(port, () => {
    console.log(`el server esta corriendo en http://localhost:${port}`)
})