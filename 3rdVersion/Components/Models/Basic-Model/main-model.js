let messages = require ('./basic-model.js');
messages.type = 'telepathicMessage';

let telepathyEvent = require ('./basic-model.js');
telepathyEvent.messages = {};
telepathyEvent.sourceUser = '';
telepathyEvent.targetUser =  '';
telepathyEvent.timeframe = '';

let users = require ('./basic-model.js');
users.type = 'user';
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