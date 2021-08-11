type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/* a) Depois das instalações global e local executa os comandos:
        tsc ./nome-do-arquivo.ts 
        npx tsc ./nome-do-arquivo.ts

    b)Sim e não, Sim para pastas diferentes o caminho até execução do do código é diferente, Não para instalação global e local
        tsc ./src/exercicio4.ts
        npx tsc ./src/exercicio4.ts

    c)Sim, configurando o tsconfig para olhar a pasta de entrada rootDir e a de saída outDir
        executando: 
            tsc //global
            npx tsc //local

    d) Muitas funcionalidades a mais e comentada, oque chama atenção quantidade de comentarios, e a entrada outDir e saida rootDir, sem comentario o target es5 

*/