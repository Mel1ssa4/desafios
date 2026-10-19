let Password = "1234"
let imputPassword = prompt("Digite sua senha:");

let attempt = 3;

while (attempt > 0){
    if (imputPassword.trim().toLowerCase() === imputPassword.toLowerCase().trim()){
        alert("Acesso liberado");
        break;
    }
else{
    attempt = attempt - 1;
    let die = attempt > 0 ? "número de tentativas".concat(attempt) : "Acesso negado";

    if (die != "acesso negado" && attempt != 0){
        alert("Senha incorreta,".concat(die));
        imputPassword = prompt("Digite sua senha");
    }
    else{
        alert(die);
        break;
        }
    }
}





