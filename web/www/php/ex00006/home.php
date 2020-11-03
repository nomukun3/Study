<?php
  session_start();
$user = $_SESSION['user'];
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>My SNS</title>
</head>
<body>
<h1>My SNS</h1>
<?php
if ($user && strlen($user) > 0) { ?>
<!-- ログイン済 -->
<p>こんにちは、<?php echo $user; ?>さん。</p>
<p>ここはあなたのページです</p>
<p><a href="logout.php">ログアウト</a></p>
<?php } else { ?>
<p>このサイトを利用するには<a href="index.php">ログイン</a>してください</p>
<?php
}
?>
  
</body>
</html>
