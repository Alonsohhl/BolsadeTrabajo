var express = require('express')
    path = require('path'),//para manejar cadenas con el path
    bodyParser = require('body-parser') //para parsear el parametro body que enviaremos
    expressValidator = require('express-validator');
    ;

const app = express();
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
const BTRoutes = require('./app/routes/appRoutes');
app.use('/', BTRoutes);
app.use(express.static(path.join(__dirname, 'public')));


// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
/*
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
})

app.post('/', urlencodedParser, function (req, res) {
    //if (!req.body) return res.sendStatus(400)
    //res.send('welcome, ' + req.body.username)
    res.send('welcome, ')
})

app.get('/', function (req, res) {
    //if (!req.body) return res.sendStatus(400)
    //res.send('welcome, ' + req.body.username)
    res.send('welcomes, ')
})
*/
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});