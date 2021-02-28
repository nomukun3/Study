#include <stdio.h>

int main(int argc, char const* argv[])
{
  int aaa[3]={0};
  aaa[1]=10;
  aaa[2]=20;

  /* for (int i = 0; i < sizeof(aaa)/sizeof(aaa[0]); i++) { */
  /*   printf("%d\n",aaa[i]); */
  /* } */
  /* printf("%ld\n",sizeof(aaa[0])); */

  /* printf("%ld\n", sizeof(aaa)); */

  /* printf("%ld\n", sizeof(aaa[0])); */
  /* printf("%ld\n", sizeof(aaa)); */

  for (int i = 0; i < sizeof(aaa)/sizeof(aaa[0]); i++) {
    printf("配列aaa[%d]の値は\t%d\n",i,aaa[i]);
  }

  return 0;
}
