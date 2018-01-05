// Global imports
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;

var app = express();

// Static files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/static/assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit',(req, res) => {
    // Got the request.
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'simpleparadox1997@gmail.com',
            pass: 'iwillbetheceoofgoogleoneday'
        }
    });
    var options = {
        from: req.body.email,
        to: 'rohansaha60@gmail.com',
        subject: `Mail from your website by ${req.body.name}`,
        text: req.body.message + `\nMy email is ${req.body.email}`
    };
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    });
    res.send(200);
});

app.listen(port);
