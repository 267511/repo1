const yargs = require('yargs');
const api1 = require('./api1p.js');
const api2 = require('./api2p.js');
const api3 = require('./api3p.js');


var argv = yargs
	.option('osoba', {
	        alias : 'o',
		 	demandOption: true,
	        describe: 'imię i nazwisko szukanej osoby',
	        type: 'string'
	   	 })

	.help()
	.argv;


var imie = argv.o;


api1.getapi(imie).then( 
	(tab) => {
		console.log();		
		console.log('id: ' + tab[0]); 
		console.log();

		api2.getapi(tab[0], tab[1]).then(
			(tab2) => { 
				console.log();
				api3.getapi(tab2[0], tab2[1], tab2[2]).then( 
					null,
					(err) => {
						console.log('error3: '); 
						console.log(err.message);
					}
				);
			}
			,
			(err) => {
				console.log("error2: " + err.message);
			}
		);
		api1.server.close();
	}
	,
	(err) => {
		console.log("error1: " + err.message);
		api1.server.close();
	}
);







