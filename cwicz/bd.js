const users = [ 
	{ id: 1
	, imie: 'Marek'
	, schoolId: 12
	} 
	,
	{ id: 2
	, imie: 'Tomek'
	, schoolId: 12
	}
	,
	{ id: 3
	, imie: 'Marta'
	, schoolId: 30
	}
];

const grades = [
	{ id: 1
	, schoolId: 12
	, grade: 3.5
	, disc: 'math'
	}
	,
	{ id: 2
	, schoolId: 30
	, grade: 4.5
	, disc: 'math'
	}
	,
	{ id: 3
	, schoolId: 30
	, grade: 5
	, disc: 'math'
	}
];

const getUser = (id) => {
	return new Promise( (resolve, reject) => {
		let user = users.find( (user) => user.id == id );	
		if (user) resolve(user.imie);
		else reject(new Error('nie ma osoby o takim id'));
	});
};

getUser(1).then((user) => {
		console.log(user);
	}, (err) => {
		console.log("error: " + err.message);
	}
);


const getGrades = (schoolId) => {
	return new Promise( (resolve, reject) => {
		let grade = grades.filter( (grade) => grade.schoolId == schoolId );	
		if (grade) resolve(grade);
		else reject(new Error('nie ma ocen o takim id'));
	});
};


getGrades(30).then(
	(grades) => {
		let avg = 0;
		let n=0;
		for (i=0; i<grades.length; i++)
		{
			avg += grades[i].grade;
			n=i+1;
		}
		console.log('srednia: ' + avg/n);
	}, 
	(err) => {
		console.log("error: " + err.message);
	}
);



