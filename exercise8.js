const prompt = require('prompt-sync')();

let option = true

while (option) {
    let value = Number(prompt("Informe o 1º valor: "))
    let value2 = Number(prompt("Informe o 2º valor: "))    


    if(value !== value2) {
        value < value2 ? console.log(`${value}, ${value2}`) : console.log(`${value2}, ${value}`)
        option = false; 
    }
    else {
        console.log("Os valores devem ser diferentes. Tente novamente\n")
    }
}
