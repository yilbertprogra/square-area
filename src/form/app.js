const express = require("express");
const app = express();
const port = 8000;

// app.get('/', (req, res) => {
//     res.send('got a PUT request at / user');
// })



app.listen(port, () => {
    console.log(`el server esta corriendo en http://localhost:${port}`)
})