let notas = [7, -1, 8.5, 10, 6, 4.5];

console.log("--- NOTAS INICIAIS ---");
notas.forEach((nota, index) => {
  console.log(`Aluno ${index + 1}: Nota ${nota}`);
});

let i = 0;
while (i < notas.length) {
  if (notas[i] < 0 || notas[i] > 10) {
    console.log(`\n[Aviso] Nota inválida (${notas[i]}) encontrada no índice ${i}. Removendo...`);
    notas.splice(i, 1);
  } else {
    i++;
  }
}

console.log("\n--- VERIFICAÇÕES ---");
if (notas.includes(10)) {
  console.log("Há pelo menos uma nota 10 na turma!");
} else {
  console.log("Ninguém tirou nota 10.");
}

let posicaoNota10 = notas.indexOf(10);
if (posicaoNota10 !== -1) {
  console.log(`A nota 10 está na posição (índice): ${posicaoNota10}`);
}

notas.sort((a, b) => a - b);

console.log("\n--- NOTAS FINAIS ORDENADAS ---");
notas.forEach((nota, index) => {
  console.log(`${index + 1}º lugar: Nota ${nota}`);
});
