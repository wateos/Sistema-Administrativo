<?php
session_start();
unset($_SESSION['login'], $_SESSION['password']);

$_SESSION['msg'] = "Deslogado com sucesso!";
header("Location: index.php");
?>