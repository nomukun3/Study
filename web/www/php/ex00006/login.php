<?php
  session_start();
  $user = $_POST['user'];
  $pass = $_POST['pass'];
  if (strcmp($user,'suzuki')==0 && strcmp($pass,'1010234')==0) {
    $_SESSION['user']=$user;
  }
  header("Location: home.php");
?>
