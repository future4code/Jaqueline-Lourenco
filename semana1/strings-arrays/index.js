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
   
    let fraseFinal = "O seu email " + emailDoUsuario + " foi cadastrado com sucesso! " +  "Seja bem-vinda(o), " + nomeDoUsuario + "!"

    console.log(fraseFinal)

/*

2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
*/

let comidasFavoritas = ["purê","frango","lasanha","peixe","arroz"]

console.log(comidasFavoritas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let comidaAmigo = prompt("Qual sua comida favorita?")
comidasFavoritas[1] = comidaAmigo
console.log(comidasFavoritas)


/*

3. Faça um programa, seguindo os passos:

    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    c) Imprima o array na tela

    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    e) Remova da lista o item de índice que o usuário escolheu.

    f) Imprima o array na tela

*/

let listaDeTarefas = []
let listPrimeira = prompt("Digite uma tarefa")
let listSegunda = prompt("Digite uma tarefe")
let listTerceira = prompt("Digite uma tarefa")

listaDeTarefas.push(listPrimeira)
listaDeTarefas.push(listSegunda)
listaDeTarefas.push(listTerceira)

console.log(listaDeTarefas)

let tarefaFeita = prompt("Insira índice de uma tarefa realizada: 0, 1 ou 2")

listaDeTarefas.splice(Number(tarefaFeita), 1)

console.log(listaDeTarefas)