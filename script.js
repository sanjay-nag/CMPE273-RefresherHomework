/* 
//Functions

//Legend: S - Sa, R - Ri, G - Ga, M - Ma, P - Pa, D - Da, N - Ni 
const MohanaRaga = 'S R2 G3 P D2 S';
const NatakaPriyaRaga = 'S R1 G2 M1 P D2 N2 S';
const ChalaNataRaga = 'S R3 G3 M1 P D3 N3 S';

const isShuddhaMadhyamaRaga = (raga) => {
	raga.includes('M1') ? console.log(`${raga} is a shuddha madhyama raga`) : console.log(`${raga} is NOT a shuddha madhyama raga`);
}

isShuddhaMadhyamaRaga(MohanaRaga);
isShuddhaMadhyamaRaga(NatakaPriyaRaga);
isShuddhaMadhyamaRaga(ChalaNataRaga);
*/



/*
//Events

document.querySelector('.mouse-click').addEventListener('click', () => {
	document.getElementById('mouse-click-output').innerHTML = '<em>Mohana is a pentatonic scale in Carnatic Classical Music. It is one if the very popular scales. It is extensively used in cinema music as well. The Hindustani parallel to it is know as Raag Bhoop.</em>';
});

document.querySelector('.mouse-hover').addEventListener('mouseover', () => {
	document.getElementById('mouse-hover-output').innerHTML = '<em>Mohana is a heptatonic scale in Carnatic Classical Music. There are a lot of compositions in this scale. The Hindustani parallel to it is know as Raag Yaman.</em>';
});

document.querySelector('.mouse-hover').addEventListener('mouseout', ()  => {
	document.getElementById('mouse-hover-output').innerHTML = '';
});

document.querySelector('.key-copy').addEventListener('copy', ()  => {
	document.getElementById('key-copy-output').innerHTML = '<b>Plagiarism alert!!</b>';
});
*/



/*
//Arrays

const ragas = ['Megharanjani', 'Manoranjani', 'Kalyani', 'Chittaranjani', 'Mohana', 'Sivaranjani'];

ragas.forEach(raga => {
	if(raga.includes('ranjani')) {
		console.log(raga);
	}
});
*/



/*
//Regular Expression

const raga = 'Megharanjani belongs to a family of Ranjani ragas';
const ranjaniRagasRegEx = new RegExp('ranjani', 'gi');

while((array = ranjaniRagasRegEx.exec(raga)) !== null) {
console.log(`\'${array[0]}\' found at position ${parseInt(array.index)+1}`)
}
*/



/*
//Strict mode

myFriendsName = 'Ashok';
console.log(`My friend\'s name: ${myFriendsName}`);
(() => {
	// 'use strict';
	myName = 'Sanjay';
	console.log(`My name: ${myName}`);
})();
*/



/*
//Error

const getItemDetailByItemId = itemId => {
	return new Promise((resolve, reject) => {
		setTimeout(itemId => {
			reject(`No matching Item for ItemId: ${itemId}`)
		}, 2000, itemId);
	});
}

const itemId = 'AWEQ88899912';

getItemDetailByItemId(itemId).then(itemDetals => {
	console.log(`ItemDetails: ${itemDetals}`);
}).catch(error => {
	console.log(`Error occurred: ${error}`);
});
*/



/*
//Default Parameters

function Nagas(
	firstName,
	yearOfBirth,
	lastName = 'Nag',
	nationality = 'Indian'
) {
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}

var sanjay = new Nagas('Sanjay', 1993);
var abhay = new Nagas('Abhay', 1996, 'Rangan', 'American');

console.log(sanjay);
console.log(abhay);
*/



/*
//includes() and typeof()

const yearOfBirth = [2009, 2017, 1993, 1999];
const age = [];

const calculateAge = () => {
	for(let element of yearOfBirth) {
		if(typeof(element) === 'number') {
			age.push(new Date().getFullYear() - element);
		}
	}
}
calculateAge();
console.log(age);

if(yearOfBirth.includes(1993)) {
	console.log(`The array has 1993`);
} else {
	console.log(`The array doesn't has 1993`);
}
*/



/*
//require() and export()

var dishes = require('./dishes');

dishes.makePizza();

console.log(`My favourite dish is ${dishes.favDish}`);
*/



/*
//Type conversions

const typeConversions = () => {
	console.log('5'+2);

	//Convert number to string
	const pi = 3.14;
	console.log(typeof(String(pi)));
	
	//Convert string to number
	const year = '1993';
	console.log(typeof(parseInt(year)));
}

typeConversions();
*/



