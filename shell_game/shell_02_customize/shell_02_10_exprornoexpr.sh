#!/bin/sh

case "$((1))" in
  1)
    expr()
    {
      "$(($*))"
    }
    ;;
esac 2> /dev/null

echo $((19+2))

