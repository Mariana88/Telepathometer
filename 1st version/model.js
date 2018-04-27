const userManagement = {
   let users = {};
   let nextId = 0;
   function addUser (user){
       user.id = this.nextId;
       this.users.nextId = user;
       nextId++
   }
   function updateUser (user){
       this.users[user.id] = user;
   }
   function deleteUser (user){
       delete this.users[user.id];
   }
}

let Users = function (firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

function logIn (email, password){
    let activeUser;
    for (user in userManagement.users){
        if (email == email && password == password){
           return  activeUser = user.id;
        } else {
            return "User not found"
        }
    }
}

function changeFirstName (id, firstName){
    userManagement.users[id].firstName = firstName;
}

function changeLastName (id, lastName){
    userManagement.users[id].lastName = lastName;
}

function changeEmail (id, email){
    userManagement.users[id].email = email;
}



