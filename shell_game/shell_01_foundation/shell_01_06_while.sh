#!/bin/sh

i=0

while [ $i -lt 10 ] ; do
  echo '$i'です
  i=$((i+1))
done

n=0

while [ $n -lt 10 ] ; do
  echo $n
  n=`expr "$n" + 1`
done
