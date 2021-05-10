//Exercícios de interpretação de código
/*
1.  Leia o código abaixo

    ```jsx
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    ```

    a) O que vai ser impresso no console?
Resposta:
     Matheus Nachtergaele
     4 
     Globo


2. Leia o código abaixo

    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```

    a) O que vai ser impresso no console?
Resposta: (cachorro) Juca, 3, SRD 
   (gato) Juba, 3, SRD
   (tartaruga) Jubo, 3, SRD

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Resposta: Faz uma cópia inteira de um objeto para outro

3. Leia o código abaixo

    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```

    a) O que vai ser impresso no console?
Resposta: false, undefined
 
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Resposta: primeiro é um booleno devolve true ou false , undefined é porque não existe a objeto altura

*/
//Exercícios de escrita de código
/*
1. Resolva os passos a seguir: 
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente
         **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no 
         modelo abaixo**:** 

    ```jsx
    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }

    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
    ```
b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista 
de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

*/

//a)

const people = {
    name: "Emanuelly Eduarda", 
    nicknames: ["Manu", "Dudu", "Duda"]

 }
 const nameUser = people.name ;
 const nicknamesUser = people.nicknames
 console.log (`Eu sou ${nameUser}, mas pode me chamar de: ${nicknamesUser[0]}, ${nicknamesUser[1]} ou ${nicknamesUser[2]}`)


//b)

const people = {
    name: "Emanuelly Eduarda", 
    nicknames: ["Manu", "Dudu", "Duda"]

 }
  const newNicknames = {
      ...people,
      nicknames:["Manusinha", "Duarda" , "Dudinha"]
  }
  function addInfo(exchangeNicknames){
      const changeNicknames = {
      ...exchangeNicknames,
      peopleNicknames : ["Manusinha ", " Duarda " , " Dudinha"],
      
      }
    return changeNicknames
    }
  const newList = addInfo(people)
  console.log(`Eu sou ${newList.name}, mas pode também de: ${newList.peopleNicknames}`)

/*
2. Resolva os passos a seguir: 

    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo

        ```jsx
        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }

        minhaFuncao(pessoa)

        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
        ```
*/
//a);b)

const people = {
    name: "Emanuelly", 
    age: 06,
    profession: "estudante"

 }
  const people2 = {
    ...people,
    name: "Jaqueline Lourenço", 
    age: 26,
    profession: "admitrativo"
  }
  
  function addInfo(people){
    const array =  [people.name, people.name.length, people.age, people.profession, people.profession.length]
 
   return array
  }

   console.log(addInfo(people))
   console.log(addInfo(people2))
   
  //3. Resolva os passos a seguir: 
/*
  a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

  b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome 
  (`string`) e disponibilidade (`boolean` - devem começar como `true`)

  c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
  Invoque essa função passando os três objetos criados. 

  d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
*/
//a);b);c);d)
const cart = []

const list = {
  name: "mango",
  availability: true
}

const list2 = {
  name: "strawberry",
  availability: true
}

const list3 = {
  name: "banana",
  availability: true
}

function addFruitCart(fruit){
  cart.push(fruit)

}

addFruitCart(list.name + (`, ${list.availability}`));
addFruitCart(list2.name + (`, ${list2.availability}`)),
addFruitCart(list3.name + (`, ${list3.availability} `))

console.log(cart)