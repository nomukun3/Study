#!/bin/sh

var1=1
var2=3

add()
{
  var3=`expr $var1 + $var2`
  expr $var1 + $var2
  echo $var3
}

add2()
{
  expr $1 + $2
  return 0
}

add

echo $var3

add2 10 21
