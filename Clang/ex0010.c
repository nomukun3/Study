#include <stdio.h>

int main(int argc, char const* argv[])
{
  int array1[][3]={
    {1,2,3},
    {4,5,6},
    {7,8,9}
  };
  for (int i = 0; i < (sizeof(array1) / sizeof(*(array1))); i++) {
    for (int l = 0; l < (sizeof(array1[i]) / sizeof(*(array1[i]))); l++) {
      printf("%d",array1[i][l]);
    }
    printf("\n");
  }
  for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
      printf(" %d",i*j);
    }
    printf("\n");
  }
  return 0;
}

