//Faz a verificação para saber se é string ou não
function isString(valor) {
    return typeof valor === "string";
}

//Teste
console.log(isString("olá")); //True
console.log(isString(12345)); //False
