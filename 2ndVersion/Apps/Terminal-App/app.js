let model = require('../../Components/model.js');
// console.log(model)

let terminal_input = process.argv.slice(2);
// console.log(terminal_input)
let command = terminal_input[0];
let argArray = terminal_input.slice(1);
// function createObject (argArray) {
//     let object = {};
//     for (i=0; i<argArray.length; i+2){
//         object[argArray[i]] = argArray[i + 1];
//     }
//     return object;
// };
// let args = createObject(argArray);
console.log(argArray);

model[command](argArray);

// console.log (args);
// console.log(model[command](args));

console.log(model.read_all());