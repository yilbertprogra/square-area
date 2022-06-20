const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('ola de soludo no de mar');
})

app.listen(port, () => {
    console.log(`el server esta corriendo en ${port}`)
})