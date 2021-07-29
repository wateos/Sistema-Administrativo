<?php 
  session_start();
  
  $login = $_POST['login'];
  $senha = $_POST['password'];

  $senha = md5($senha);

  $server = "localhost"; 
  $banco = "projeto"; 
  $user = "root";
  $passwd = "";
  $tabela = "usuario";      

  try {
       $conx = new PDO('mysql:host='.$server.';dbname='.$banco, $user, $passwd); 
       $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
       $sel = $conx->prepare("SELECT count(*) FROM $banco.$tabela WHERE usuario = ? AND senha = ?");
       $sel->execute([$login, $senha]);
       $count = $sel->fetchColumn();   
      
       if ($count > 0) {                
          $_SESSION['login'] = $login;   
          $_SESSION['senha'] = $senha;
          header('location:form.php');   
       }
       else {  
          unset ($_POST['login']);       
          unset ($_POST['senha']); 
          $_SESSION['msg']='Login e/ou Senha inválidos!';   
          header('location:index.php');
       } 
    }   
  catch(PDOException $e) {
    echo 'ERRO: ' . $e->getMessage();  
  }
?>