const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

//const MongoClient = require('mongodb').MongoClient;

app.listen(port, () => {
	console.log('app is running on port '+port);
});

console.log("hello");