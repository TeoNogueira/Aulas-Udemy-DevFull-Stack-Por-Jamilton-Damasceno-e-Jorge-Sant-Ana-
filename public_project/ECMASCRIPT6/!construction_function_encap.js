

var Carro = function() {

this.cor = 'Purple'
this.modelo = 'Acura RSX'
this.velocidadeAtual = 0
this.velocidadeMaxima = 420

this.acelerar = function() {

// this.velocidadeAtual += 10

let velocidade = this.getvelocidadeAtual() + 50
if(velocidade > this.velocidadeMaxima) { 
velocidade = this.velocidadeMaxima // se tentar ultrapassar a velocidade maxima....
// Ela volta pra máxima e não ultrapassa
}
this.setvelocidadeAtual(velocidade)
}

this.getvelocidadeAtual = function() {

return this.velocidadeAtual
}

this.setvelocidadeAtual = function(velocidadeAtual) {

this.velocidadeAtual = velocidadeAtual

}


}

let carro = new Carro()

carro.velocidadeMaxima = 700
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)

carro.acelerar()

//----x----x---x--x---x--x--x--x-x-x-x-x-x--x-x---------


let Carro2 = function() {
let velocidadeMaxima = 420
let kmsRodados = 0

this.cor = 'Purple'
this.modelo = 'Acura RSX'
this.velocidadeAtual = 0


this.acelerar = function() {

let velocidade = this.getvelocidadeAtual() + 50 
velocidade = velocidadeMaxima

}
this.setvelocidadeAtual(velocidade)

parseInt(setKmsRodados(0.07))
console.log(kmsRodados)
}

this.getvelocidadeAtual = function() {

return this.velocidadeAtual
}

this.setvelocidadeAtual = function(velocidadeAtual) {

this.velocidadeAtual = velocidadeAtual

}
let setKmsRodados = function(q) {

    kmsRodados += q

}



let carro2 = new Carro2()



console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro)

console.log(carro2)
