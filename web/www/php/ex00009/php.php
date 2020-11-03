<?php

//foobar.php
$score = isset($_POST['score']) ? $_POST['score'] : null;
$name = isset($_POST['name']) ? $_POST['name'] : null;
//$result = //何らかの処理
$sen=1000;
$ramen=[];
$ramen[0]=$score+$sen;
$ramen[1]="こんにちは";
print json_encode($ramen);

?>
