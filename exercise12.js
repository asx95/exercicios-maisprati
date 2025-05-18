const prompt = require('prompt-sync')();

let number = Number(prompt("Digite o número para calcular a tabuada: "))

for (i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ` + number * i)
}