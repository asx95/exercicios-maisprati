const prompt = require('prompt-sync')();

let n = Number(prompt("Digite um número para calcular o Fibonacci: "))

function fibonacci(n) {
    let fibo = [0, 1]

    for(let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2] 
    } 
    
    return fibo.slice(0, n)
}

console.log(fibonacci(n));

