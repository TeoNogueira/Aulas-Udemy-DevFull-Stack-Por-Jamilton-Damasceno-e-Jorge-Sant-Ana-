

let Carro = function() {

this.cor = 'Purple'
this.modelo = 'Acura RSX'
this.velocidadeInicial = 0
this.velocidadeMaxima = '420'

this.acelerar = function() {

// this.velocidadeInicial += 10

let velocidade = this.getVelocidadeInicial() + 10 
this.setVelocidadeInicial(velocidade)
}

this.getVelocidadeInicial = function() {

return this.velocidadeInicial
}

this.setVelocidadeInicial = function(velocidadeInicial) {

this.velocidadeInicial = velocidadeInicial

}


}

let carro = new Carro()




console.log(`A velocidade atual do Carro é: ${carro.getVelocidadeInicial()}`)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual do Carro é: ${carro.getVelocidadeInicial()}`)

console.log(carro)
