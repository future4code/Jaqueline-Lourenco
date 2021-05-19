/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   const carta = comprarCarta()
   const carta1Play = comprarCarta()
   const carta2Play = comprarCarta()

   const carta1Pc = comprarCarta()
   const carta2Pc = comprarCarta()

   const somaPlay = carta1Play.valor + carta2Play.valor
   const somaPc = carta1Pc.valor + carta2Pc.valor 

   console.log(`Play - cartas${carta1Play.texto}, ${carta2Play.texto}, - pontuação ${carta1Play.valor}, ${carta2Play.valor} `)
   console.log(`Pc - cartas${carta1Pc.texto}, ${carta2Pc.texto}, - pontuação ${carta1Pc.valor}, ${carta2Pc.valor} `)
  
   if (somaPlay > somaPc){
    console.log("O play ganhou a partida!!")
   }else if (somaPc > somaPlay){
    console.log("O pc ganhou a partida!!")
   }else {
      console.log("Empate!")
   }
   

