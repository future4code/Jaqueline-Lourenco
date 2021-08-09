let item = process.argv[2,3]

tarefas = [
    "Organizar casa", 
    "Lavar roupa", 

]

novasTarefas = [...tarefas, item]

console.log("Tarefa adicionada com sucesso!")
console.log(`Tarefas: ${novasTarefas.toString()}`)