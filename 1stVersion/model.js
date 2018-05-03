const userManagement = {
   users: {},
   nextId: 0,
   addUser: function (newUser){
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
   }
}

let User = function (firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

function logIn (tryEmail, tryPassword){
    let activeUserId;
    let email;
    let password;
    let id;
    let user;
    for (user in userManagement.users){
        email = userManagement.users[user].email;
        password = userManagement.users[user].password;
        id = userManagement.users[user].id;
        if (email == tryEmail && password == tryPassword){
           return  activeUserId = id;
        } else {
            return "User not found"
        }
    }
}

function changeFirstName (id, firstName){
    let updatedUser = userManagement.getUser(id);
    updatedUser.firstName = firstName;
    return updatedUser;
}

function changeLastName (id, lastName){
    let updatedUser = userManagement.getUser(id);
    updatedUser.lastName = lastName;
    return updatedUser;
}

function changeEmail (id, email){
    let updatedUser = userManagement.getUser(id);
    updatedUser.email = email;
    return updatedUser;
}

function changePassword (id, password){
    let updatedUser = userManagement.getUser(id);
    updatedUser.password = password;
    return updatedUser;
}

module.exports = userManagement;

