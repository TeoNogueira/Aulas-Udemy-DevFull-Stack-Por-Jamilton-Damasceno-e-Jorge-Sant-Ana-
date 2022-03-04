

let assinatura = {


idClient: 10323,
description: 'Acesso à Internet',


internetOnOrOff() {


    console.log('Ativo')
}


}

assinatura.internetOnOrOff()


let y = assinatura

console.log(y.description)
//--------------x------------------x-----------------------x-
//modificando a description y

y.description = 'Acesso à Tv e Internet'
console.log(y.description)



