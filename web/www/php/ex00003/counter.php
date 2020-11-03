<?php
/* End of file count.php */

  $count = 0;
  $filename = 'counter.dat';

  //ファイルからカウント値読み込み
  $fp = fopen($filename,"r");
  flock($fp,LOCK_SH);
  $count = fgets($fp,16);
  flock($fp,LOCK_UN);
  fclose($fp);

  $count = $count + 1;

  //ファイルにカウント値を書き込み
  $fp = fopen($filename,"w");
  flock($fp,LOCK_EX);
  fputs($fp,$count);
  flock($fp,LOCK_UN);
  fclose($fp);

  echo "<!DOCTYPE html>\n";
  echo "<html lang=\"ja\">\n";
  echo "  <head>\n";
  echo "    <meta charset=\"UTF-8\">\n";
  echo "    <meta name=\"description\" content=\"\">\n";
  echo "    <meta name=\"keywords\" content=\"\">\n";
  echo "    <meta name=\"robots\" content=\"noindex,nofollow\">\n";
  echo "    <meta name=\"author\" content=\"nomutan\">\n";
  echo "    <title>カウンター</title>\n";
  echo "    <link href=\"counter.css\" rel=\"stylesheet\" type=\"text/css\">\n";
  echo "  </head>\n";
  echo "  <body>\n";
  // echo $count;
  echo "<p>\n";
  printf("%d\n", $count/10000000 % 10);
  printf("%d\n", $count/1000000 % 10);
  printf("%d\n", $count/100000 % 10);
  printf("%d\n", $count/10000 % 10);
  printf("%d\n", $count/1000 % 10);
  printf("%d\n", $count/100 % 10);
  printf("%d\n", $count/10 % 10);
  printf("%d\n", $count% 10);



  echo "</p>\n";
  echo "  </body>\n";
  echo "</html>\n";
?>