/*
//JSON

const personJson = [];
let firstName, lastName, yearOfBirth;

const n = prompt('Enter the number of persons you are going to enter');

for(let i = 0; i < n; i++) {
	firstName = prompt('Enter the first name of person '+ (i+1));
	lastName = prompt('Enter the last name of person '+ (i+1));
	yearOfBirth = prompt('Enter the year of birth of person '+ (i+1));

	var person = {
		'FirstName': firstName,
		'LastName': lastName,
		'YearOfBirth': yearOfBirth
	}
	personJson.push(person);
}

console.log(personJson);
*/



/*
//Classes

class Person {

	constructor(firstName, lastName, yearOfBirth) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.yearOfBirth = yearOfBirth;
	}

	calculateAge() {
		console.log(`${new Date().getFullYear() - this.yearOfBirth}`);
	}
}


let sanjay = new Person('Sanjay', 'Nag', 1993);
sanjay.calculateAge();

let abhay = new Person('Abhay', 'Rangan', 1995);
abhay.calculateAge();

let vishnu = new Person('Vishnu', 'Vardhana', 1994);
vishnu.calculateAge();
*/



/*
//Object.assign()

let firstName = {FirstName: 'Sanjay'};
let lastName = {LastName: 'Nag'};
let yearOfBirth = {YearOfBirth: 1993};

const sanjay = Object.assign(firstName, lastName, yearOfBirth);

console.log(sanjay);
*/


/*
//Static methods

class Person {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	static greet() {
		console.log('Hey there!');
	}
}
const sanjay = new Person('Sanjay', 1993, 'Student');
Person.greet();
*/



/*
//Inheritance using sub-classes

class Person {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
}

class Artist extends Person {
	constructor(name, yearOfBirth, job, noOfAlbums, noOfGrammys) {
		super(name, yearOfBirth, job);
		this.noOfAlbums = noOfAlbums;
		this.noOfGrammys = noOfGrammys;
	}

	wonGrammy() {
		this.noOfGrammys++;
		console.log(this.noOfGrammys);
	}
}

const sanjay = new Artist('Sanjay', 1993, 'Carnatic Vocalist', 10, 5);

sanjay.calculateAge();
sanjay.wonGrammy();
*/



/*
//Method overriding

class Person {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}
	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}
	doSomething() {
		console.log('Doing something.....');
	}
}

class Artist extends Person {
	constructor(name, yearOfBirth, job, noOfAlbums, noOfGrammys) {
		super(name, yearOfBirth, job);
		this.noOfAlbums = noOfAlbums;
		this.noOfGrammys = noOfGrammys;
	}
	wonGrammy() {
		this.noOfGrammys++;
		console.log(this.noOfGrammys);
	}
	doSomething() {
		console.log('Practicing music.....');
	}
}

const sanjay = new Artist('Sanjay', 1993, 'Carnatic Vocalist', 10, 5);

sanjay.doSomething();
*/



/*
//get

const readline = require('readline');
const readLineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

class Meal {
	constructor(fatIntake, carbohydrateIntake) {
		this.fatIntake = fatIntake;
		this.carbohydrateIntake = carbohydrateIntake;
	}
	get calorieIntake() {
		return (this.fatIntake + this.carbohydrateIntake) * (5/2);
	}
	get mealSummary() {
		console.log(`Fat intake: ${this.fatIntake}, Carb intake: ${this.carbohydrateIntake} : Total calorie intake: ${this.calorieIntake}`);
	}
}

let breakfast = new Meal(2,2);
breakfast.mealSummary;

console.log('Update new calorie intake');
readLineInterface.on('line', (input) => {
	breakfast.fatIntake = parseInt(input);
	console.log('The updated fat intake:');
	breakfast.mealSummary;
	readLineInterface.close();
});
*/



/*
//fetch

function getWeather(whereOnEarthId) {
	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${whereOnEarthId}/`)
	.then(result => {
		return result.json();
	})
	.then(data => {
		const today = data.consolidated_weather[0];
		console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
	})
	.catch(error => {
		console.log(error);
	});
}

//San Francisco
getWeather(2487956);
//London
getWeather(44418);
*/




//Local Storage

document.getElementById('myFrame').addEventListener('load', () => {
	if (typeof (Storage) !== 'undefined') {
		if (localStorage.lastVisit3) {
			document.getElementById('last-visit').innerHTML = 'Your last visit: ' + localStorage.lastVisit3.slice(0, 24);
		} else {
			document.getElementById('last-visit').innerHTML = 'Seems you\'re a first time visitor';
		}
		localStorage.lastVisit3 = new Date();
	} else {
		document.getElementById('last-visit').innerHTML = 'Sorry, your browser does not support web storage...';
	}
});
































