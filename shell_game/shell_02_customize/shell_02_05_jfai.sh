#!/bin/sh

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
    esac
    ;;
esac

case "`ECHO '\r'`" in
  '\r')
    PATH=/usr/5bin:$PATH
    export PATH
    ;;
esac


ECHO 'nhiuaha\nkokoko'

