const prompt = require('prompt-sync')();

let appleAmount = Number(prompt("Quantas maçãs você gostaria de comprar? "))
 
const calcThirty = (appleAmount * 0.30).toFixed(2)
const calcTwentyFive = (appleAmount * 0.25).toFixed(2)

if(!isNaN(appleAmount) && appleAmount >= 1 && appleAmount <= 12) {
    console.log(`Valor para ${appleAmount} maçãs custando R$ 0,30 cada unidade. Total: R$ ${calcThirty}`)
} 
else if (!isNaN(appleAmount) && appleAmount > 12) {
    console.log(`Valor para ${appleAmount} maçãs custando R$ 0,25 cada unidade. Total: R$ ${calcTwentyFive}`)
}
else {
    console.log("Digite apenas valores númericos ou a partir de 1 unidade do produto")
}