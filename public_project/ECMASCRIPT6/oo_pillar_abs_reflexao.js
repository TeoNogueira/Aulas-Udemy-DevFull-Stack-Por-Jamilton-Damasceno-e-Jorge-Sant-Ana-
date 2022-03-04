

       // Reflexao pillar of abstraction
    // um software de marcenaria
    // cadeira/sofa
    //PARADIGMA PROCEDURAL PARTE 1


    //cadeira
/*
    let qtde_pernas = 4

    let giratoria = true

    let cor = 'Blue'
    let cadeiras = []


    cadeiras[0] = []

    cadeiras[0]['qtde_pernas'] = 4
    cadeiras[0]['giratoria'] = false
    cadeiras[0]['cor'] = 'Blue'


    cadeiras[1] = []

    cadeiras[1]['qtde_pernas'] = 6
    cadeiras[1]['giratoria'] = true
    cadeiras[1]['cor'] = 'Vermelha'

    console.log(cadeiras)
   

    function girarCadeira(indice) {
     if(cadeiras[indice]['giratoria'] === true) {

    console.log('cadeira giratória')


     } else {



        console.log('não é giratória')
     }

    }

     function adicionarCadeira(qtde_pernas, giratoria, cor) {
     


        let cadeira = []

        cadeira['qtde_pernas'] = qtde_pernas

        cadeira['giratoria'] = giratoria
        

        cadeira['cor'] = cor


     cadeiras.push(cadeira)




     }
 

    adicionarCadeira(8, true, 'Green')

    console.log(cadeiras)

*/

// PARADIGMA OO (ORIENTADO A OBJETO)


class Cadeira {
   

    //ATRIBUIDOR/CARACTERÍSTICAS COM REPRESENTANTES(PARAMETROS)
  constructor(qtde_pernas, giratoria, cor) {
                      //variavel do escopo do bloco da função
    this.qtde_pernas = qtde_pernas
    this.giratoria = giratoria
    this.cor = cor

  }
//AÇÃO OU MODELO
girarCadeira() {

  if(this.giratoria === true) {

console.log('cadeira girou')

  }

else { console.log('Cadeira nao girou')}
}

}

let cader = new Cadeira(20, true, 'Green')

let cadeiras = Array()

cadeiras.push(new Cadeira(8, true, 'Gray'))
cadeiras.push(new Cadeira(12, false, 'White'))
console.log(cadeiras)
console.log(cader)
