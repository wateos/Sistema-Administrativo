<?php
    session_start();
    $msg = $_SESSION['msg'] ?? "Preencha os dados abaixo para realizar o login";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <main class="login">
        <div>
            <div id="tit"class="row">
                <div>
                    <h1>Sistema Administrativo</h1>
                </div>
            </div>
            <div>
                <div>
                <?="<p id='mensagem'><b>$msg</b></p>";?>
                    <form class="form" method="POST" action="login.php">
                        <br>                        
                        <input class="block" type="login" id="login" name="login" placeholder="Login" onkeyup='validaLogin()'/>
                        <div id="textLogin"></div>

                        <input class="block" type="password" id="password" name="password" placeholder="Senha" onkeyup='validaPassword()'/>
                        <div id="textPassword"></div>

                        <button type="submit" id="logar">Acessar</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <script src="./js/index_validacao.js"></script>
</body>
</html>