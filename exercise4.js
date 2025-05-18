const prompt = require('prompt-sync')();

console.log("Bem-vindo ao Banco Money")
console.log("* Selecione uma das opções abaixo para prosseguir: ")
console.log("1 - Acessar Conta")
console.log("2 - Verificar Saldo")
console.log("3 - Sair")
let option = Number(prompt("Informe sua opção: ")); 

switch(option) {
    case 1:
        console.log("Bem-vindo ao painel de acesso a conta")  
        let user = prompt("Informe seu usuário: ")
        let password = prompt("Informe sua senha: ")

        if(user === "jose" && password === "jose123") {
            console.log("Aguarde, estamos acessando a sua conta")
        }
        else {
            console.log("Dados incorreto, tente novamente")
        }
        break; 
    
    case 2:
        console.log("Bem-vindo ao painel de acesso a conta")
        let userBalance = prompt("Informe seu usuário: ")
        let passwordBalance = prompt("Informe sua senha: ")
        
        if(userBalance === "jose" && passwordBalance === "jose123") {
            console.log("Aguarde, estamos verificando o seu saldo")
        }
        else {
            console.log("Dados incorreto, tente novamente")
        }
        break;
    case 3:
        console.log("Saindo do sistema...")
        break;
    default:
        console.log("Digite apenas os valores númericos das opções informada"); 
        break;
    }
