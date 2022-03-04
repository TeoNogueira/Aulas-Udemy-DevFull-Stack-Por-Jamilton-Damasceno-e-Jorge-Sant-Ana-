
// object prototype


let animal = {
attr1: 'a'

}

let vertebrado = {

__proto__: animal, attr2: 'b'
}


let ave = {

__proto__: vertebrado, attr3: 'c', attr2: 'VERTEBRAS'
}

//ADIÇÃO ANONIMA DE PROTOTIPO // ter cuidado pois está sendo global para aplicação
Object.prototype.jojo50 = 'Atribuindo fora da cadeia literal de Objetos'

console.log(ave.attr2, ave.attr1, ave.attr3, ave.jojo50)
