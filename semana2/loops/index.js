//Exercícios de interpretação de código
/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?


    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    
   Resposta: esta somando valor mais i sempre que for menor que 5 vai ser excutado e somando,
   valor impresso então é o final 10 que é maior então para de executar a soma 

2. Leia o código abaixo:

    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```

    a) O que vai ser impresso no console?
Resposta: todo número > 18 que são [19, 21, 23, 25, 27, 30]
    
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
    Se sim, o que poderia ser usado para fazer isso?
Resposta: Sim, const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
                 for (let numero of lista){
                 console.log(numero)
               }

3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    ```jsx
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "0"
        }
        console.log(linha)
        quantidadeAtual++
    }
Resposta: quatro linhas sendo executada quantidadeAtual que é igual a zero sendo assim quntidadeAtul menor
que quantidadeTotal que é 4 linha a ser vazia vai ser preenchida, 0 + 00 + 000 + 1 + que é 0000 console linha 
0
00
000
0000

*/

//Exercícios de escrita de código
/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes 
    em um array

    - 💡 Dica

        Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário 
        inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

 let pet = Number(prompt("Quantos bixinhos de estimação você tem?"))
    let i = 0
    if (i === pet) {
      console.log("Que pena! Você pode adotar um pet!")

    }
    else {
        let i = 0
        const bugName = []
        alert("Nome do seu animal(s):")
        
        while(i < pet){
            let petName = prompt(`${i+1}º:`)
            bugName.push(petName)
            i++
        }
        console.log(bugName)
    }

/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

    a) Escreva um programa que **imprime** cada um dos valores do array original.

    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e 
    **imprima** esse novo array

    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é:
     `numero`". Depois, **imprima** este novo array.

    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

   
*/
//a)
 function arrayOrigin(array){
    console.log(array) 
}

//b)
   function numberDiv(array){
    let array2 = []
    let i = 0
    while (i < array[i]){
        let number = array[i] / 10
        array2.push(number)
        i++
    }
    console.log(array2)
  }    
    const age = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    numberDiv(age)
 

//c)
   function evenNumber (array){
       let array3 = []
       let i = 0
       while (i < array[i]){
           let numberEven = array[i] % 2 === 0  
           numberEven.push(array3)
           i++
       }
    console.log(array3)
    }

//d)
    function printMessage(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        let frase = `O elemento do index ${i} é: ${array[i]}`
        newArray.push(frase)
    }
    console.log(newArray)
}

//e)
function maxAndMinNumero(array){
    let max = -2000000
    let min = 2000000
    for(let i = 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i]
        }if( array[i] < min){
            min = array[i]
        }
    }
    console.log(`O menor número é ${min} e o maior número é ${max}`)