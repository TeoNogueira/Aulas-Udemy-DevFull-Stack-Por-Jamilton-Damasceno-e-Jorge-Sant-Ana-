
/* LEMBRANDO QUE O INTERPRETADOR DO JAVASCRIPT PRIMEIRO RESPEITA AS FUNÇÕES E DEPOIS OS SCRIPTS

   function calcularAreaTerreno(largura, comprimento,) {


    // lógica 

    var area = largura * comprimento
  // funçoes do tipo void ou com retorno
  
     return area

   }
var area = calcularAreaTerreno(15, 25)


document.write('Área com ' + calcularAreaTerreno(15, 25) + ' Meters²') */




function soma(a, b) {

     return a + b


}
        console.log(soma(7, 7)) 
        console.log(soma(7, 7, 15, 9)) // a aplicação não dá erro pelo fato de existir somente a soma a + b, porém
        // o valor do dos dois primeiros digitos serão somados e o resto dos valores serão descartados trazendo o
        // calculo de 7 + 7 somente.
        console.log(soma(7)) // retorna somente o 7 e um undefined pois não existe o valor próximo (valor B)

      