#include <stdio.h>
#include <unistd.h>

int main(int argc, char const* argv[])
{
  int aaa=1;
  printf("aaa\taaa\n");
  printf("\"も\'も\\nを\n");
  printf("\\bでは表示位置を戻す\n");
  printf("a\bb\bc\bd\be\bf\bg\n");
  printf("\a\n");
  sleep(aaa);
  printf("\a\n");
  sleep(aaa);
  printf("\a\n");
  sleep(aaa);
  printf("\a\n");
  sleep(aaa);
  printf("\a\n");
  return 0;
}
