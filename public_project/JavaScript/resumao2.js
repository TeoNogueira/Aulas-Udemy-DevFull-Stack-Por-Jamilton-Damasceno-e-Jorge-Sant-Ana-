<!DOCTYPE html>
<html lang="PT_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio</title>


    <script class="">

   function ativar(activeSuccess, erro) {
    
    
    if(false) {

                  activeSuccess('botão ativado', 'botão desativado')





    }
    
    else { erro('botão com erro')}


    
   }
   var activeSuccess =  function(mode1, mode2) {

               document.write('<h1>' + mode1 + '</h1>')
              document.write('<hr />')
               document.write('<p>' + mode2 + '</p>')


   }

   var erro = function(errado) {

    document.write('<h4>' + errado + '</h4>')
       
          
   }
           

   ativar(activeSuccess, erro)
        
        
        
           </script>
        


</head>
<body>



  <!----  <script src="./scripts/desafio.js"></script>-- >
</body>
</html>