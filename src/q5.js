//Abrevia o nome
function abbrevName(nome) {
    const [primeiro, sobrenome] = nome.split(" ");
    return primeiro + " " + sobrenome[0] + ".";
}
//Teste
console.log(abbrevName("Jefferson Markus")); //"Jefferson M."