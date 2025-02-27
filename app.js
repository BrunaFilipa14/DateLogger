const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const PORT = 3000; 


const app = express();
app.set(`view engine`, `ejs`);

app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/trips', (req, res) => {
    res.render('trips');
});
app.get('/dates', (req, res) => {
    res.render('dates');
});
app.get('/trips-planning', (req, res) => {
    res.render('trips-planning');
});


app.listen(PORT, function() {     
    console.log(`Aberto em http://localhost:` + PORT)
});