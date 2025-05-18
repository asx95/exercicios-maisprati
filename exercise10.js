const prompt = require('prompt-sync')();

let number = Number(prompt("Digite um número: "))

for (i = 1; i < 11; i++) {
    console.log(`${i}: ${number}`)
}