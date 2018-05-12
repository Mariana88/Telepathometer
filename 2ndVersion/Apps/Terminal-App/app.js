let controller = require('../../Components/controller.js');

let terminal_input = process.argv.slice(2);
console.log(terminal_input)

let command = terminal_input[0];
let argArray = terminal_input.slice(1);
console.log(command);
console.log(argArray);

controller[command](argArray);

