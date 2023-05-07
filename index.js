const express = require('express');
const app = express();
const port = 4000
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

app.use(express.static(__dirname + '/public'))

app.listen(port ,() => {
    console.log(`app listening on port ${port}`);
})