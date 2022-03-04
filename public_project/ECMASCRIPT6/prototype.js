

//aviao
//cor
//modelo
//levantarvoo

//objeto literal

let a1 = {

cor: 'Branco',
modelo: 'AirBush a-380',
levantarVoo: function() {


console.log('Levantar Voo')

}

}

//função construtora

let AviaoF = function() {

this.cor = 'Azul'
this.modelo = 'Boeing 787'
this.levantarVoo = function() {


    console.log('Levantar Voo')
}


}
let a2 = new AviaoF()


//Classe 

class AviaoC{


    constructor() {



        this.cor = 'vermelho'
        this.modelo = 'Embraer'
        this.levantarVoo = function() {


            console.log('Levantar Voo')
        }
    }
}


let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)
   