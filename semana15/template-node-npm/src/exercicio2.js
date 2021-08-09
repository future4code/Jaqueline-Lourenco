let equation = process.argv[2]
let number1 = Number( process.argv[3] )
let number2 = Number( process.argv[4] )

switch(equation){
    case "add":
        console.log(`Resposta da sua equação é: ${number1 + number2}`)
    break;

    case "sub":
        console.log(`Resposta da sua equação é: ${number1 - number2}`)
    break;

    case "mult":
        console.log(`Resposta da sua equação é: ${number1 * number2}`)
    break;
    case "div":
        console.log(`Resposta da sua equação é: ${number1 / number2}`)
    break;

    default:
    console.log("Tente digitar uma das opção: add = soma, sub = subitrair, multi = multiplicar ou div = dividir")
}