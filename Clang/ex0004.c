#include <stdio.h>

int main(int argc, char const* argv[])
{
  int a,b,c;
  double x;
  char ch1,ch2;
  char str[] = "COMPUTER";

  a = 1000;
  b = 0xabc;
  c = 0777;
  x = 0.01;
  ch1 = 'A';
  ch2 = '8';

  printf("str = %s\n", str);
  printf("a = %d\n", a);
  printf("b = %x\n", b);
  printf("c = %o\n", c);
  printf("x = %.2f\n", x);
  printf("ch1 = %c\n", ch1);
  printf("ch2 = %c\n", ch2);

  return 0;
}
