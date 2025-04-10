//Solicitando o nome do vinho ao usuário. 
var nomeDoVinho = prompt("Insira o nome do vinho.")
//Caso o usuário não insira o nome do vinho, solicite novamente.
if (nomeDoVinho == "") {
    alert("O nome do vinho não foi inserido. Insira novamente.")
    var nome_do_vinho = prompt("Insira o nome do vinho.")
}
//Cadastrando o nome do vinho no console.
console.log("Nome do vinho:", nomeDoVinho)

//Solicitando o tipo de vinho ao usuário. 
var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
//Caso o usuário não insira o tipo de vinho, solicite novamente.
if (tipoDeVinho == "") {
    alert("O tipo de vinho não foi inserido. Insira novamente.")
    var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
}
//Caso o usuário não insira um dos três tipos de vinho, solicite novamente.
else if (tipoDeVinho != "tinto" || tipoDeVinho != "branco"|| tipoDeVinho != "rosé"|| tipoDeVinho != "Tinto"|| tipoDeVinho || "Branco"|| tipoDeVinho != "Rosé" ){
    alert("Tipo não encontrado. Insira um tipo válido.")
    var tipoDeVinho = prompt("Insira o tipo de vinho: tinto, branco ou rosé")
//Cadastrando o tipo de vinho no console.
}
console.log("Tipo de vinho:", tipoDeVinho)