
function objetos() {
   
let nome = 'Teo'  //document.getElementById('Nome').value
let idade = '30'
let sexo = 'Masculino'

let profissao = 'Programador'

let literalObject = {
    
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {

console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é, ${this.profissao} profissão,`)




    }


}
console.log(literalObject)
literalObject.exibirResumo()


let literalObject2 = { // DEIXOU O CODIGO MAIS ENXUTO

nomeAlter: 'TEO',
idade,
sexo,
profissao,
exibirResumo() {// TIRANDO A FUNÇÃO ANONIMA E COLOCANDO A AÇÃO EM FORMA DE FUNÇÃO

console.log(`${this.nomeAlter}, ${this.idade} anos, ${this.sexo} é, ${this.profissao} profissão,`)


}


}
console.log(literalObject2)
literalObject2.exibirResumo()
}


objetos()