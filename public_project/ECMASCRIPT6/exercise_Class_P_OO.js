

class Mouse {

// atribuidor
constructor(plast_rollout, plast_clicks, plast_sensor, qtde_total)

{ 



    this.plast_rollout = plast_rollout
    this.plast_clicks = plast_clicks  
    this.plast_sensor = plast_sensor
    this.qtde_total = qtde_total

}
// ação ou modelo

clicarMouse() {
    if(this.plast_clicks === true)


    console.log('Mouse-clica')


   
 else {
    
    console.log('Mouse-click, off')
}
}


mexerMouse() {

if(this.plast_sensor === true)
console.log('Sensor_On')


else {console.log('Sensor_Off')}

}

mouseBall() {
if(this.plast_rollout === true) {


console.log('Mouse_Ball_ON')
    
}
else { console.log('Mouse_Ball_OFF')}
}

Qtde_existente() {

if(this.qtde_total > 0 && qtde_total > 0) {

console.log('Existente')

}
else { console.log('Não Existe Quantidade')}
}

}

let mouse = new Mouse(true, true, true, 20)


let listaMouseType = []


listaMouseType.push(new Mouse(false, true, true, 30))
listaMouseType.unshift(new Mouse(false, true, true, 10))
listaMouseType.pop() // deletar o ultimo da lista de Array
console.log(mouse)

console.log(listaMouseType)
