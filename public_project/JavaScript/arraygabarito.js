
var objetos = Array('Cadeira', 'Impressora', 'Garfo')
function adicionarObjetos() {
//recupera o valor inserido no campo id objeto
var campo = document.getElementById('campo').value
//caso possua algum valor preenchido entra no if
if(campo != '') {
//verifica se o valor já não foi inserido anteriormente
//se sim, informa que valor já existe, se não insere novo valor
if( objetos.indexOf(campo) !== -1) {
alert('Objeto já foi adicionado')
} else {
objetos.push(campo)
console.log(objetos)
document.getElementById('campo').value = ''
}
} else {
alert('Informe um objeto válido')
}
}
function ordenarObjetos() {
objetos.sort()
console.log(objetos)
}


ordenarObjetos()