let jsonfile = require('jsonfile');
let path = require('path');

const model = {
    reinitialize: function() {
        let db = {};
        db.users = {};
        db.users.nextId = 0;
        db.users.type = 'users';
        db.users.data = {};
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
    },
    add: function(new_array) {
        let newItem = {};
        newItem.name = new_array[0];
        newItem.type = new_array[1];
        let db = require('./db.json');
        let givenModel = db[newItem.type];
        givenModel.data[givenModel.nextId] = newItem;
        givenModel.data[givenModel.nextId].id = givenModel.nextId;
        givenModel.nextId++;
        db[newItem.type] = givenModel;
        jsonfile.writeFileSync(path.join(__dirname, '../db.json'), db)
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