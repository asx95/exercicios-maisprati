const prompt = require('prompt-sync')();

let counter = 0;

for (i = 1; i < 6; i++) {
    let number = Number(prompt(`Digite o ${i}º valor: `))
    counter+=number
}

console.log(`Total: ${counter}`)