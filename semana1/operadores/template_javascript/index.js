//Exercícios de interpretação de código
/*1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)
    ```
    
   Respostas: a. true; b. false ; c. false d. string
   
   2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue 
   perceber algum problema? O que será impresso no console? 

    ```jsx
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    ```
    */
    /*1. Faça um programa que:

    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela 
    resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/
  let idadeUser = prompt('Insira sua idade?')
  let idadeAmiga = prompt('Idade da sua amiga?')
    
  const idadeMaior = Number(idadeUser) > Number(idadeAmiga)
  const difIdade = Number(idadeUser) - Number(idadeAmiga)

  console.log('Sua idade é maior do que a do seu melhor amigo?', idadeMaior)
  console.log("Diferença de idade é de ", difIdade)

  /*

  2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


 */
//a),b)
        let nPar = prompt("Insira um número par!")
        let resultado = nPar % 2

        console.log("Sobra da divisão", resultado)

//c) A divisão de numero Par resultado vai ser 0
//d)Se o numero for Impar resultado vai ser 1

/*

3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas

*/

//a)
    let usuarioIdade = Number(prompt('Qual sua idade?'))
    console.log('Sua Idade', usuarioIdade)
    const idadeEmDias = usuarioIdade * 365
    const idadeEmHoras = usuarioIdade / 24
    console.log('Sua idade em dias é', idadeEmDias)
    console.log('Sua idade em horas é', idadeEmHoras)

/*

4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as 
seguintes mensagens:

    ```html
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    ```
*/

const nPrimeiro = Number(prompt("Digite um número"))
const nSegundo = Number(prompt("Digite outro número"))

/*
const nuMaior = (primeiroNumero) > (segundoNumero)
const nuIgual = (primeiroNumero) === (segundoNumero)
const nuDevPrimeiro = (primeiroNumero) % (segundoNumero)
const nuDevSegundo = (segundoNumero) % (primeiroNumero)
*/

console.log('O primeiro numero é maior que segundo', nPrimeiro > nSegundo)
console.log('O primeiro numero é igual ao segundo?', nPrimeiro === nSegundo)
console.log('O primeiro numero é divisivel pelo segundo?', nPrimeiro % nSegundo ===0)
console.log('O segundo numero é divisivel pelo primeiro', nSegundo % nPrimeiro ===1)

