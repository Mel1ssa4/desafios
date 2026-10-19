let tarefas = [
"Estudar HTML",
"Estudar CSS",
"Praticar JavaScript",
"Estudar Laravel",
"Revisar conteúdo"
];

console.log("Lista de tarefas antes das alterações:");
console.log(tarefas);

tarefas.splice(3, 1);
tarefas.splice(1, 1, "Estudar React");

console.log("\Lista de tarefas depois das alterações: ");
console.log(tarefas);