'user strict';

const express = require('express');

//constants
const PORT = 443;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello world!');
});

//main
app.listen(PORT, HOST);
console.log('Running on https://${HOST}:${PORT}');

