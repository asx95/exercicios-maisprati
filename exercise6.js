const prompt = require('prompt-sync')();

let sideA = Number(prompt("Informe o valor do Lado A: ")) 
let sideB = Number(prompt("Informe o valor do Lado B: "))
let sideC = Number(prompt("Informe o valor do Lado C: "))

const triangule = sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA
const isosceles = sideA === sideB || sideB === sideC || sideC === sideA 
const equilateral = sideA === sideB && sideB === sideC 

if(triangule) {
    if (equilateral) {
        console.log(`A: ${sideA}, B: ${sideB}, C: ${sideC} = Equilátero`);
    } 
    else if (isosceles) {
        console.log(`A: ${sideA}, B: ${sideB}, C: ${sideC} = Isósceles`);
    } 
    else {
        console.log(`A: ${sideA}, B: ${sideB}, C: ${sideC} = Escaleno`);
    }
}
else {
    console.log("Os valores não formam um triângulo")
}