const prompt = require('prompt-sync')();

let sum = 0; 
let number = null; 
let counter = null; 

while(number != 0) {
    number = parseFloat(prompt("Digite um número decimal: "))
    sum+=number
    counter++
}

console.log(`Quantidade de Números Inputados: ${counter - 1} \nMédia Total: ${sum / (counter - 1)}`)