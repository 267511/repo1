/*
const getStatusAwait = async(userId) => {
	return 'Halo';
};

const getStatusAwait = (userId) => {
	return 'Halo';
};

console.log(getStatusAwait(1));
*/

const getStatusAwait = async(userId) => {
	//return 'Halo';

	throw new Error('Error');
};

getStatusAwait(1).then( 
	(text) => { console.log(text); }
	, (err) => { console.log(err.message); } 
);
