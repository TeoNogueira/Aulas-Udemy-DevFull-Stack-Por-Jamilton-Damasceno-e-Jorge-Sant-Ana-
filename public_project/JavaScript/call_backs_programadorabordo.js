
/*
function soma2(a) {



    return function somaInterna(b) {



        return a + b;
    }
}

const soma2Resultado = soma2(100)

//console.log(soma2Resultado(52))
// parei aos 17:54 minutos; callback programador abordo youtube
*/
/*

function soma3(a, b, fnCallback) {
const result = a + b
fnCallback(result)
return result
}



const resultSoma = soma3(10, 5, function(parametroDoCallback) {

console.log('FOi', parametroDoCallback)







})
console.log(resultSoma) */










/*


function vejaBem(a, b, pegaVejaBem) {


const somados = a + b

pegaVejaBem(somados)

return somados



}

const total =  vejaBem(5, 2, function(capturados) {


console.log('Valor: ', capturados)




})

console.log(total)
 */


/*


function detalhes(critico, buff, skill, SelenaSkill1) {



const totalBuffs = critico * buff / skill

SelenaSkill1(totalBuffs)


return totalBuffs


}




const elevarHeroi = detalhes(2500, 1200, 20, function(totalBuffs){




console.log('Incrementado na Selena: ', totalBuffs)



})


console.log(elevarHeroi)
*/






/*


function addHeroName(king, arthas) {



const name = king + ' '

arthas(name)


return name




}

const addName = addHeroName('KinHearts', function(okay) {




console.log('Class: ', okay)





})
console.log('Classe: ', addName)
*/



function addClans(sGrimmer){



const clan = sGrimmer

return clan


}

console.table(addClans('Arthas'))

