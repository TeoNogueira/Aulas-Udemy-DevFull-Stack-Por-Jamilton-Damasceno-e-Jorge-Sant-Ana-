//altura e largura da página




var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var createInsectTime = 1500



var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
//1500 milliseconds

var createInsectTime = 1500





} else if(nivel === 'dificil') {
 //1000
 var createInsectTime = 1000


} else if(nivel === 'veryhard') {
//750

var createInsectTime = 750

}

function ajustaTamanhoPalcoJogo() {


    var cronometro = setInterval(function() {


   tempo -= 1

   if(tempo < 0) {
       clearInterval(cronometro)
       clearInterval(createInsect)
      window.location.href='vitoria.html'
       

   } else {

document.getElementById('cronometro').innerHTML = tempo
// inner é o valor contido entre as tags no caso apontado para Span
}

    },1000)

 altura = window.innerHeight

  largura = window.innerWidth

 
 console.log(altura, largura)


}

ajustaTamanhoPalcoJogo()



function positionRandom() {

    // remover mosquito anterior (caso exista)
if(document.getElementById('insect')) {

    document.getElementById('insect').remove()
if( vidas > 3 ) {

 window.location.href='fim_de_jogo.html'


} else {
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

    vidas++
}
}

    //--------------------------x-----------------------
    var posicaoX = Math.floor(Math.random() * largura) - 120
    var posicaoY = Math.floor(Math.random() * altura) - 120

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoX = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)


    // criar html

    var insect = document.createElement('img')
    insect.src = 'imagens/insect.png'
    insect.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
   insect.style.left = posicaoX + 'px'

   insect.style.top = posicaoY +  'px'

   insect.style.position = 'absolute'

   insect.id = 'insect'
   insect.onclick = function() {
     this.remove()


   }
    document.body.appendChild(insect)


}




function tamanhoAleatorio() {


  var classe = Math.floor(Math.random() * 3)
  
  switch(classe) {

   case 0:
     return 'insect1'
   case 1:
     
     return 'insect2'

   case 2 :

     return 'insect3'




  }


}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)
  
    switch(classe) {
  
     case 0:
       return 'insect1'
     case 1:
       
       return 'insect2'
  
     case 2 :
  
       return 'insect3'



}
}