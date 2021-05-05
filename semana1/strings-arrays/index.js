/*
ENUNCIADO
1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    ```jsx
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log**('f. ', valor)**
    ```
Resposta:

let array
console.log('a. ', array) //undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //0

array[i+1] = 19
console.log('e. ', array) //19

const valor = array[i+6]
console.log('f. ', valor) //25
*/

/* 
ENUNCIADO

2. Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length

Qual será o valor impresso no console se a entrada do usuário for: 
"Subi num ônibus em Marrocos"?

Resposta: SUBI NUM ÔNIBUS EM MARROCOS
  27
----------------------------------------------------------------------------------
 Exercícios de escrita de código
    1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

   O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

*/
    let nomeDoUsuario = prompt("Insira seu nome")
    let emailDoUsuario = prompt("Insira seu e-mail")
   
    let fraseFinal = "O seu email " + emailDoUsuario + "foi cadastrado com sucesso! " "Seja bem-vinda(o), " + nomeDoUsuario + "!"

    console.log(fraseFinal)