#!/bin/sh

var='one'

case "$var" in
  one)
    echo varの中身はoneです
    ;;
  *)
    echo "$var Didn't match anything"
esac

var2='two'

case "$var2" in
  one|two)
    echo var2の中身はoneかtwoです
    ;;
  *)
    echo "$var2 Didn't match anything"
esac
