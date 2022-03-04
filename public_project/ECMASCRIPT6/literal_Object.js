// OBJETO LITERAL

class Produto {


    constructor(descricao, preco) {


        this.descricao = descricao
        this.preco = preco
    } 

    verDescricao() {

        console.log(`${this.descricao} por apenas ${this.preco}`) //BACKTICKS
    }

}

let produto = new Produto('Notebook', 2200)

produto.verDescricao()


function x() {

//------------- PRODUTO LITERAL ------ ENTRA NO CONTEXTO, PUXANDO SOMENTE A DESCRIÇÃO DA CLASSE IMPLÍCITA
let produtoLiteral = {

descricao: 'Geladeira',
preco: 1700,

verDescricao: function() {

    console.log(`${this.descricao} por apenas ${this.preco}`) //BACKTICKS + TEMPLATE_STRING

}

}

produtoLiteral.verDescricao()

}

x()
