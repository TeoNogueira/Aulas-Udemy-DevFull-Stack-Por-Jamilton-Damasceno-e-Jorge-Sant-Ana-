
// contexto Rest

function soma(...param) {

let resultado = 0

// console.log(param)

param.forEach(v => resultado += v)


return resultado


}

 console.log(soma(3, 8, 5, 7, -5, 10)) // at s F.e


 //--------------------------x-------------------------------//
    
 let multiplicador = (m, ...p) => {

//console.log(m)
let resultado = 0
//console.log(p)
p.forEach(v => resultado += m * v)

return resultado

}

console.log(multiplicador(5, 7, 12, 3, 49))