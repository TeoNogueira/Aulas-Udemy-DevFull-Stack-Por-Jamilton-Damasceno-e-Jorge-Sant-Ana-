
// métodos : Getters e Setters

class Tv {


    constructor() {

this._relacaoCanais = Array(2, 4, 5, 7, 10)
this._canalAtivo = 5
this._volume = 5

    }
get canalAtivo() {


return this._canalAtivo  // um modo para acessar algo restrito

}

set canalAtivo(canal) {

if(this._relacaoCanais.indexOf(canal) !== -1) { // mostrar a relação de canais no caso me retorna o valor real do canal ativo dentro do Array + lógica !== diferente tipo e valor 
// Este if liga uma forma de segurança para nao se usar canais diferentes do Array, assim só podendo modifica-los somente os existentes no Array
this._canalAtivo = canal // Modo para alterar algo restrito.. atraves de uma atribuição tv.canaAtivo
}
}

}

let tv = new Tv()

tv.canalAtivo = 7
console.log(tv.canalAtivo)


    
















