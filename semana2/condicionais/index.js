/*
Exercícios de interpretação de código
1. Leia o código abaixo:

    ```jsx
    const respostaDoUsuario = prompt("Digite o número 
    que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele
     realiza? 

Resposta: pergunta ao usuario número e amarzena na variavel
numero, se o resto da divisão numero é igual, igual zero 
executa função dentro do if, console.log, se for falso executa
função dentro do else console.log.


    b) Para que tipos de números ele imprime no console
    "Passou no teste"? 

Resposta: tipo de número par que o resto da divisão
 igual, igual, igual zero

    c) Para que tipos de números a mensagem é "Não 
    passou no teste"?

Resposta: tipo de número impar diferente de zero

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?
Resposta: solicitar uma fruta pelo prompt e valor digitado no prompt é armazenado variavel fruta, 
let preco é um variavel undefined,
variavel fruta switch é feita três verificações fruta caso seja igual a case Laranja executa dentro 
da função, em seguinda console.log, caso não, vai para case Maça, assim até excutar uma case, caso 
não cair nenhuma das case frutas, executa oque tem dentro da default

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Resposta: console.log("O proço da fruta", Maça, " é ", " R$", 2.25)

    c) Considere que um usuário queira comprar uma `Pêra`, 
    qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Resposta: executa função default 
    console.log("O proço da fruta", Pêra, " é ", " R$", 5)

  3. Leia o código abaixo:

 
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
 

    a) O que a primeira linha está fazendo?
Resposta: solicitando um numero ao usuario amazenando na variavel numero em formato Number

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Resposta: se for maior que 0 console.log("Esse número passou no teste") se for menor que zero vai dar erro 
no console.log mensagem porque variavel declarado do escopo do if so pode ser acessada dentro do escopo do if

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta: Sim, porque console.log esta tentando acessar uma variavel que não esta no mesmo escopo. 


// Exercícios de escrita de código
/*
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
    `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

const compareNumber = () =>{
    const ageNumber = Number(prompt("Digite sua idade!"))
    if (ageNumber >= 18){
        console.log("Você pode dirigir!!")
    } else {
        console.log("Você não pode dirigir!!!")
    }
}
  compareNumber()
  
/*

2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou 
**V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica

        Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

        Se o usuário digitar "V", a saída deve ser:

        ```
        "Boa Tarde!"
        ```
*/

let shift = prompt("Digite turno que estuda! M = matutino; V = vespertino ou N = noturno").toUpperCase()
const checkShift = () => {
        if (shift === "M"){
        console.log("Bom dia!")
    } else if (shift === "V"){
        console.log(("Boa Tarde!"))
    } else {
       console.log("Boa Noite!")
    }
}
  checkShift()

//3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

const checkShift = () => {
    let shift = prompt("Digite turno que estuda! M = matutino; V = vespertino ou N = noturno").toUpperCase()
    switch (shift){
        case "M":
            console.log("Bom Dia!")
          break;
        
        case "V":
            console.log("Boa Tarde!")
          break;

        default:
            console.log("Boa Noite!")
    }
}
 checkShift()

/*
4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for 
do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que 
vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

*/

const checkGenderMovie = () => {
    let gender = prompt("Digite Gêreno de filme iram assistir!").toUpperCase()
    let ticket = Number(prompt("Digite valor do ingresso!"))
       if (gender === "FANTASIA" && ticket < 15){
          console.log("Bom Filme!")
       } else {
           console.log("Escolha outro filme!")
       }
       
}
checkGenderMovie()


// Desafio
/*
1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, 
pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite 
o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
*/

const checkGenderMovie = () => {
    let gender = prompt("Digite Gêreno de filme iram assistir!").toUpperCase()
    let ticket = Number(prompt("Digite valor do ingresso!"))
    
    if (gender === "FANTASIA" && ticket < 15){
        let snack = prompt("Qual lanchinho ele vai comprar?")
        switch (snack){
            case "pipoca":
                console.log(`Bom filme! Aproveite sua ${snack}`)
              break;
            
              case "chocolate":
                console.log(`Bom filme! Aproveite seu ${snack}`)
              break;
            
            default:
                console.log("Bom filme! Aproveite seu(a) comida.")
            }
          
       } else {
           console.log("Escolha outro filme!")
       }
       
}
checkGenderMovie()