
// Nesnelere Method eklemek

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

// obje içine öethod tanımlanabilir.this bu olarak geçer ve ilgili obje içindeki key i kullanabiliriz.

//Arrow function

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
	},
};
console.log(person.introduce());