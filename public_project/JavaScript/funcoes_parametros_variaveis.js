

   function soma() {

      /*console.log(arguments) // representa um objeto, que é uma variavel local, disponivel dentro da funçao
                             //*/

                             var resultado = 0
                             for(var x in arguments) {


                             resultado += arguments[x]
                             }

 return resultado
 
   }
console.log(soma(7, 2, 2.4, ' texto'))

        
        
        