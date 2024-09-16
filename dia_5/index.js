//CRIANDO VARIÁVEL
let posto = prompt("Digite o que deseja realizar ( Abastecer com Gasolina / Alcool ou Calibrar os pneus)")

//CRIANDO SWITCHCASE
switch(posto){
   case "Gasolina":
        let valor1 = parseInt(prompt("Qual valor deseja abastecer?"))
           resultado1 = valor1 / 5 
             console.log("Foi abastecido " + resultado1 + " Litro(s) de " + posto +"" )
        break;

    case "Alcool":
        let valor2 = parseInt(prompt("Qual valor deseja abastecer?"))
           resultado2 = valor2 / 3 
             console.log("Foi abastecido " + resultado2 + " Litro(s) de " + posto +"" )
        break;   

    case "Calibrar":
             console.log("Pneus Calibrados Com sucesso!")
         break;
}