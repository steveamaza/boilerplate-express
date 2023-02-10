require('dotenv').config();

let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile (__dirname + "/views/index.html");
});

app.use('/public', express.static('public'));

app.get('/json', (req, res) => {
    const myEnv = process.env.MESSAGE_STYLE;

    if (myEnv == "uppercase"){
        message = {"message":"HELLO JSON"};
    } else {
        message = {"message":"Hello json"};
    }
    res.json (message);
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get('/now', (req, res, next) => {
    // Middleware function 1
    console.log('Middleware function 1');
    next();
}, function(req, res){
    req.time = new Date().toString();
    console.log(req.time);
    res.json({time: req.time});
});
  
 module.exports = app;