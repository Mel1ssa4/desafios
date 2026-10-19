let livros = ["Harry Potter","O menino do pijama listrado","Dom Casmurro"];

let indice = livros.indexOf("DomCasmurro");

if (indice === -1) {
    console.log("Livro não encontrado.");
}
else{
    console.log('O livro está na posição ${indice}.');
}