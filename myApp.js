require('dotenv').config();
require('body-parser');

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile (__dirname + "/views/index.html");
});

app.use('/public', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.route('/name').get((req, res) => {
    let firstname = req.query.first;
    let lastname = req.query.last;
    res.json({ name: `${firstname} ${lastname}`});
}).post((req,res) => {
    //handle post requests here
    let firstname = req.body.first;
    let lastname = req.body.last;
    res.json({ name: `${firstname} ${lastname}`});
});
  
 module.exports = app;git 