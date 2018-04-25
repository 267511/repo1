function add(a, b){
	return new Promise( (resolve, reject) => {
		resolve(console.log(a+b));	
	});
}

function div(a, b){
	return new Promise( (resolve, reject) => {
		if (b==0) 
			reject(new Error('(' + a + ', ' + b + "): cannot divide by zero"));
		else
			resolve(console.log(a + '/' + b + '=' + a/b));	
	});
}
/*
add(1,3).then( () => {
		console.log("adding completed");
	}, (err) => {
		console.log("error: " + err.message);
	}
);
*/
div(1,5).then( () => {
		console.log("dividing completed");
	}, (err) => {
		console.log("error: " + err.message);
	}
);

div(1,0).then( () => {
		console.log("dividing completed");
	}, (err) => {
		console.log("error: " + err.message);
	}
);
