const logic = {
    db: require ('./db.json'),
    validate: function (operation, item){
        let validated = {};
        if (operation == 'create' && item.type == 'user'){
            for (i in this.db.user.data){
                let email = this.db.user.data.email;
                if (email == item.email){
                    validated.message = "Email already in use"
                    return validated;
                }
            }
        validated.newItem = item;
        validated.message = "Valid input";
        return validated;
        }
    },
}

module.exports = logic;