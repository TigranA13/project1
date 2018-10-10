const express =require('express');
const app = express();
const db = require('./db');

app.listen(8080, ()=>console.log('Server running ...'));

app.set('views', __dirname + '/frontend');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('index', {title:'LUXURY WATCH BRANDS'});
	res.end();
});

app.get('/brend1', (req, res)=>{
	res.render('brend1', {title:'Rolex/LUXURY WATCH BRANDS', db: db});
	res.end();
});

app.get('/brend2', (req, res)=>{
	res.render('brend2', {title:'Hublot/LUXURY WATCH BRANDS', db: db});
	res.end();
});

app.get('/brend3', (req, res)=>{
	res.render('brend3', {title:'Omega/LUXURY WATCH BRANDS', db: db});
	res.end();
});

app.get('/brend4', (req, res)=>{
	res.render('brend4', {title:'Cartier/LUXURY WATCH BRANDS', db: db});
	res.end();
});

app.get('/brend5', (req, res)=>{
	res.render('brend5', {title:'Bvlgari/LUXURY WATCH BRANDS', db: db});
	res.end();
});