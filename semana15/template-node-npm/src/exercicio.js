//a)Como fazemos para acessar os parâmetros passados na linha de comando para o Node
    /*
    Resposta: Comando: node nomedoarquivo.js 1 2
    Array: ["caminho do node", "caminho do arquivo", "1", "2"]
    console.log("Array process", process.argv)

    process.argv[0] próprio node;
    process.argv[1] o caminho até arquivo que vai rodar node;
    Portanto para acessar os parâmentros colocamos no console.log process.argv[passa a posição para acessar]
    */

//b)
/*  let nome = process.argv[2]
    let age = Number(process.argv[3])
    
    console.log(`Olá, ${nome}! Você tem ${age} anos`) */

//c)
/*  let nome = process.argv[2]
    let age = Number(process.argv[3])

    console.log(`Olá, ${nome}! Você terá ${age+7} anos, daqui a 7 anos!`) */