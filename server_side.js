const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/html'));

app.use(function(req, res, next) {
	const time = new Date().toString();
	const log1 = `${time}: ${req.method}: ${req.url} \n`;

	fs.appendFile('logs',log1, (err) => {
		if (err){
			console.log(err);
		}
		else{
			console.log('zapisano log');
		}
	});	
	next()
});


app.get('/', (req, res) => {
	res.render('client_side.hbs', {
		nowYear: new Date().getFullYear()
	});
});


let port = 3000;
let server = app.listen(port, () => {
	console.log('server is running on port ' + port);// ${port}`);
});
