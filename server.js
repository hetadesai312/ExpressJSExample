const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

let eObj = {
    eNo : 1001,
    eName : 'Heta'
}

let pObj = {
    pNo : 100,
    pName : 'Apple'
}
app.set('view engine', 'hbs');
app.get('/', (req, res) =>{
    //res.send("Hello World!");
    res.render('about.hbs',eObj);
})
app.get('/edata', (req,res) => {
    res.send(eObj);
})
app.get('/edata/:eId', (req,res) => {
    res.send(req.params);
})
app.get('/pdata', (req,res) => {
    res.send(pObj);
})
app.listen(port,  () => {
    console.log(`Listing on port "+ ${port}`);
})