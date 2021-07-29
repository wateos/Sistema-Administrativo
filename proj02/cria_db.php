<?php

// EXECUTE ESTE SCRIPT SOMENTE PARA CRIAR O BANCO E A TABELA!

// Dados de acesso ao SERVIDOR e dados para o Banco e Tabela.
$host = "localhost";
$user = "root";
$pass = "";
$db = "projeto";
$tb = "usuario";

// 1a. CONEXÃO COM O SERVIDOR E CRIAÇÃO DO BANCO.


try {             
   $conx = new PDO("mysql:host=$host", $user, $pass);  
   $conx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $criadb = "CREATE DATABASE $db";
   $conx->exec($criadb);
   echo "Database ok!<br>";
}
catch(PDOException $e) {
   echo $criadb . "Falha no acesso:<br />" . $e->getMessage();
}  


if($conx){   // Boolean...
    try {	
	  $criatb = "CREATE TABLE $db.$tb (
	  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	  nome VARCHAR(100) NOT NULL,
	  email VARCHAR(50) NOT NULL,
	  link VARCHAR(150) NOT NULL,
     idade INT(6) NOT NULL,
     usuario VARCHAR(100) NOT NULL,
     senha VARCHAR(200) NOT NULL)
   
     ENGINE=InnoDB DEFAULT CHARSET=latin1";     

      $conx->exec($criatb);          
	  echo "<p>Tabela ok!</p>";    // Mensagem só para o teste!
    }      
      catch(PDOException $e) { 
         echo $criatb ."Falha Tabela:<br>". $e->getMessage();
    }
}


// Encerra a conexão..
// $conx = null;  

?>
