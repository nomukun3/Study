#include <stdio.h>

int main(int argc, char const* argv[])
{
  int array1[] = {1, 2, 3};
  int array2[5];

  array2[0]= 10;
  array2[1]=array1[0];
  array2[2]=array1[1]+100;

  printf(" %d \n %d \n %d \n", array2[0], array2[1], array2[2]);
  return 0;
}
