#!/bin/zsh

case "`echo -e`" in
  -e)
    ECHO() { echo "$@"; }
    ;;
  *)
    ECHO() { echo -e "$@"; }
    ;;
esac

case "`ECHO '\r'`" in
  '\r')
    case "`(print X) 2> /dev/null`" in
      X)
        ECHO() { print "$@"; }
        ;;
      *)
        PATH=/usr/5bin:$PATH
        export PATH
        ;;
    esac
    ;;
esac

case "$((1))" in
  1)
    expr()
    {
      echo "$(($*))"
    }
    ;;
esac 2> /dev/null

ECHO '\033[31m\c'
ECHO '\033[44m\c'
echo "hello"
ECHO '\033[m\c'


ECHO '\033[10;20r\c'

ECHO '\033[20;1H'
ECHO '\033[r\c'










