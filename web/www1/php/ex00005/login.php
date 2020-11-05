<?php
  $user = $_POST['user'];
  $pass = $_POST['pass'];
  if (strcmp($user,'suzuki')==0 && strcmp($pass,'1010234')==0) {
    setcookie("user",$user, time()+60*60);
  }
  header("Location: home.php");
?>
