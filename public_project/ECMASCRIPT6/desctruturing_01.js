<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<script>

let frutas = ['abacaxi','uva', 'pera', 'maça', 'mamão']


//let [ a, b, ,c ] = frutas // pular um indice


let [ a, b = 'Laranja', c, d, e, f = 'Banana'] = frutas

console.log(a, b, c, d, e, f)



let coisas = [['abacaxi','uva', 'pera', 'maça', 'mamão'], ['José', 'Maria']]
let [, [,n2]] = coisas
let [[, , p3]] = coisas

console.log(n2)

console.log(p3)
</script>



</head>
<body>
    
</body>
</html>