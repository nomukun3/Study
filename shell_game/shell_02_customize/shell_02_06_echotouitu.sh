#!/bin/sh

case "`echo -e`" in
  '-e')
    ECHO() { echo "$@"; }
    ;;
  *)
    ECHO() { echo -e "$@"; }
    ;;
esac


case "ECHO '\r'" in
  '\r')
    case "`(print X) 2>/dev/null`" in
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

ECHO 'ajofajo\rjoajoa\njofajfoao\njfaojfoa'
