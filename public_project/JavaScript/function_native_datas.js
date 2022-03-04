
   //     var data = new Date()

   //  console.log(data.getDate()) 

   //var data = new Date()
// console.log(data.getDate() + '/' + (data.getMonth() + 1 + '/' + data.getFullYear())) 

 // adicionar / remover dias

/*
 var data = new Date()

console.log(data.toString())

data.setDate(data.getDate() + 1) // adicionando dias para a data atual

console.log('<hr />')

console.log(data.toString())

console.log('<br />' + '<br />' + '<br />')
// --------------x-----------x-------------x----------------------------------------------------------------




var data = new Date()

console.log(data.toString())

data.setMonth(data.getMonth() + 2) // adicionando meses para a data atual

console.log('<hr />')

console.log(data.toString())

console.log('<br />' + '<br />' + '<br />')
//----------x-----------------------------------------------x----------------------------------x



var data = new Date()

console.log(data.toString())

data.setFullYear(data.getFullYear() + 1) // adicionando dias para a data atual

console.log('<hr />')

console.log(data.toString())

console.log('<br />' + '<br />' + '<br />')
// --------------x-----------x-------------x----------------------------------------------------------------


*/

// 26/10/2020

var data1 = new Date(2020, 9, 26)



// 11/11/2020

var data2 = new Date(2020, 10, 11)


console.log(data1.toString()+ '<br />')
console.log(data2.toString())

console.log('<hr />')
console.log(data2.toString())
// converter datas para algo que possamos calcular ----------------
console.log('<hr />' + '<br />')
console.log(data1.getTime()) // getTime() puxa o os milissegundos
console.log('<hr />' + '<br />')
console.log(data2.getTime())



console.log('<hr />' + '<br><br>')
        
   // 1 de janeiro de 1970 <<<<<< data de padrão computacional para o getTime() fazer o calculo dos milissegundos
   // a partir dessa data     

   // próximo passo é encontrar a quantidade de milessegundo de data1 e data2

var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

console.log(milissegundos_entre_datas) //Math.abs <<< retorna um valor absoluto de um numero
          //Math.abs se retorna subtração o abs faz ficar positivo 


console.log('<br>')


// 1 dia tem 24, cada hora de tem 60 minutos, cada minuto tem 60 segundos, e cada segundos tem 1000 milissegundos
// então quantos milissegundos existem em um dia?

var calculoMilissegundosPorDia = 1*24*60*60*1000
console.log(' 1 dia tem: ' + calculoMilissegundosPorDia + ' Mili-seconds')



console.log('<hr />' + '<br>'+ '<br>')

var ResultadoEntreDatasMilissegundos = Math.ceil(milissegundos_entre_datas / calculoMilissegundosPorDia)

console.log('Resultado da quantidade de dias é: ' + ResultadoEntreDatasMilissegundos)


// 















