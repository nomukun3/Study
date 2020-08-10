<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="robots" content="noindex,nofollow">
  <meta name="author" content="nomutan">
  <title></title>
</head>
<body>
<?php
/* End of file kata.php */

$i = 123;
printf("<p>int: %d</p>\n",$i);

$f = 1.23;
printf("<p>不動小数点: %.2f</p>\n",$f );

$s = "あいうえお";
printf("<p>文字型 :%s</p>\n", $s);

$b = true;
printf("<p>論理 :%d</p>\n", $b);

$a = array($i, $f, $s, $b, 1, 2.3, "かきくけこ", false);
var_dump($a[5]);
//配列の中身を表示
printf("<p>配列の長さ: %d</p>\n", count($a));

?>
</body>
</html>
