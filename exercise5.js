const prompt = require('prompt-sync')();

console.log("*** Calculadora de Índice de Massa Corporal (IMC) ***")
let weight = Number(prompt("Qual é o seu peso (kg): ")) 
let height = Number(prompt("Qual é a sua altura: ")) 

const imc =  (weight / height ** 2).toFixed(2)

if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc} e você está abaixo do peso`)    
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é de ${imc} e você está com o peso normal`)    
}
else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`Seu IMC é de ${imc} e você está com sobrepeso`)    
}
else {
    console.log(`Seu IMC é de ${imc} e você está com obesidade`)    
}