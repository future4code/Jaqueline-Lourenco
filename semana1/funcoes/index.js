// Exercícios de interpretação de código
/*
1. Leia o código abaixo

    ```jsx
    function minhaFuncao(variavel) {
        return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```

    a) O que vai ser impresso no console?

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
    função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
   
Resposta:
   a) 10
      50
   b) 10
      50

2. Leia o código abaixo

    ```jsx
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e qual é sua utilidade

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`

Respostas:
  a) to.lowerCase deixa todo seu 'TeXto' em letra minuscula 'texto'
  .includes verifica se no 'textoDoUsuario' tem palavra "cenoura"

  b) true
     true
     false

 */

//Exercícios de escrita de código
/* 
1. Escreva as funções explicadas abaixo:

    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```

    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```

    - Exemplo

        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

*/
//a)

console.log("Eu sou Jaqueline, tenho 26, moro em Hortolândia e sou estudante")

//b)

let nome = prompt("Insira seu nome")
let idade = Number(prompt("Insira sua idade"))
let cidade = prompt("Insira sua cidade")
let profissao = prompt("insira sua profissão")

const fraseComTemplateString = `Eu sou a ${nome} tenho ${idade} anos moro em ${cidade} e sou ${profissao}`

console.log(fraseComTemplateString)

/*
2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

*/
//a)

function somaDoisNumeros(primeiroNumero, segundoNumero) {
    const somaDoisNumeros = primeiroNumero + segundoNumero
    return somaDoisNumeros
}
let primeiroNumero = Number(prompt("Insira primeiro número"))
let segundoNumero = Number(prompt("Insira segundo número"))
const soma = somaDoisNumeros(primeiroNumero, segundoNumero)
console.log(soma)

//b)

function comparaNumeros(primeiroNumero, segundoNumero) {
    const maiorIgual = primeiroNumero >= segundoNumero
    return maiorIgual
}
const resultado = comparaNumeros(primeiroNumero, segundoNumero)
console.log(resultado)

//c)

function checkParedade(primeiroNumero) {
    const ePar = primeiroNumero % 2 === 0
    console.log(ePar)
    return ePar
}
   const resultadoFunc = checkParedade(primeiroNumero)
   console.log(resultadoFunc)

//d)
    
    
    function printOutMsg() {
        let msg = prompt("Insira uma frase")
        let toUpperMsg = msg.toUpperCase()
        let lenghtMsg = msg.length.toString()

        console.log (`Tamanho da mensagem: ${lenghtMsg} caracter(es) Texto em caixa alta: ${toUpperMsg}`)
    
}
    printOutMsg()
    
    


/*

3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    ```
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
    ```

*/

let numPrimeiro = Number(prompt("Insira um número"))
let numSegundo = Number(prompt("Insira segundo número"))

function som(numPrimeiro, numSegundo){
    const soma = numPrimeiro + numSegundo
   
    return soma
}
function sub(numPrimeiro, numSegundo) {
    const subitracao = numPrimeiro - numSegundo
    
    return subitracao

}
function mult(numPrimeiro, numSegundo){
    const multiplicação = numPrimeiro * numSegundo
    
    return multiplicação
}
function divi(numPrimeiro, numSegundo){
    const divisão = numPrimeiro / numSegundo
    
    return divisão
}

function result(numPrimeiro, numSegundo){
    const adicao = som(numPrimeiro, numSegundo)
    const menos = sub(numPrimeiro, numSegundo)
    const vezes = mult(numPrimeiro, numSegundo)
    const dividido = divi(numPrimeiro, numSegundo)

    const resultoFinal = `Os resultados são: 
    Soma: ${numPrimeiro} + ${numSegundo} = ${adicao}
    Subtração: ${numPrimeiro} - ${numSegundo} = ${menos}
    Multiplicação: ${numPrimeiro} x ${numSegundo} = ${vezes}
    Divisão: ${numPrimeiro} / ${numSegundo} = ${dividido}`

    return resultoFinal
}
   
console.log(result(numPrimeiro, numSegundo))

