let jsonfile = require('jsonfile');
let path = require('path');

const model = {
    reinitialize: function() {
        let db = {};
        db.user = {};
        db.user.nextId = 0;
        db.user.type = 'user';
        db.user.data = {};
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
    },
    user: function (type, firstName, lastName, email, password) {
            this.type = type;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
    },
    add: function (newItem) {
        let db = require('./db.json');
        let givenModel = db[newItem.type];
        givenModel.data[givenModel.nextId] = newItem;
        givenModel.data[givenModel.nextId].id = givenModel.nextId;
        givenModel.nextId++;
        db[newItem.type] = givenModel;
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
    },
    
    
    
/*    addUser: function (newUser){
        let user;
        for (user in this.users){
         let email = this.users[user].email;
         if (email == newUser.email) {
                return "Email already in use";
            }
        }
        newUser.id = this.nextId;
        this.users[newUser.id] = newUser;
        this.nextId++;
    },
    getUser: function (id){
        return this.users[id];
    },
    updateUser: function (user){
        this.users[user.id] = user;
    },
    deleteUser: function (user){
        delete this.users[user.id];
    } */
 }

 module.exports = model;