
//Pillar of Inherit (Pilar da Herança)

class Animal{ // Class father

constructor() {


this.cor = 'Branco e Marrom'
this.tamanho = null
this.peso = null

}
dormir() {

console.log('Dormir')

}

}

class Cachorro extends Animal {//sub-class



    constructor() {


        super()
        this.orelhas = 'Grandes e caídas'

    }

    correr() {

    console.log('Correr')
    }

   

    

    rosnar() {


        console.log('Rosnar')

    }


}

class Passaro extends Animal {//sub-class




    constructor() {

     super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar')
    }

   
}
class Papagaio extends Passaro {

constructor() {
super()

this.sabeFalar = true

}

falar() {

    console.log('HELLO WORLD')
}



}
let cachorro = new Cachorro()

let passaro = new Passaro()
let papagaio = new Papagaio()
/*
cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.dormir()
papagaio.voar()
*/
console.log(passaro)
console.log(cachorro)
console.log(papagaio)
















