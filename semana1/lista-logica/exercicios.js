// Exemplos

// Exercício 0A
/*
function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}
*/

// Exercícios:

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   let altura = prompt("Insira a altura")
   let largura = prompt("Insira a largura")
   const area = altura * largura
   console.log(area)
}
   calculaAreaRetangulo()

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   let anoAtual = Number(prompt("Insira o ano Atual?"))
   let anoNascimento = Number(prompt("Insira o ano Nscimento?"))
   let idadeAtual = anoAtual - anoNascimento
   console.log(idadeAtual)

}
  imprimeIdade ()

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
 return peso / (altura * altura)
}
  calculaIMC(85, 1.8)

//Exercício 4

function imprimeInformacoesUsuario() {
      // implemente sua lógica aqui
      let  nome = prompt("Digite seu nome aqui")
      let  idade = Number(prompt("Digite sua Idade"))
      let  email = prompt("Digite seu e-mail")
      
      console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

   }
     imprimeInformacoesUsuario()

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   let cor1 = prompt("Digite sua primeira cor favorita")
   let cor2 = prompt("Digite sua segunda cor favorita")
   let cor3 = prompt("Digite sua terceira cor favorita")
   
   let cores = [cor1, cor2, cor3]

   console.log(cores)

}
  imprimeTresCoresFavoritas()

//Exercício 6

function retornaStringEmMaiuscula(string){
   // implemente sua lógica aqui
   return string.toUpperCase()

}
retornaStringEmMaiuscula("oi")

//Exercício 7

   function calculaIngressosEspetaculo(custo, valorIngresso) {
      // implemente sua lógica aqui
   const resultado = (custo / valorIngresso)
   alert(`Precisa ser vendido ${resultado} ingresso `)
   return resultado
   }
   calculaIngressosEspetaculo(300, 30)

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanhoDaStrings = (string1.length === string2.length)

  alert(`Tem mesmo tamanho? ${tamanhoDaStrings}`)
  return tamanhoDaStrings
}
 checaStringsMesmoTamanho("Jaque", "Dih")

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
      let primeiroItem = array[0]

      console.log(primeiroItem) 

      return primeiroItem
   
}       
   retornaPrimeiroElemento(1,2,3)

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   let ultimoElemento = array[array.length -1]

   console.log (`Ultimo número é: ${ultimoElemento}`)
   
   return ultimoElemento
}
   retornaUltimoElemento("1", "2","3", "4", "5")

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   let primeiroItem = array[0]
   array[0] = array[array.length -1]
   array[array.length-1] = primeiroItem

   console.log(`Elementos atualizados ${array} `)
   return array 
}
 trocaPrimeiroEUltimo(1, 2, 3, 4, 5)

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   let comparacao = string1.toUpperCase() === string2.toUpperCase()
   console.log("Os número são iguais? " + comparacao)
   return comparacao

}
   checaIgualdadeDesconsiderandoCase("ola", "OLA")

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   let anoAtual = Number(prompt("Insira o ano atual"))
   let anoNascimento = Number(prompt("Insira o ano do seu Nascimento"))
   let carteiraDeIdentidade = Number(prompt("Insira o ano em que sua carteira de identidade foi emitida"))
   let idade = anoAtual - anoNascimento
   let emisaoRG = anoAtual - carteiraDeIdentidade

   let condicaoPrimeira = idade <= 20 && emisaoRG >= 5 
   let condicaoSegunda = idade > 20 && idade <=50 && emisaoRG >= 10
   let condicaoTerceira = idade > 50 && emisaoRG >= 15

   console.log(condicaoPrimeira || condicaoSegunda || condicaoTerceira)
}
   checaRenovacaoRG()

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   let condicao1 = ano % 400 === 0
   let condicao2 = (ano % 4 === 0) && (ano % 100 !== 0)
   
   console.log(condicao1 || condicao2)
   return condicao1 || condicao2

}
  checaAnoBissexto(2000)

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   let idadeUsuario = prompt("Você tem mais de 18 anos, responda Sim ou Não")
   let ensinoMedio = prompt("Você possui ensino médio completo, responda Sim ou Não")
   let disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso, responda Sim ou Não")

   let comparacaoPrimeira = idadeUsuario === "sim" 
   let comparacaoSegunda = ensinoMedio === "sim"
   let comparacaoTerceira = disponivel === "sim"

   console.log(comparacaoPrimeira && comparacaoSegunda && comparacaoTerceira)

}
   checaValidadeInscricaoLabenu()