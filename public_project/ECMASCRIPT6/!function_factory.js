

let Bicicleta1 = {

    // requisição http
    // resposta http

cor: 'Branca',
marcha: 'Única',

aro: 12,


pedalar() {console.log('método pedalar ')}



}


let Bicicleta2 = {

cor: 'Azul',
marcha: '6',

aro: 18,


pedalar() {console.log('método pedalar ')}



}

console.log(Bicicleta1)
console.log(Bicicleta2)

//----x----x----------------------------------------------------------------

let BicicletaFactory = function(cor, marcha, aro, kids) {
    // lógica
    // requisição http
    // resposta http

return { 


    cor: cor, // POSSO USAR APENAS COR, POIS A VARIÁVEL DO BLOCO RECEBE A CHAVE E A CHAVE O PARAMETRO
    marcha: marcha, // POR CAUSA DA ATUALIZAÇÃO DO ECMASCRIPT6
    aro: aro, 
    kids: kids,
    pedalar() { console.log('Pedalando') }

}

}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26, false)

console.log(Bicicleta3)

//console.log(`Cor: ${Bicicleta3.cor}`)
//Bicicleta3.pedalar()


let Bicicleta4 = BicicletaFactory('Cinza', '12', 12, true)

console.log(Bicicleta4)

