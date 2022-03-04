
   
// let listaNomes = ['Teófilo', 'João', 'Rick', 'Gabriel', 'Nandinho']


let listaConvidados = Array()

listaConvidados['a'] = 'Teófilo'
listaConvidados[10] = 'João'
listaConvidados['zebra'] = 'Rick'
listaConvidados[-1] = 'Gabriel'
listaConvidados[true] = 'Nandinho'

console.log(listaConvidados)

for(let x in listaConvidados)  {

   console.log('Indice ' + x + ' valor ' + listaConvidados[x])


}


        