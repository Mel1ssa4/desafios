let notas = [8, 7, 9, 4, 6, 10];
let todasValidas = notas.every(nota => nota >= 0 && nota <= 10);
if (todasValidas) {
  console.log("Todas as notas são válidas.");
} else {
  console.log("Existem notas fora do intervalo permitido.");
}