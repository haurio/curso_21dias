let condicao = true
contador = 0
mediageral = 0
homens = 0
Mulheres = 0
calcH = 0

while (condicao) {
    let nota = parseInt(prompt("Digite sua nota:"))
    let sexo = prompt("Digite o sexo: (M/F)".toLowerCase())
    condicao = prompt("Deseja inserir outra nota?".toLowerCase())
    
    //Quantos homens enviaram as notas | Qual a maior nota entre os homens

    if (sexo == "M".toLowerCase()) {
       if (nota > calcH) {
        calcH = nota
       }

       homens++
     
    }

    
    //Quantas Mulheres tiveram Nota acima de 7

    if (sexo == "F".toLowerCase() && nota >= 7) {
      Mulheres++
    }

        
      if (condicao == "N".toLowerCase()) {
                
        condicao = false
    }

    mediageral += nota
    contador++

      
}


mediageral = mediageral / contador

console.log(" A média geral dos alunos foi: " + mediageral)
console.log(" A quantidade de homens registrados foi de: " + homens)
console.log(" A quantidade de Mulheres que tiveram nota acima de 7 foi de: " + Mulheres)
console.log(" A maior nota entre os homens foi de: " + calcH)