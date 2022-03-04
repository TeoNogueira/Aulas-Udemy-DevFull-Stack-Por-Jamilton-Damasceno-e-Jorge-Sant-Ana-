
//Pillar of Inherit

class Animal { // Class father

constructor(cor, tamanho, peso) {


this.cor = cor
this.tamanho = tamanho
this.peso = peso

}
dormir() {

console.log('Dormir')

}

}


class Passaro extends Animal {//sub-class




    constructor(bico, cor, tamanho, peso) {

     super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar')
    }

   
}
class Papagaio extends Passaro {

constructor(sabeFalar, cor, tamanho, peso) {
super('Médio', cor, tamanho, peso)

this.sabeFalar = sabeFalar

}

falar() {

    console.log('HELLO WORLD')
}



}


let papagaio = new Papagaio(true, 'Azul', 25, 350)
console.log(papagaio)


let papagaio2 = new Papagaio(false, 'Rosa', 5, 50)
console.log(papagaio2)

















