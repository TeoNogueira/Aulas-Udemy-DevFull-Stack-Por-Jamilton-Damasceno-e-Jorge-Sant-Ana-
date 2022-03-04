
/*
   let listThings = Array()


   listThings[0] = 'Maçã'
   listThings[0] = 'Manga'
   listThings[0] = 'Cajá'
   listThings[0] = 'Graviola'

// MÉTODO SORT() PARA ORDENAR UMA LISTA (RE-ORDENAÇÃO ALPHA NUMERIC)
        
        console.log(listThings.sort())
*/

//---..-.-.-.-.-.

        let listThings = Array()


   listThings[0] = 321
   listThings[1] = 123
   listThings[2] = 122
   listThings[3] = 11
   listThings[4] = 2
   listThings[5] = 623


   // tecnica de listagem em números colocando sort e dentro dela uma função callback 
   // repare que na função atribuida dentro de sorte ordenaNumeros nao tem parenteses"()" pois seria
   // dessa forma executado dentro da função
   // mas nesse caso o que queremos é que ordena numeros seja executado dentro do método sort

   console.log(listThings.sort(ordenaNumeros))

   function ordenaNumeros(a, b) {

        return a - b
// < 0 = a ordenado antes de b
// > 0 = b ordenado antes de a

// == ordem é mantida 

//se existir

   }
        
      