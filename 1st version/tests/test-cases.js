tests({

  // Fill this in with your test cases

 /* PythonTutor Testing scripts

1) create a user + addUsers

1.1) Create 1st user

let Mariana88 = new User ('Mariana', 'Casella dos Santos', 'marianacasella@gmail.com', 'gatinha');
userManagement.addUser (Mariana88);
console.log (userManagement.users);

expects: {0: {firstName: 'Mariana', lastName: 'Casella dos Santos', email: 'marianacasella@gmail.com', password: 'gatinha', id: '0'}}

1.2) Create multiple users (requires 1.1)

let DanDevos = new User ('Dan', 'Devos', 'dan.devos@telenet.be', 'fox');
userManagement.addUser (DanDevos);
console.log (userManagement.users);

expects: {0: {firstName: 'Mariana', lastName: 'Casella dos Santos', email: 'marianacasella@gmail.com', password: 'gatinha', id: '0'},
1: {firstName: 'Dan', lastName: 'Devos', email: 'dan.devos@telenet.be', password: 'fox', id: '1'}}

2) Already registered email (requires 1.1)

let fakeMariana = new User ('mariana', 'casella', 'marianacasella@gmail.com', 'falsa');
console.log (userManagement.addUser (fakeMariana));

expects: "Email already in use"

3) LogIn + getUser

3.1) Successful logIn (requires 1.1)

let activeUserId = (logIn ('marianacasella@gmail.com', 'gatinha'));
console.log (activeUserId);

expects: '0'

3.2) Unsuccessful login due to wrong password (requires 1.1)

console.log (logIn ('marianacasella@gmail.com', 'gatona'));

expects: 'User not found'

3.3) getUser after logIn (requires 3.1)

console.log (userManagement.getUser(logIn('marianacasella@gmail.com', 'gatinha')));

expects: {firstName: 'Mariana', lastName: 'Casella dos Santos', email: 'marianacasella@gmail.com', password: 'gatinha', id: '0'}

4) Update user

4.1) Change first name (requires 3.1)

userManagement.updateUser(changeFirstName(activeUserId, 'Alexandra'));
console.log(userManagement.getUser(activeUserId));

expects: {firstName: 'Alexandra', lastName: 'Casella dos Santos', email: 'marianacasella@gmail.com', password: 'gatinha', id: '0'}

4.2) Change last name (requires 3.1)

userManagement.updateUser(changeLastName(activeUserId, 'Castillo'));
console.log(userManagement.getUser(activeUserId));

expects: {firstName: 'Mariana', lastName: 'Castillo', email: 'marianacasella@gmail.com', password: 'gatinha', id: '0'}

4.3) Change email (requires 3.1)

userManagement.updateUser(changeEmail(activeUserId, 'alexa.castillo@gmail.com'));
console.log(userManagement.getUser(activeUserId));

expects: {firstName: 'Mariana', lastName: 'Casella dos Santos', email: 'alexa.castillo@gmail.com', password: 'gatinha', id: '0'}

4.4) Change password (requires 3.1)

userManagement.updateUser(changeEmail(activeUserId, 'gatona'));
console.log(userManagement.getUser(activeUserId));

expects: {firstName: 'Mariana', lastName: 'Casella dos Santos', email: 'marianacasella@gmail.com', password: 'gatona', id: '0'}


*/
 
 
 
  'Basic': function() {
    eq("", functionName(arg1, arg2, argN));
  },


});