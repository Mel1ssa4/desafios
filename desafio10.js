let notas = [8, 7, 9, 4, 6, 10];
let verificar = notas.every(nota => nota > 0 && nota <= 10);
// every verifica se todos os valores passados atendem uma condição 
if (verificar) {
  console.log("As notas são validas.");
} 

else {
  console.log("Notas são invalidas.");
}
