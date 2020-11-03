#include <stdio.h>

int main(int argc, char const* argv[])
{
  int array1[5];
  int array2[]={1,2,3,4,5};
  printf("%lo\n", (sizeof(array2) / sizeof(*(array2))));
  for (int i = 0; i < (sizeof(array2) / sizeof(*(array2))); i++) {
    array1[i]=array2[(sizeof(array2) / sizeof(*(array2)))-1-i];
    printf("array1[%d] : %d\n",i,array1[i]);
  }
  return 0;
}
