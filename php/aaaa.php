<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="robots" content="noindex,nofollow">
  <meta name="author" content="nomutan">
  <title>php</title>
</head>
<body>
<?php
$username=$_POST['name'];
$username=htmlspecialchars($username,ENT_QUOTES,'UTF-8');


if ($username=='') {
  print'usernameが入力されていません<br>';
}
else {
  print"username :";
  print$username;
}


if ($username=='') {
  print'<form>';
  print'<input type="button" onclick="history.back()" value="戻る">';
  print'</form>';
}
else {
  print'<form method="post" action="aaaa.php">';
  print'<input type="hidden" name="username" value="'.$username.'">';
  print'<br>';
  print'<input type="button" onclick="history.back()" value="戻る">';
  print'<input type="submit" value="OK">';
  print'</form>';
}



?>
</body>
</html>
