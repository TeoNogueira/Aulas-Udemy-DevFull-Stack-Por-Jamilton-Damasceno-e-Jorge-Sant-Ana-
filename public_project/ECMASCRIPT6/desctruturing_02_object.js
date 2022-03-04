<!DOCTYPE html>
<html lang="PT_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>


let produto = {
description: 'Notebook',
preco: 1800,

detalhes: {

fabricante: 'ABC',

modelo: 'xyz'


}

}

// usar o token chaves {} para objetos
// para Array usamos [] 
// let { description: d, preco: p = 1000, desconto = 5 } = produto // atribuindo valores para preco e description


let {detalhes: { fabricante: f, modelo: m} } = produto

console.log(f , m)


    </script>
</head>
<body>
    
</body>
</html>