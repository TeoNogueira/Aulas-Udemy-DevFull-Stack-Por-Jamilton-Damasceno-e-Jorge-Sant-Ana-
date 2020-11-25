class Despesa {



    constructor(ano, mes, dia, tipo, descricao, valor) {

this.ano = ano
this.mes = mes
this.dia = dia
this.tipo = tipo
this.descricao = descricao
this.valor = valor


    }

    validarDados() {

       for(let i in this) {

        if(this[i] == undefined || this[i] == '' || this[i] == null) {

            return false

        }
       return true
       }

    }
} 

class Bd {

    constructor() {

        let id = localStorage.getItem('id')
        
        if(id === null) {


            localStorage.setItem('id', 0)  // se for nulo, me retorna 0
            
        }
        }

     getProximoId() {
      let proximoId = localStorage.getItem('id') 

return parseInt(proximoId) + 1// acrescentando um Id novo
     }

     gravar(d) {

        //localStorage.setItem('despesa', JSON.stringify(d)) // strigify faz a conversão de um objeto literal para JSON
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        
        localStorage.setItem('id', id)
        }
    
}

let bd = new Bd()




function cadastrarDespesa() {
    
    let ano  = document.getElementById('ano')
    let mes  = document.getElementById('mes')
    let dia  = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao  = document.getElementById('descricao')
    let valor  = document.getElementById('valor')

    let despesa = new Despesa(
        
        ano.value, 
        mes.value, 
        dia.value, 
        tipo.value, 
        descricao.value, 
        valor.value
        
        )
    if(despesa.validarDados()) {
        //bd.gravar(despesa)
        
   document.getElementById('modal_titulo').innerHTML = 'Registro com sucesso'
   document.getElementById('classBs').className = 'modal-header text-success'
   document.getElementById('modal_titulo_div').innerHTML = 'Cadastro efetuado com sucesso'
   document.getElementById('modal_btn').innerHTML = 'Voltar'
   document.getElementById('modal_btn').className = 'btn btn-success'
     // dialog de sucesso
      $('#modalRegistraDespesa').modal('show')
    } else { 
document.getElementById('modal_titulo').innerHTML = 'Preencha os devidos campos'

document.getElementById('classBs').className = 'modal-header text-danger'
        
document.getElementById('modal_titulo_div').innerHTML = 'Voltar e Corrigir'


document.getElementById('modal_btn').innerHTML = 'Erro, voltar ao menu'

document.getElementById('modal_btn').className = 'btn btn-danger'

// dialog error

        $('#modalRegistraDespesa').modal('show')
    }
}

