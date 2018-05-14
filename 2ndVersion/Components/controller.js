const controller = {
    model: require('./model.js'),
    logic: require('./logic.js'),
    reinitialize: function(){
        this.model.reinitialize();
    },
    create: function(input){
        let type = input[0];
        let newItem;
        if (this.model.hasOwnProperty(type)){
            newItem = new this.model[type] (...input);
        } else {
            return "Type not supported";
        }
        let validated = this.logic.validate('create', newItem);
        if (validated.newItem) {
            this.model.add (validated.newItem);
        }
        return validated;
    },
    update: function(input){
        this.model.update(input);
    },
    delete: function(input){
        this.model.delete(input);
    },
    login: function(input){
        let validated = this.logic.validate('login', input);
        if (validated.hasOwnProperty('user')){
            let inputArr = ['user', validated.user]
            let  user = this.model.getItem(inputArr);
            console.log(user);
            return user;
        } else {
            return validated.message ; 
        }
    }
}

module.exports = controller;