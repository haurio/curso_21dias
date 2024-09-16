//Exercicio 1

let contagem = Number(prompt("Digite um número:"))

for(let num=0; num <=contagem; num++){
    console.log(num)

}

//Exercio 2


for (let soma = 0; soma <= 50; soma+=5) {
    console.log(soma)
    
}
    

//Exercio 3

for (let inver = 50; inver >= 0; inver-=5) {
    console.log(inver)
}

//Exercio 4

let re = parseInt(prompt("Digite um número:"))

    for(let i = re; i <= re +2; i++){
        console.log(i)

            for(let a = 0; a <= 10; a++){
                console.log(i + " x " + a + " = " + (i * a))

            }
    