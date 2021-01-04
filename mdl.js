const express = require('express')
const app = express();

const mylogger= (req, res, next) => {
    console.log("myLogger executed");
    next();
}

app.use(mylogger);
app.get('/', (req, res) =>{
    console.log("hello Workd");
})

app.post('/', (req, res) =>{
    console.log("post req");
})

app.delete('/', (req, res) =>{
    console.log("delete req");
})
app.listen(3000);
