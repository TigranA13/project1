const express =require('express');
const app = express();
const db = require('./db');

app.listen(8080, ()=>console.log('Server running ...'));

app.set('views', __dirname + '/frontend');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('index', {title:'index'});
	res.end();
});

app.get('/brend1', (req, res)=>{
	res.render('brend1', {title:'Rolex', db: db});
	res.end();
});

app.get('/brend2', (req, res)=>{
	res.render('brend2', {title:'brend2', db: db});
	res.end();
});