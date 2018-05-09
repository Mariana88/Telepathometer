

let tressa = require('./tressa');
let userManagement = require('../model.js');

tressa.title("Adding a first user to the Model");
tressa.assert(
	0 === userManagement.nextId, 
	"nextId initialized to 0");
tressa.assert(
	userManagement.users['0'] === undefined,
	"users initialized to empty object");

let user = {firstName: 'Mariana', lastName: 'Casella', email: 'marianacasella@gmail.com', password: 'gatinha'};
userManagement.addUser (user);
tressa.assert(
	userManagement.users['0'].firstName == 'Mariana', 
	"firstName correctly stored");
tressa.assert(
	userManagement.users['0'].lastName == 'Casella', 
	"lastName correctly stored");
tressa.assert(
	userManagement.users['0'].email == 'marianacasella@gmail.com', 
	"email correctly stored");
tressa.assert(
	userManagement.users['0'].password == 'gatinha', 
	"firstName correctly stored");
tressa.assert(
		userManagement.users['0'].id === 0, 
		"id correctly set and stored");
tressa.assert(
	userManagement.nextId === 1, 
	"nextId correctly incremented");


tressa.title("Adding a subsequent new user to the Model");
tressa.assert(
	0 < userManagement.nextId, 
	"nextId previously incremented");
tressa.assert(
	userManagement.users['0'] !== undefined,
	"users object not empty");

user = {firstName: 'Dan', lastName: 'Devos', email: 'dan.devos@telenet.be', password: 'fox'};
userManagement.addUser (user);
tressa.assert(
	userManagement.users['1'].firstName == 'Dan', 
	"firstName correctly stored");
tressa.assert(
	userManagement.users['1'].lastName == 'Devos', 
	"lastName correctly stored");
tressa.assert(
	userManagement.users['1'].email == 'dan.devos@telenet.be', 
	"email correctly stored");
tressa.assert(
	userManagement.users['1'].password == 'fox', 
	"firstName correctly stored");
tressa.assert(
		userManagement.users['1'].id === 1, 
		"id correctly set and stored");
tressa.assert(
	userManagement.nextId === 2, 
	"nextId correctly incremented");


tressa.title("Attempting to add user with same email");
user = {firstName: 'Fake Mariana', lastName: 'Casella', email: 'marianacasella@gmail.com', password: 'gatinha'};
	tressa.assert(
		userManagement.addUser (user) == 'Email already in use', 
		"alert for pre-existing email");

/* example from Evan on how to combine libraries
	var proclaimed = proclaim.deepEqual(userManagement.read(0), {...} )
	tressa.assert(
		proclaimed === true, 
		"nextId correctly incremented");*/





