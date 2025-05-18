const prompt = require('prompt-sync')(); 

let number = Number(prompt("Digite um número: ")); 

if(!isNaN(number)) {
    if(number % 2 === 0) {
        console.log(`O número ${number} é par`);
    }
    else {
        console.log(`O número ${number} é ímpar`);
    }
}
else {
    console.log("Digite apenas valores númericos");
}