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
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
    },
    update: function (input){
        let db = require('./db.json');
        let i;
        for (i=2; i<input.length; i=i+2){
            db[input[0]].data[input[1]][input[i]] = input[i + 1];
        }
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
    },
    delete: function (input){
        let db = require('./db.json');
        delete db[input[0]].data[input[1]];
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
    },
    getItem: function (input){
        let db = require('./db.json');
        let user = db[input[0]].data[input[1]];
        return user;
    },
    getAll: function (input){
        let db = require('./db.json');
        let items = db[input].data;
        return items;
    },
 }

 module.exports = model;