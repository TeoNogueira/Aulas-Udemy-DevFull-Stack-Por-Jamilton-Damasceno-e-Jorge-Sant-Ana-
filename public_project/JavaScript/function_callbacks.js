
 
function exibirArtigo(id, callBackSuccess, callBackErro) {

    // lógica: recuperar o id via requisição http

    if ( true ) {
    callBackSuccess('Funções de CallBack em JS', ' Funções de Callback são muito utilizadas')



    } else { callBackErro('Erro ao recuperar os dados') }


}


 var callBackSuccess = function(titulo, descricao) {

console.log('<h1>' + titulo + '</h1>')
console.log('<hr />')
console.log('<p>' + descricao + '</p>')



}

var callBackErro = function(erro) {

   console.log('<p><b>Erro: </b>' + erro + '</p>')

}

exibirArtigo(1, callBackSuccess, callBackErro)



//substituindo document.write por console


        
        /// lembrar sempre de funçoes void (FUNÇOES SEM RETORNO)
        
      