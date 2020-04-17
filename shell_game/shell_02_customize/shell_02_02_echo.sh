#!/bin/sh


case "`echo -e`" in
  -e)
    ECHO() { echo "$@"; }
    ;;
  *)
    ECHO() { echo -e "$@"; }
    ;;
esac

ECHO "aaa\c"

ECHO "aaa"


