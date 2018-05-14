const logic = {
    db: require ('./db.json'),
    validate: function (operation, item){
        let validated = {};
        if (operation == 'create' && item.type == 'user'){
            let i;
            for (i in this.db.user.data){
                let email = this.db.user.data[i].email;
                if (email == item.email){
                    validated.message = "Email already in use"
                    console.log(validated);
                    return validated;
                }
            }
        validated.newItem = item;
        validated.message = "Valid input";
        return validated;
        }
        if (operation == 'login'){
            let i;
            for (i in this.db.user.data){
                let email = this.db.user.data[i].email;
                let password = this.db.user.data[i].password;
                if (email == item[0]){
                    if (password == item[1]){
                        validated.user = this.db.user.data[i].id;
                        validated.message = "Login successful";
                    } else {
                        validated.message = "Invalid password";
                    }
                    console.log(validated);
                    return validated;
                } else {
                    validated.message = "Email not found";
                }
            }      
           // console.log(validated);
            return validated;
        }
    },
}

module.exports = logic;