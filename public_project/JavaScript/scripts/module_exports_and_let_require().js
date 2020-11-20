


let pessoa = {// objeto literal


    nome: 'Teo',
    classe: 'Human',
   
    }
    
     profissao = () => { // INCLUSAO DE VARIAVEIS PARA UM OBJETO LITERAL ATRAVÉS DE ARROW FUNCTION DENTRO DE A.F
    
        pessoa.prof = 'Programador'
       pessoa.nome = 'Ok'
       
        console.log(pessoa)
    
    
    pessoa.msg = () => console.log('Parabéns você está quase concluindo a parte de EcmaScript6')
    
     console.log(pessoa.prof)
    console.log(pessoa)
    
    }
    
    profissao()
    
    module.exports = pessoa.msg()
    