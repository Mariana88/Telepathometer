let model = require('../../Components/model.js');
console.log(model)

let terminal_input = process.argv.slice(2);
console.log(terminal_input)
let command = terminal_input[0];
let argArray = terminal_input.slice(1);
let args = function (argArray) {
    let object = {};
    for (i=0; i<argArray.length; i+2){
        object.argArray[i] = argArray[i + 1];
    }
    return object;
};

console.log(model[command](...args));

console.log(model.read_all());