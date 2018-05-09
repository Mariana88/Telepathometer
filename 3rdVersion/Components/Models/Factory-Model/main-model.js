let messages = require ('./factory-model.js')('telepathicMessage');

let telepathyEvent = require ('./factory-model.js')('telepathyEvent');
telepathyEvent.messages = {};
telepathyEvent.sourceUser = '';
telepathyEvent.targetUser =  '';
telepathyEvent.timeframe = '';

let users = require ('./factory-model.js')('user');
users.add = function (newUser){
    let user;
    for (user in this.DB){
     let email = this.DB[user].email;
     if (email == newUser.email) {
            return "Email already in use";
        }
    }
    newUser.id = this.nextId;
    this.DB[newUser.id] = newUser;
    this.nextId++;
};

console.log(messages);
console.log(users);
console.log(telepathyEvent);