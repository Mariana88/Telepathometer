const controller = {
    model: require('./model.js'),
    logic: require('./logic.js'),
    reinitialize: function(){
        this.model.reinitialize;
    },
    create: function(input){
        let type = input[0];
        let newItem;
        if (this.model.hasOwnProperty(type)){
            newItem = new this.model[type] (...input);
        } else {
            return "Type not supported";
        }
        console.log(newItem);
        let validated = this.logic.validate('create', newItem);
        if (validated.newItem) {
            this.model.add (validated.newItem);
        }
        return validated.message;
    },
   /* update: function(){

    },
    delete: function(){

    },
    login: function(){

    },*/

}

module.exports = controller;