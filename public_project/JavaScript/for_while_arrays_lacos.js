

   var listaCoisas = Array()

  
   listaCoisas[0] = 'banana'
   listaCoisas[1] = 'uva'
   listaCoisas[2] = 'caja'
   listaCoisas[3] = 'manga'
console.log(listaCoisas.length)
   

listaCoisas.push('água')


if(listaCoisas.length > 4) {

   listaCoisas.push('morango')

} else {

listaCoisas.push('uva')

}


   var y = 0
       while(y < listaCoisas.length) {

 console.log(`${listaCoisas[y]}\n`)
               y++
       }



 
        
        