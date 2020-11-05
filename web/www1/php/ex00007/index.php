<?php
  $filename="bbs.dat";
  date_default_timezone_set('Asia/Tokyo');
  if (file_exists($filename)) {
    $fp=fopen($filename,'r');
    flock($fp,LOCK_SH);
    $aBBS = unserialize(file_get_contents($filename));
    if ($aBBS === false) {
      $aBBS = [];
    }
    flock($fp,LOCK_UN);
    fclose($fp);
  } else {
    $aBBS = [];
  }
  // print_r($_POST);
  if (isset($_POST['name']) && isset($_POST['text'])) {
    $aPost = $_POST;
    if ($aPost["name"] == "") {
      $aPost["name"] = "名無しさん";
    }
    $aPost["timestamp"] = time();
    if ($aPost["text"] == "") {
      $error = "本文がありません...!";
    }else{
      array_push($aBBS, $aPost);
    }
  }
  $result = file_put_contents($filename, serialize($aBBS), LOCK_EX);
  if ($result === false) {
    $error="ファイルの書き込みに失敗しました。";
  }
  echo "<!DOCTYPE html>\n";
  echo "<html lang=\"ja\">\n";
  echo "\t<head>\n";
  echo "\t\t<meta charset=\"UTF-8\">\n";
  echo "\t\t<meta name=\"description\" content=\"\">\n";
  echo "\t\t<meta name=\"keywords\" content=\"\">\n";
  echo "\t\t<meta name=\"robots\" content=\"noindex,nofollow\">\n";
  echo "\t\t<meta name=\"author\" content=\"nomutan\">\n";
  echo "\t\t<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\">";
  echo "\t\t<title>php掲示板</title>\n";
  echo "\t</head>\n";
  echo "\t<body>\n";
  if ($error) {
    echo "<strong class=\"error\">$error</strong>\n";
  }
  $i = 1;
  foreach ($aBBS as $a) {
    printf("<article>\n");
    printf("<div>\n");
    if ($a["mail"]) {
      printf("%d : <a href=\"mailto:%s\">%s</a> : %s<br>\n", $i, $a['mail'], $a["name"], date("Y-m-d H:i:s", $a["timestamp"]));
    } else {
      printf("%d <span class=\"name\">%s</span> : %s<br>\n", $i, $a["name"], date("Y-m-d H:i:s", $a["timestamp"]));
    }
    printf("</div>\n");
    printf("<div class=\"text\">\n");
    printf("%s\n",nl2br($a["text"]));
    printf("</div>\n");
    printf("</article>\n");
    $i++;
  }
  echo "\t\t<form action=\"index.php\" method=\"POST\">\n";
  echo "\t\t\t<p>\n";
  echo "\t\t\t\t<input type=\"submit\" value=\"書き込む\">\n";
  echo "\t\t\t\t名前 : <input type=\"text\" name=\"name\" size=\"20\" placeholder=\"名前\" autofocus> E-mail : <input type=\"text\" name=\"mail\" size=\"20\" placeholder=\"省略可\">\n";
  echo "\t\t\t</p>\n";
  echo "\t\t\t<p><textarea name=\"text\" cols=\"64\" rows=\"5\"></textarea></p>\n";
  echo "\t\t</form>\n";
  echo "\t</body>\n";
  echo "</html>\n";

?>
