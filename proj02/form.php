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
    ?>

    <form method="post" action="cadastro.php">
            <legend><b>Formulário</b></legend> 
            
            <label><b>Nome:</b></label> 
            <input id="nome" name="nome" type="text" placeholder="Digite o nome" autofocus="autofocus" size="100" 
                minlength="5" required="required" onkeyup='validaNome()'/>
            <div id="txtNome"></div>

            <label><b>E-mail:</b></label>  
            <input id="email" name="email" type="email" placeholder="Digite seu e-mail" required="required" onkeyup='validaEmail()'/>
            <div id="txtEmail"></div>

            <label ><b>Idade:</b></label>
            <input id="idade" name="idade" type="number" required="required" placeholder="Somente números" onkeyup='validaIdade()' />
            <div id="txtIdade"></div>
        
            <label><b>Link da sua rede social:</b></label> 
            <input id="url" name="url" type="text" placeholder="Digite sua URL completa (http://exemplo.com/)" 
                required="required" onkeyup='validaUrl()'/>
            <div id="txtUrl"></div>
                                         
            <p>  
                <input id="btn" type="submit" name="exibe" value="Cadastrar"/>
            </p>
    </form>
    <?php
        @include('footer.php');
    ?>

    <script src="./js/form.js"></script>  
</body>
</html>