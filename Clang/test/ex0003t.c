#include <stdio.h>
#include <float.h>

#define LENGTH 5
float aaa=FLT_MAX;
char ch1=255;
unsigned char ch2=255;

int main(int argc, char const* argv[])
{
  for (int i = 1; i < LENGTH; i++) {
    for (int j = 1; j < LENGTH; j++) {
      printf("■");
    }
    printf("\n");
  }
  printf("floatのMAX = %f\n",aaa);
  printf("charの255 = %d\n",ch1);
  printf("unsigned charの255 %d\n",ch2);
  return 0;
}
