#include <stdio.h>

int main(int argc, char const* argv[])
{
  int ten[][3]={
    {89,65,65},
    {67,88,81},
    {72,95,91}
  };
  int sum[3];
  int kokugo, sugaku, eigo;

  for (int i = 0; i < (sizeof(ten) / sizeof(*(ten))); i++) {
    kokugo+=ten[i][0];
    sugaku+=ten[i][1];
    eigo+=ten[i][2];
  }
  printf("国語 : %d\n", kokugo);
  printf("数学 : %d\n", sugaku);
  printf("英語 : %d\n", eigo);
  return 0;
}
