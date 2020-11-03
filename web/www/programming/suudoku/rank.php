<?php

  //foobar.php
  $score = isset($_POST['score']) ? $_POST['score'] : null;
  $name = isset($_POST['name']) ? $_POST['name'] : null;
  //$result = //何らかの処理
  if($name == ""){
      $name = 'noname';
  }
  $aaaa=[$score,$name];



  $dsn = 'mysql:host=mysql2013.db.sakura.ne.jp;dbname=nomutan5_nanpure;charset=utf8';
  $user = 'nomutan5';
  $password = 'totomonosaikou1';
  try {
  $dbh = new PDO($dsn, $user, $password);
  } catch (PDOException $e) {
  print json_encode('データベースにアクセスできません！'.$e->getMessage());
  exit;
  }
  $name=$dbh->quote($name);
  $sql = "INSERT INTO nomutan5_nanpure.numpure_table (name,score) VALUES ($name,$score)";
  $dbh->query($sql);

  $sql2 = "SELECT name,score FROM nomutan5_nanpure.numpure_table ORDER BY score ASC LIMIT 5";
  $aaa=$dbh->query($sql2);


  foreach ($aaa as $row) {
    $stack[]=$row;
  }
  print json_encode($stack);
?>
