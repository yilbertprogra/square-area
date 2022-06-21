const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(8000, () => {
    console.log('the server is running on http://localhost:8000')
})

