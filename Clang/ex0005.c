#include <stdio.h>

int main(int argc, char const* argv[])
{
  int i = 1000;
  char str[] = "12345";
  double x;
  char ch;
  printf("iのsizeは%luです\n", sizeof(i));
  printf("xのsizeは%luです\n", sizeof(x));
  printf("chのsizeは%luです\n", sizeof(ch));
  printf("strのsizeは%luです\n", sizeof(str));
  return 0;
}
