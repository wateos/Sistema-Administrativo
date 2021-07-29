<?php
    require("conectar.php");

    $sel = "SELECT nome, email, idade, link from $db.$tb ORDER BY nome";
    $result = $conx->query($sel);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/form.css">
</head>
<body>
    <?php
        @include('header.php');

        echo '<div id="tabela">';
        echo '<table id="table" style="width:100%">';
        echo '<tr> <th>Nome</th> <th>E-mail</th> <th>Idade</th> <th>Rede Social</th> </tr>';

        while ($linha = $result->fetch(PDO::FETCH_ASSOC)) {    
           echo "<tr><td>".$linha['nome']."</td><td>".$linha['email']."</td><td>".$linha['idade']."</td><td>".$linha['link']. "</td></tr>";
        }

        echo '</table>';
        echo '</div>';

        @include('footer.php');
    ?>
    <script src="./js/listagem.js"></script>
</body>
</html>