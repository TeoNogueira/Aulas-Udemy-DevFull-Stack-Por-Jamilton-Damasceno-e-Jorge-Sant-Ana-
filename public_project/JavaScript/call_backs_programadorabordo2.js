

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


function soma3(a, b, fnCallback) {
const result = a + b
fnCallback(result)
return result
}

function(atribuirParametro) {

    console.log('FOi', atribuirParametro)
    
    }

const resultSoma = soma3(10, 5, )

console.log(resultSoma)
