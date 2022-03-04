
/*
let msg = 'como utilizar o operador spread'
//console.log(msg)

//console.log(...msg)

//console.log([...msg])



let lCursos1 = ['NodeJs e MongoDB', 'ES6, TypeScript, Angular 4']

let lCursos2 = ['Multiplataforma, Android/IOS, Introdução ao GNU/Linux']
let lCursosCompleto = ['Web Completo', 'Android Completo', ...lCursos1, ... lCursos2]

// console.log(lCursosCompleto)

*/
//spread em objetos


let pessoa = {

nome: 'João', idade: 27

}

let clone = { endereco: 'Rua ABC', ...pessoa}

// console.log(clone)



let curso = {

    EBAC: 'Escola Britânica de Artes e Tecnologias',
    Aluno: 'Teófio'
}


let receive = {

    ...curso, end: 'Rua xxxx', num: 4423, 

}


console.table(receive)