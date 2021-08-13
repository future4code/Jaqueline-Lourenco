 let item = process.argv[2]

tarefas = [
    "Organizar casa", 
    "Lavar roupa", 

]

let novasTarefas =  [...tarefas, item]

console.log("Tarefa adicionada com sucesso!")
console.log(`Tarefas: ${novasTarefas}`)