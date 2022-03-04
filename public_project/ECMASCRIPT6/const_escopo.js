<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <script></script>

    <script>

   // 3 escopos.. global... função e bloco

       
        const SERIE = 'friends'
        function x() {
        const SERIE = 'the Waling dead'
        console.log(SERIE)
        
    }
    x()
    console.log(SERIE)

        </script>

</head>
<body>
    <div id="output"></div>
</body>
</html>