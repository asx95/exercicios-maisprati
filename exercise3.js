// Média >= 6.00 - Aprovado
// Média == 5.00 - Recuperação
// Média <= 4.00 - Reprovado
const prompt = require('prompt-sync')();

let score = Number(prompt("Informe sua nota: ")); 

if(!isNaN(score) && score >= 0) {
    if (score >= 6.00) {
        console.log(`Parabéns, você está aprovado com a nota ${score}!`);
    }
    else if(score >= 5.00) {
        console.log(`Você está em recuperação atingindo a nota ${score}`);
    }
    else {
        console.log(`Você foi reprovado pois sua nota foi ${score}`);
    }
}
else {
    console.log("Digite apenas valores númericos e sua nota a partir de 0.0");
}