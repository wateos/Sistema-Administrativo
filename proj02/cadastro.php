<?php
    if(isset($_POST) & !empty($_POST)) {
        extract($_POST);

        $nome = filter_var($nome, FILTER_SANITIZE_STRING);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        $idade = filter_var($idade, FILTER_SANITIZE_NUMBER_INT);
        $url = filter_var($url, FILTER_VALIDATE_URL);

        require("conectar.php");

        $incl = "INSERT INTO $db.$tb (nome, email, idade, link) VALUES ('$nome', '$email', '$idade', '$url')";
        $res = $conx->prepare($incl);
        $res->execute();

        header('location:form.php');
    }
?>