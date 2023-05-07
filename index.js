require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT
app.use(express.static(__dirname + '/public'))

app.listen(port ,() => {
    console.log(`app listening on port ${port}`);
})