//Solicitando o nome do vinho ao usuário. 
var nomeDoVinho = prompt("Insira o nome do vinho.")
//Caso o usuário não insira o nome do vinho, solicite novamente.
if (nomeDoVinho == "") {
    alert("O nome do vinho não foi inserido. Insira novamente.")
    var nome_do_vinho = prompt("Insira o nome do vinho.")
}
//Cadastrando o nome do vinho no console.
console.log("Nome do vinho:", nomeDoVinho)
