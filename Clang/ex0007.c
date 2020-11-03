#include <stdio.h>

int main(int argc, char const* argv[])
{
  int sum1, sum2=0, a = 100, b = 100;
  sum1 = a+b;
  sum2 = sum2 +sum1;
  printf("%d\n",sum1);
  printf("%d\n",sum2);
  return 0;
}
