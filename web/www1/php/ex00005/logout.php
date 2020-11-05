<?php
  setcookie("user", '', time()-60*60);
  header("Location: index.php");
?>
