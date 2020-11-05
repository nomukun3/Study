<?php
  date_default_timezone_set('Asia/Tokyo');
  $mysqli = new mysqli('localhost','bbsuser','hoge','bbs'/*,8889*/);

  if (!$mysqli) {
    die('データベース接続失敗'.mysql_error());
  }
  $mysqli->set_charset('utf8');

  echo "<!DOCTYPE html>\n";
  echo "<html lang=\"ja\">\n";
  echo "<head>\n";
  echo "\t<meta charset=\"UTF-8\">\n";
  echo "\t<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\">";
  echo "\t<title>PHP+MySQL掲示板</title>\n";
  echo "</head>\n";
  echo "<body>\n";
  print_r($_POST);
  if(isset($_POST['name']) && isset($_POST['text'])){
    $aPost=$_POST;
    if ($aPost['name'] == "") {
      $aPost['name']='名無しさん';
    }
    $aPost['timestamp'] = time();
    if ($aPost['text']=="") {
      echo "本文がありません...!\n";
    }else{
      $spl = "INSERT INTO article (name, mail, date, text) VALUES ('" . $aPost['name'] . "', '" . $aPost['mail'] . "', now(), '" . $sPost['text'] . "')";
      $result_flag = $mysqli->query($sql);
      if (!$result_flag) {
        dir('INSERT失敗',mysql_error());
      }
    }
  }
  $result = $mysqli->query('SELECT * from article');
  while ($row=$result->fetch_assoc()) {
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
  }
  echo "\t\t<form><input type=\"button\" value=\" 更新 \" onclick=\"location.reload()\"></form>";
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
