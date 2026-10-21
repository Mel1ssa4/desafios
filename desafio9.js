let notas = [8, 7, 9, 4, 6, 10];
let verificacao = notas.some(nota => nota < 5);

if (verificacao) {
  console.log("Existe pelo menos um aluno que possui nota abaixo de 5.");
}
  
else {
  console.log("Nenhum aluno possui nota abaixo de 5.");
}
