let controller = require('../../Components/controller.js');

let terminal_input = process.argv.slice(2);

let command = terminal_input[0];
let argArray = terminal_input.slice(1);
let args;
if (argArray[0] !== undefined){
   args = argArray;
}
console.log(command);
console.log(args);

controller[command](args);

