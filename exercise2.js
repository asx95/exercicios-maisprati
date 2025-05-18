// Regras para a idade: 
// Infantil (0-12 anos)
// Adolescente (13-17 anos)
// Adulto (18-64 anos)  
// Idoso (65+ anos)
const prompt = require('prompt-sync')();

let age = Number(prompt("Informe sua idade: ")); 

if(!isNaN(age) && age >= 0) {
    if(age <= 12) {
        console.log(`A idade de ${age} anos é classificada como infantil`);
    }
    else if (age >= 13 && age <= 17) {
        console.log(`A idade de ${age} anos é classificada como adolescente`);
    }
    else if (age >= 18 && age <= 64) {
        console.log(`A idade de ${age} anos é classificada como adulto`);
    }
    else {
        console.log(`A idade de ${age} anos é classificada como idoso`);
    }
}
else {
    console.log("Digite apenas valores númericos a partir de 0");
}