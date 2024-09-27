/*
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações.
 Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, 
 tem 1.83M de altura e pesa 74kg.
*/

let nome = prompt("Informe seu nome:")
let idade = parseInt(prompt("Informe sua idade:"))
let peso = parseInt(prompt("Informe seu peso:"))
let altura = parseFloat(prompt("Informe sua altura:"))
let profissao = prompt("informe sua profissão:")
const anoAtual = 2024;


console.log("Olá "+nome+", você tem "+idade+" Anos, é "+profissao+", tem "+altura+"M de altura e pesa "+peso+"Kg.")



//Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
    
} else {
    console.log("Sem gelada para você")
}

//Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias

const Ano = 365;
const Mes = 30;
const Semana = 7;

if(idade) {
    
    // Cálculo da idade em dias
    const idadeDias = idade * Ano;
    
    // Cálculo da idade em meses
    const idadeMeses = idade * 12;
    
    // Cálculo da idade em semanas
    const idadeSemanas = Math.floor(idade/ Semana); // Math.floor - arredondar valores para o menor número inteiro mais próximo
    // Exibindo os resultados
    console.log(`Idade em meses: ${idadeMeses}`);
    console.log(`Idade em semanas: ${idadeSemanas}`);
    console.log(`Idade em dias: ${idadeDias}`);
}


//Calculando o ano que a pessoa nasceu e o IMC

let anoNasc = 0
anoNasc = anoAtual - idade

let imc = peso / (altura * altura)

console.log("olá " + nome + ", você tem " + idade+ " anos, nasceu em " + anoNasc+", tem " + altura  + " de altura, pesa "+ peso + "Kg e seu IMC é " +imc+ "KG/m²")

if (imc < 18.5){

    console.log("Magreza, pois o resultado é menor que 18,5 kg/m2;")

}else if(imc > 18.5 && imc < 24.9){

    console.log("Normal, pois o resultado está entre 18,5 e 24,9 kg/m2;")

}else if(imc > 24.9 && imc < 30){

    console.log("Sobrepeso, pois o resultado está entre 24,9 e 30 kg/m2;")

}else if(imc > 30){

    console.log("Obesidade, pois o resultado é maior que 30 kg/m2.")

}


//Exibindo todos os anos que o usuário já viveu até o ano atual, informando a idade em cada ano.




for(let anosVividos = anoNasc; anosVividos <= anoAtual; anosVividos++){

 let result = anosVividos - anoNasc;

    console.log(+anosVividos+" - "+result+" Anos de Idade")
    
} 
// LOOP DO/WHILE

do{

let continuar = prompt("Deseja inserir os danos Novamente? (S/N)")

}while (continuar == "s");



   
