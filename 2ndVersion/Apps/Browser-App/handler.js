const handler = {
    controler: {},
    setup: function(){
        this.controller = require ('././Components/controller.js');
    },
    login: function() {
      let loginBtn = document.getElementById('login');
      loginBtn.addEventListener('click', function() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let input = [email, password];
        let user = controller.login(input);
        let display = document.getElementById("userName");
        display.value = user.firstName + user.lastName;
      });
    },
    register: function() {
        let registerBtn = document.getElementById('rgister');
        registerBtn.addEventListener('click', function() {
            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let input = ['user', fistName, lastName, email, password];
            let user = controller.create(input)
            let display = document.getElementById("userName");
            display.value = user.firstName + user.lastName;
        });
      }
  }