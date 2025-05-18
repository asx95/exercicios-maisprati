const prompt = require('prompt-sync')();

let n = Number(prompt("Digite um número para calcular o fatorial: "))

function factorial(n) {
    let result = 1
    for(let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(n));


