var express = require('express');
var app = express()

app.set('view engine','ejs')
app.set('views', 'PortfolioWeb')

app.use(express.static('PortfolioWeb'))

app.get('/', function(req, res){
    res.render('index')
});

app.get('/about', function(req, res){
    res.render('about')
});

app.get('/contact', function(req, res){
    res.render('contact')
});

app.listen(3000)