const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const appsController = require('./controllers/appsController');
const categoriesController = require('./controllers/categoriesController');

app.post('/filter/apps', (req, res) => { appsController.handleFilter(req, res) });

app.get('/categories', (req, res) => { categoriesController.getCategories(req, res) })


app.listen(port, () => 
{
	console.log('app is running on port '+port);
});

console.log("hello");