//Vai verificar se a string está vazia ou só tem espaços
function isEmpty(texto) {
    return texto.trim() === "";
}
//Testes
console.log(isEmpty(" ")) //True
console.log(isEmpty("  ")) //True
console.log(isEmpty("j"))  //False
