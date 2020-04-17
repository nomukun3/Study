#!/bin/sh

i=3

i=`expr "$i" + 4`

echo $i

for file in `ls -1 ./`; do
  echo $file
done
