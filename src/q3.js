//Vai dividir a string em palavras considerando só espaços simples.
function toArray(frase) {
    return frase.split(" ");
}

//Testes
console.log(toArray("atividade javascript")); //["atividade", "mundo"]
console.log(toArray("melao")); //["melao"]
